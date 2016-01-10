Ext.define('MyApp.store.CarCatalogStore', {
    extend: 'Ext.data.Store',

    alias: 'store.carcatalogstore',

    model: 'MyApp.model.CarCatalogModel',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'car',
            read: 'car',
            destroy: 'car',
            update: 'car'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});