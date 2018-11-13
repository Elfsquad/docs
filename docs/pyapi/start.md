# Elfskot PyApi

The Elfskot PyApi is a lightweight Python implementation that uses the REST API. The script can be copied from below:

```python
# Required packages:
# pip3 install requests pandas
import requests
import json
from enum import Enum
import pandas as pd

def head(s): return s[0] if len(s) > 0 else []
def tail(s): return s[1:]
def reverse(s): return s[::-1]
def last(s): return s[-1:]
def init(s): return s[0:len(s)-1]
def take(s, n): return s[:n]
def drop(s, n): return s[n:]
def product(s): return reduce(lambda x, y: x * y, s)

class TextType(Enum):
    Description = 0
    ExtendedDescription = 1
    MoreInfo = 2

class ElfskotApi():
    
    base_address = 'https://api.elfskot.cloud/api/2/'
    
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
            
    def all(self, endpoint): return self.http_get(endpoint)
    def get(self, endpoint, k): return head(self.http_get('{}?id={}'.format(endpoint, k)))
    def find(self, endpoint, p, v): return self.http_get('{}?{}={}'.format(endpoint, p, v))
    def first(self, endpoint, p, v): return head(self.find(endpoint, p, v))
    def new(self, endpoint, o): return self.http_post(endpoint, o)
    def update(self, endpoint, o): return self.http_put(endpoint, o)
    def delete(self, endpoint, k): self.http_delete(endpoint, k)  
    def help(self, endpoint): print('Model for {}:\r\n{}'
                                    .format(endpoint, list(self.first(endpoint, 'id', '').keys())))
```

Note that it is currently not possible to use `include`, `skip`, and `limit` url parameters (hence lightweight). Usage of the PyApi is demonstrated below.

## Creating a feature

A feature can be created in the following way:

```python
db = ElfskotApi('69b1132c-df11-49d0-baf2-2d8f6ddfc4f1', 'lkmx41yu')

category = head(db.all('categories'))
uom = db.first('uom', 'description', 'Milli')

feature = {'name': 'Test feature', 
           'articleCode': 'ART-123', 
           'categoryId': category['id'], 
           'unitOfMeasurementId': uom['id'],
           'texts': [
               {'languageIso': 'en', 'type': TextType.Description.value, 'value': 'Example description'},
               {'languageIso': 'en', 'type': TextType.ExtendedDescription.value, 'value': 'Example description'},
               {'languageIso': 'en', 'type': TextType.MoreInfo.value, 'value': 'Example description'}
           ]}

feature = db.new('features', feature)
db.delete('features', feature['id'])
```

Remove the `db.delete` from the end of the script to keep the newly created feature.

## Count features

It is possible to count all features in the following way:

```python
len(db.all('features'))
```

which returns:

```text
245
```

## Help

Help about a model can be found using `help(endpoint)`.

```python
db.help('featuremodels')
```

which returns:

```text
Model for featuremodels:
['rootFeatureId', 'status', 'revisionOf', 'rootFeature', 'order', 'displayPrices', 'autodeskUrn', 'steps', 'nodes', 'relationships', 'organizationSellsFeatureModels', 'dynamicGroups', 'id', 'organizationId', 'organizationName', 'creatorId', 'reference', 'synced', 'createdDate', 'updatedDate', 'customField1', 'customField2', 'customField3', 'customField4', 'customField5']
```

## Get all root features

All root features can be found in the following way:

```python
# Fetch all root features
for key in map(lambda x: x['rootFeatureId'], db.all('featuremodels')):
    feature = db.get('features', key)
    print(feature['name'])
```

which returns:

```text
S6000
X8000
Plateauaanhanger
TEST relaties
Betonput
Test Wessel
Formule cycle
b_min
```