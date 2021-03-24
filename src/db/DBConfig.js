// DB Configurations
export const DBConfig = {
    name: 'MyDB',
    version: 1,
    objectStoresMeta: [
        {
            store: 'continents',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'name', keypath: 'name', options: { unique: false } },
                { name: 'code', keypath: 'code', options: { unique: false } }
            ]
        }
    ]
};
