YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "AdminIndexController",
        "AdminNavigation",
        "AdminSubnavService",
        "ArticleService",
        "BaseController",
        "CacheEntityService",
        "CacheFactory",
        "ClientJS",
        "ClusterApiController",
        "CommandService",
        "CommentService",
        "ContentService",
        "DAO",
        "DBEntityService",
        "DBManager",
        "DocumentCreator",
        "EmailService",
        "FSEntityService",
        "FormController",
        "ImportWP",
        "JSONFSEntityService",
        "Localization",
        "ManageComments",
        "MediaLoader",
        "MediaService",
        "MemoryEntityService",
        "MongoRegistrationProvider",
        "MongoSessionStore",
        "PBError",
        "PageController",
        "PencilBlue",
        "PluginPublicContentController",
        "PluginService",
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
        "TemplateService",
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