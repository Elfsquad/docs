export default [
  {
    "name": "Quotations",
    "entities": [
      {
        "name": "QuotationFooter",
        "description": "Represents a Quotation overview (e.g., the total price), without detailing each item.",
        "link": "/docs/apis/data-schema/quotationFooter"
      },
      {
        "name": "Quotation Group",
        "description": "Represents a group of items within a Quotation.",
        "link": "/docs/apis/data-schema/quotationGroup"
      },
      {
        "name": "Quotation",
        "description": "Represents a quotation.",
        "link": "/docs/apis/data-schema/quotation"
      },
      {
        "name": "QuotationDiscountLine",
        "description": "Represents a discount line included in a Quotation or QuotationGroup.",
        "link": "/docs/apis/data-schema/quotationDiscountLine"
      },
      {
        "name": "Quotation Files",
        "description": "Represents an uploaded file related to a Quotation.",
        "link": "/docs/apis/data-schema/quotationFile"
      },
      {
        "name": "QuotationLine",
        "description": "Represents a single line item in a QuotationGroup.",
        "link": "/docs/apis/data-schema/quotationLine"
      },
      {
        "name": "QuotationPropertyValue",
        "description": "Holds the custom property value for a Quotation.",
        "link": "/docs/apis/data-schema/quotationPropertyValue"
      }
    ]
  },
  {
    "name": "Configuration models",
    "entities": [
      {
        "name": "FeatureModelEditorModel",
        "description": "Represents the feature model used on the configuration model editor page.",
        "link": "/docs/apis/data-schema/featureModelEditorModel"
      },
      {
        "name": "FeatureModel",
        "description": "Represents a complete feature model.",
        "link": "/docs/apis/data-schema/featureModel"
      },
      {
        "name": "FeatureModelNode",
        "description": "Represents a node within a feature model.",
        "link": "/docs/apis/data-schema/featureModelNode"
      },
      {
        "name": "FeatureModelRelationship",
        "description": "Represents the relationships between different feature model nodes. Used for structural relationships (mandatory, optional, etc.),cross tree (requires, excludes) and calculated values.",
        "link": "/docs/apis/data-schema/featureModelRelationship"
      },
      {
        "name": "FeatureModelRelationshipCondition",
        "description": "Represents a condition or filter relationship on a feature model node.",
        "link": "/docs/apis/data-schema/featureModelRelationshipCondition"
      },
      {
        "name": "LinkedFeatureModel",
        "description": "Represents a connection between a parent and child feature model.",
        "link": "/docs/apis/data-schema/linkedFeatureModel"
      },
      {
        "name": "TextExpresssion",
        "description": "An expression used to calculate a text value for a FeatureModelNode.",
        "link": "/docs/apis/data-schema/textExpression"
      },
      {
        "name": "Expression",
        "description": "Represents a formula within a FeatureModel.",
        "link": "/docs/apis/data-schema/expression"
      },
      {
        "name": "FeatureModelDynamicGroup",
        "description": "Represents a dynamic group within a FeatureModel.",
        "link": "/docs/apis/data-schema/featureModelDynamicGroup"
      }
    ]
  },
  {
    "name": "General",
    "entities": [
      {
        "name": "AuditTrail",
        "description": "Used by the system to track all changes for every entity in Elfsquad.",
        "link": "/docs/apis/data-schema/auditTrail"
      },
      {
        "name": "FileEntity",
        "description": "Represents a file stored within Elfsquad.",
        "link": "/docs/apis/data-schema/file"
      },
      {
        "name": "Notification",
        "description": "Represents a system notification.",
        "link": "/docs/apis/data-schema/notification"
      }
    ]
  },
  {
    "name": "Features",
    "entities": [
      {
        "name": "Category",
        "description": "Represents a category that can be assigned to features.",
        "link": "/docs/apis/data-schema/category"
      },
      {
        "name": "CategoryText",
        "description": "Holds the translated names for a category.",
        "link": "/docs/apis/data-schema/categoryText"
      },
      {
        "name": "Feature",
        "description": "Represents a feature.",
        "link": "/docs/apis/data-schema/feature"
      },
      {
        "name": "FeatureText",
        "description": "Stores translated descriptions, extended descriptions, more info\u0027s, and Quotation texts for a Feature.",
        "link": "/docs/apis/data-schema/featureText"
      },
      {
        "name": "UnitOfMeasurement",
        "description": "Represents a unit of measurement for Features.",
        "link": "/docs/apis/data-schema/unitOfMeasurement"
      },
      {
        "name": "UnitOfMeasurementText",
        "description": "Holds the translated names for the UnitOfMeasurement entity.",
        "link": "/docs/apis/data-schema/unitOfMeasurementText"
      },
      {
        "name": "VAT",
        "description": "Represents a VAT entry for calculating tax on a Quotation.",
        "link": "/docs/apis/data-schema/vat"
      }
    ]
  },
  {
    "name": "Configuring",
    "entities": [
      {
        "name": "Configuration",
        "description": "Represents a configuration.",
        "link": "/docs/apis/data-schema/configuration"
      }
    ]
  },
  {
    "name": "Step editor",
    "entities": [
      {
        "name": "ConfiguratorImage",
        "description": "Represents an image used in a 2D visualization step.",
        "link": "/docs/apis/data-schema/configuratorImage"
      },
      {
        "name": "FeatureModelAttachmentNode",
        "description": "Represents an attachment node within a 3D step in a feature model.",
        "link": "/docs/apis/data-schema/featureModelAttachmentNode"
      },
      {
        "name": "CameraPosition",
        "description": "Specifies the camera position for a 3D step.",
        "link": "/docs/apis/data-schema/cameraPosition"
      },
      {
        "name": "Hotspot",
        "description": null,
        "link": "/docs/apis/data-schema/hotspot"
      },
      {
        "name": "Step",
        "description": "Represents a step within a configuration model.",
        "link": "/docs/apis/data-schema/step"
      },
      {
        "name": "StepText",
        "description": "Holds the translated texts for a Step.",
        "link": "/docs/apis/data-schema/stepText"
      }
    ]
  },
  {
    "name": "Localization",
    "entities": [
      {
        "name": "Country",
        "description": "Represents a country.",
        "link": "/docs/apis/data-schema/country"
      },
      {
        "name": "Currency",
        "description": "Represents a currency.",
        "link": "/docs/apis/data-schema/currency"
      },
      {
        "name": "ExchangeRate",
        "description": "Stores the exchange rate between different currencies.",
        "link": "/docs/apis/data-schema/exchangeRate"
      },
      {
        "name": "Language",
        "description": "Represents a language.",
        "link": "/docs/apis/data-schema/language"
      },
      {
        "name": "Translations",
        "description": "Used to define custom translations shown in EMS or the showroom.",
        "link": "/docs/apis/data-schema/translations"
      }
    ]
  },
  {
    "name": "CRM accounts",
    "entities": [
      {
        "name": "CrmAccount",
        "description": "Represents a CRM account",
        "link": "/docs/apis/data-schema/crmAccount"
      },
      {
        "name": "CrmContact",
        "description": "Represents a CRM contact associated with a CrmAccount.",
        "link": "/docs/apis/data-schema/crmContact"
      },
      {
        "name": "CrmDiscountLine",
        "description": "Represents a default discount line in CRM, automatically added to a Quotation.",
        "link": "/docs/apis/data-schema/crmDiscountLine"
      },
      {
        "name": "CrmShare",
        "description": "Defines which organizations share CRM data among themselves.",
        "link": "/docs/apis/data-schema/crmShare"
      },
      {
        "name": "CrmAccountPropertyValue",
        "description": "Holds the custom property value for a specific CrmAccount.",
        "link": "/docs/apis/data-schema/crmAccountPropertyValue"
      }
    ]
  },
  {
    "name": "Feature properties",
    "entities": [
      {
        "name": "FeatureProperty",
        "description": "Defines a custom property for features.",
        "link": "/docs/apis/data-schema/featureProperty"
      },
      {
        "name": "AssociatedFeatureProperty",
        "description": "Specifies which features are linked to a particular feature property of type \u0027Associated feature\u0027",
        "link": "/docs/apis/data-schema/associatedFeatureProperty"
      },
      {
        "name": "FeatureHasFeatureProperty",
        "description": "Stores the value of a custom FeatureProperty for a particular Feature.",
        "link": "/docs/apis/data-schema/featureHasFeatureProperty"
      }
    ]
  },
  {
    "name": "Home",
    "entities": [
      {
        "name": "NewsItem",
        "description": "Represents a news item displayed on the EMS home page.",
        "link": "/docs/apis/data-schema/newsItem"
      }
    ]
  },
  {
    "name": "Organization",
    "entities": [
      {
        "name": "Organization",
        "description": "Represents an organization.",
        "link": "/docs/apis/data-schema/organization"
      },
      {
        "name": "OrganizationSellsFeature",
        "description": "Defines whether an Organization can configure a specific Feature.",
        "link": "/docs/apis/data-schema/organizationSellsFeature"
      },
      {
        "name": "OrganizationSellsFeatureModel",
        "description": "Defines whether an Organization can configure a particular FeatureModel.",
        "link": "/docs/apis/data-schema/organizationSellsFeatureModel"
      }
    ]
  },
  {
    "name": "Custom properties",
    "entities": [
      {
        "name": "Quotation Property",
        "description": "Defines a custom property specifically for a Quotation.",
        "link": "/docs/apis/data-schema/quotationProperty"
      },
      {
        "name": "CrmAccountProperty",
        "description": "Defines a custom property for a CrmAccount.",
        "link": "/docs/apis/data-schema/crmAccountProperty"
      },
      {
        "name": "EntityPropertyText",
        "description": "This entity stores translated names for both QuotationProperty and CrmAccountProperty.",
        "link": "/docs/apis/data-schema/entityPropertyText"
      }
    ]
  },
  {
    "name": "Quotation workflow",
    "entities": [
      {
        "name": "QuotationStatus",
        "description": "Represents a custom QuotationStatus.",
        "link": "/docs/apis/data-schema/quotationStatus"
      }
    ]
  },
  {
    "name": "Quotation templates",
    "entities": [
      {
        "name": "QuotationTemplate",
        "description": "Represents a template used to generate Quotation documents.",
        "link": "/docs/apis/data-schema/quotationTemplate"
      },
      {
        "name": "QuotationTemplateOrganization",
        "description": "Defines whether an Organization can use a specific QuotationTemplate.",
        "link": "/docs/apis/data-schema/quotationTemplateOrganization"
      }
    ]
  },
  {
    "name": "Integrations",
    "entities": [
      {
        "name": "Script",
        "description": "Represents a custom script that can be triggered by a custom button.",
        "link": "/docs/apis/data-schema/script"
      },
      {
        "name": "IntegrationApplication",
        "description": "Represents a third-party integration application.",
        "link": "/docs/apis/data-schema/integrationApplication"
      },
      {
        "name": "CustomButtonTrigger",
        "description": "Represents a custom button within the system.",
        "link": "/docs/apis/data-schema/customButtonTrigger"
      }
    ]
  },
  {
    "name": "Settings",
    "entities": [
      {
        "name": "Settings",
        "description": "Represents EMS tenant or organization-wide settings.",
        "link": "/docs/apis/data-schema/settings"
      }
    ]
  },
  {
    "name": "Showrooms",
    "entities": [
      {
        "name": "ShowroomSettings",
        "description": "Represents the settings for a specific showroom.",
        "link": "/docs/apis/data-schema/showroomSettings"
      }
    ]
  },
  {
    "name": "Users",
    "entities": [
      {
        "name": "Role",
        "description": "Represents a user role.",
        "link": "/docs/apis/data-schema/role"
      },
      {
        "name": "User",
        "description": null,
        "link": "/docs/apis/data-schema/user"
      },
      {
        "name": "UserHasAccessToSuborganization",
        "description": "Specifies which sub-organizations a (non-admin) user can access.",
        "link": "/docs/apis/data-schema/userHasAccessToSuborganization"
      }
    ]
  }
];