YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "AdminIndexController",
        "AdminNavigation",
        "AdminSubnavService",
        "ApiActionController",
        "ArticleService",
        "AsyncJobRunner",
        "BaseController",
        "CacheEntityService",
        "CacheFactory",
        "ClientJS",
        "ClusterApiController",
        "ClusterJobRunner",
        "CommandService",
        "CommentService",
        "ContentService",
        "CustomObjectService",
        "DAO",
        "DBEntityService",
        "DBManager",
        "DocumentCreator",
        "EditObject",
        "EditObjectType",
        "EmailService",
        "FSEntityService",
        "FormController",
        "ImportWP",
        "JSONFSEntityService",
        "JobApiController",
        "JobRunner",
        "JobService",
        "LibrariesService",
        "Localization",
        "ManageComments",
        "ManageObjectTypes",
        "ManageObjects",
        "MediaLoader",
        "MediaService",
        "MemoryEntityService",
        "MongoRegistrationProvider",
        "MongoSessionStore",
        "NewObject",
        "NewObjectType",
        "NewPagePostController",
        "PBError",
        "PageController",
        "PencilBlue",
        "PluginApi",
        "PluginAvailableJob",
        "PluginDependenciesJob",
        "PluginInitializeJob",
        "PluginInstallJob",
        "PluginJobRunner",
        "PluginPublicContentController",
        "PluginService",
        "PluginUninstallJob",
        "ReadOnlySimpleLayeredService",
        "RedisCommandBroker",
        "RedisRegistrationProvider",
        "RedisSessionStore",
        "RequestHandler",
        "SaveArticleDraft",
        "SecurityService",
        "ServerRegistration",
        "SessionHandler",
        "SimpleLayeredService",
        "SortObjects",
        "SortObjectsPostController",
        "TemplateEntityService",
        "TemplateService",
        "TemplateValue",
        "TopMenuService",
        "UrlService",
        "UserService",
        "Util",
        "ValidationService"
    ],
    "modules": [
        "Admin",
        "Database",
        "Entities",
        "ErrorSuccess",
        "Model",
        "Security",
        "Services",
        "Session",
        "Storage",
        "Theme",
        "Validation"
    ],
    "allModules": [
        {
            "displayName": "Admin",
            "name": "Admin",
            "description": "Services calls for the admin interface"
        },
        {
            "displayName": "Database",
            "name": "Database",
            "description": "Controlls the data model"
        },
        {
            "displayName": "Entities",
            "name": "Entities",
            "description": "Service calls for individual entities in the system"
        },
        {
            "displayName": "ErrorSuccess",
            "name": "ErrorSuccess",
            "description": "Specialized application error that knows what status code to return"
        },
        {
            "displayName": "Model",
            "name": "Model",
            "description": "Creates structures for persistence and cleans various fields."
        },
        {
            "displayName": "Security",
            "name": "Security",
            "description": "Service for managing user access"
        },
        {
            "displayName": "Services",
            "name": "Services",
            "description": "Service for creating JavaScript tags"
        },
        {
            "displayName": "Session",
            "name": "Session",
            "description": "Session storage backed by MongoDB"
        },
        {
            "displayName": "Storage",
            "name": "Storage",
            "description": "Services for managing storage"
        },
        {
            "displayName": "Theme",
            "name": "Theme",
            "description": "Theme content services"
        },
        {
            "displayName": "Validation",
            "name": "Validation",
            "description": "Provides a set of functions for common validations."
        }
    ]
} };
});