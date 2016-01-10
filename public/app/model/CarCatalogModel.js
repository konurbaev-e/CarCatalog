Ext.define('MyApp.model.CarCatalogModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'price'],

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