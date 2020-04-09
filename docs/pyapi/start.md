#Elfsquad PyApi

The following code is the implementation of theElfsquad PyApi. It is adviced to store the code in a file `elfskotapi.py`, which can then be included in your Python projects. The usage of the PyApi is described in the remainder of this document.

```python
# Required packages:
# pip3 install requests pandas
import requests
import json
from enum import Enum
import pandas as pd
import math

def unpack(s): return list(s) if type(s) != 'list' else s
def head(s): return s[0] if len(s) > 0 else []
def tail(s): return s[1:]
def reverse(s): return s[::-1]
def last(s): return s[-1:]
def init(s): return s[0:len(s)-1]
def take(s, n): return s[:n]
def drop(s, n): return s[n:]

class TextType(Enum):
    Description = 0
    ExtendedDescription = 1
    MoreInfo = 2

class ElfskotApi():

    base_address = 'https://api.elfsquad.io/api/2/'

    def __init__(self, application_id, secret):
        self.application_id = application_id
        self.secret = secret
        self.get_token()

    def get_token(self):
        payload = { 'clientId': self.application_id, 'secret': self.secret}
        result = requests.post(self.get_url('auth/elfskotconnectlogin'), json=payload)
        self.check_result(result)
        self.token = json.loads(result.text)['accessToken']

    def check_result(self, result):
        if result.status_code != 200:
            raise ValueError('Error: API returned status code {}'.format(result.status_code))
        return True

    def get_auth_header(self): return {'Authorization': 'bearer {}'.format(self.token)}
    def get_url(self, endpoint): return self.base_address + endpoint

    def http_return_if_valid(self, result):
        self.check_result(result)
        return json.loads(result.text)

    def http_get(self, endpoint):
        print(endpoint)
        return self.http_return_if_valid(
            requests.get(self.get_url(endpoint), headers=self.get_auth_header())
        )

    def http_post(self, endpoint, o):
        return self.http_return_if_valid(
            requests.post(self.get_url(endpoint), json=o, headers=self.get_auth_header())
        )

    def http_put(self, endpoint, o):
        return self.http_return_if_valid(
            requests.put(self.get_url(endpoint), json=o, headers=self.get_auth_header())
        )

    def http_delete(self, endpoint, key):
        result = requests.delete(self.get_url(endpoint) + '/{}'.format(key), headers=self.get_auth_header())
        if result.status_code != 200: 
            raise ValueError('Error: API returned status code {}'.format(result.status_code))

    def query(self, endpoint): return Query(endpoint, self.http_get)
    def all(self, endpoint): return self.query(endpoint)
    def find(self, endpoint, p, v): return self.query(endpoint).filter(p, v)
    def get(self, endpoint, k): return self.find(endpoint, 'id', k)
    def new(self, endpoint, o): return self.http_post(endpoint, o)
    def update(self, endpoint, o): return self.http_put(endpoint, o)
    def delete(self, endpoint, k): self.http_delete(endpoint, k)  
    def help(self, endpoint): print('Model for {}:\r\n{}'
                                    .format(endpoint, list(self.first(endpoint, 'id', '').keys())))
        
class Query():
    
    def __init__(self, endpoint, http):
        self.http = http
        self.endpoint = endpoint
        self.parameters = {}
        self.data = []
        self.index = 0
        
    def raise_(self, t): raise ValueError(t)
    
    def skip(self, n):
        if 'skip' in self.parameters: self.raise_('Skip already set.')
        self.parameters['skip'] = n
        return self
    
    def take(self, n):
        if 'limit' in self.parameters: self.raise_('Take already called.')
        self.parameters['limit'] = n
        return self
    
    # this does no require multiple includes yet, it is limited to
    # one field.
    def include(self, name):
        self.parameters['include'] = name
        return self
    
    def filter(self, property, value):
        self.parameters[property] = value
        return self
    
    def sort(self, property, descending = False):
        self.parameters['orderby'] = property
        return self
    
    def descending(self):
        self.parameters['descending'] = True
        return self
    
    def url_qry_params(self):
        return '{}?{}'.format(self.endpoint, '&'.join(['{}={}'.format(k,v) 
                                                       for k,v in dict(self.parameters).items()])).lower()
    
    def __next__(self): 
        if self.data == []: self.data = self.http(self.url_qry_params())
        try: result = self.data[self.index]
        except IndexError: raise StopIteration
        self.index += 1
        return result
    
    def __iter__(self):
        return self
    
    def list(self): return list(self)
    def df(self): return pd.DataFrame(self.list())
    def first(self): return head(self.list())
```

## PyApi reference

### ElfskotApi

The `ElfskotApi` object is a HTTP client which also handles the authorization token. It allows the `GET`, `POST`, `PUT`, and `DELETE` HTTP methods. The `ElfskotApi` is instantiated with a `appId` and `secret` which are found in the integration section of the EMS. The following example shows how to instantiate the object:

```python
db = ElfskotApi('appId', 'secret')
```

The following methods are available for the `ElfskotApi` object:

|Expression|Description|Example|
|-|-|-|
|`query(endpoint)`|Return the `Query` object for the endpoint.|`db.query('features')`|
|`all(endpoint)`|Returns the `Query` object for the endpoint.|`db.all('features')`|
|`find(endpoint, property, value)`|Finds all objects with a property equal to the value.|`db.find('features','name','tire')`|
|`get(endpoint, id)`|Finds a single object, based on an id.|`db.get('features', ...)`|
|`new(endpoint, object)`|Creates a new object.|`db.new('features', feature)`|
|`update(endpoint, object)`|Updates an object, it matches it by id.|`db.update('features',feature)`|
|`delete(endpoint, id)`|Deletes an object, based on the id.|`db.delete('features', ...)`|
|`help(endpoint`)|Retrieves the first object in the endpoint, and displays all column names.|`db.help('features')`|

### Query

The `Query` class allows you to compose HTTP requests for our API. It supports lazy evaluation, and the data is only requested when the data is enumerated, or accessed. The `Query` object helps with composing the url for the request. The `Query` object will allow you to use the query parameters that are supported by our API. The query parameters that are supported are: `skip`, `limit`, `orderby`, `descending`, `include`, and `filter`.

The following methods are available in the `Query` object:

|Expression|Description|Example|
|-|-|-|
|`skip(int)`|Skips the first n results.|`db.all('features').skip(10)`|
|`take(int)`|Limit the query to n results.|`db.all('features').take(10)`|
|`include(string`|Includes the objects in a list of objects, for example, feature texts.|`db.all('features').include('texts')`|
|`filter(string,any)`|Filter on a property in the model.|`db.all('features').filter('name','S6000')`|
|`sort(string)`|Order the results on a property.|`db.all('features').sort('name')`|
|`descending()`|Order the results in descending order.|`db.all('features').sort('name').descending()`|
|`list()`|Returns the results as a list, this will evaluate the query.|`db.all('features').list()`|
|`df()`|Returns the results as a `DataFrame` (requires `pandas`), this will evaluate the query.|`db.all('features').df()`|
|`first()`|Returns the first element in the results, this will evaluate the query.|`db.all('features').first()`|

**Note**: If you want to retrieve a single object, use the `take(1)` expression with `first()` to evaluate the query. This ensures that the API is only processing a single record, which improves the speed. For example: `db.all('features').sort('name').take(1).first()`.

## Usage demonstration

### Getting started

First instantiate a new `ElfskotApi` object with the `appId` and `secret` which are found in the integrations tab in your EMS.

```python
db = ElfskotApi('appId', 'secret')
```

While initializing the object, an authorization token is requested from the API. When the object is initialized, it is now possible to query our REST API.

As an example, we will request a sorted list (by name) of features. Also, the texts of the feature should be included in the query. Finally, we take the first feature that is found and print it.

```python
db.all('features').sort('name').include('texts').take(1).first()
```

```
{'articleCode': None,
 'cardImageUrl': None,
 'category': None,
 'categoryId': None,
 'createdDate': '2018-03-30T09:52:47.7797469+00:00',
 'creatorId': '7c10626d-6d57-403c-ec51-08d56407f341',
 'customField1': None,
 'customField2': None,
 'customField3': None,
 'customField4': None,
 'customField5': None,
 'hiddenThreeDModelItems': [],
 'id': 'be855af0-3cf2-47c0-bac8-08d595a67251',
 'marginPct': 0.0,
 'maxValue': 0.0,
 'minValue': 0.0,
 'name': None,
 'organizationId': None,
 'organizationName': None,
 'organizationSellsFeature': None,
 'packingUnit': 0.0,
 'properties': None,
 'reference': None,
 'salesPrice': 0.0,
 'salesPriceLabel': '€ 0,00',
 'stepValue': 0.0,
 'subcategoryIds': [],
 'synced': False,
 'tags': [],
 'texts': [],
 'threeDModelItems': [],
 'type': 0,
 'unitOfMeasure': None,
 'unitOfMeasurement': None,
 'unitOfMeasurementId': None,
 'updatedDate': '2018-10-10T12:09:21.8682548+00:00',
 'vat': None,
 'vatId': None}
```

In the same way, it is possible to request all the categories from the API, and display them by id and name. Do note that the name is a multilingual field, therefore it returns a list with the names in each language. It is also required to include the texts, because this is a different object.

```python
list(map(lambda c: {c['texts'][0]['value']: c['id']}, db.all('categories').include('texts')))
```

```
[{'Model': '4fde3e79-c90e-4844-3d1b-08d50589c407'},
 {'Engine': 'c6619774-d2aa-4bc4-3d1d-08d50589c407'},
 {'Transmission': 'b60ee5fb-bb67-4420-3d1e-08d50589c407'},
 {'Exterior color': '3ef76c1c-0d4a-4598-3d1f-08d50589c407'},
 {'Chassis': '79d10665-18ca-4405-3d20-08d50589c407'},
 {'Interior': '88e43ee0-be1c-4efe-3d21-08d50589c407'},
 {'Infotainment': 'dd2c73a1-007d-4c32-3d22-08d50589c407'},
 {'Rims': 'a51f921f-8ba4-47b1-3d23-08d50589c407'},
 {'Tires': '1c52e16f-fb87-41dd-3d24-08d50589c407'},
 {'Exhaust': '2ad69069-8e98-4034-d91b-08d507486180'},
 {'Sedans': '2ac6bffb-2543-48f3-f3d4-08d5688fd09d'},
 {'Off-road': 'e4e18ddb-9cc2-4155-67c6-08d568a38d77'}]
```
