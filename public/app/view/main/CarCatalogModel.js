/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.main.CarCatalogModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.carcatalogmodel',

    data: {
        catalogName: 'Car Catalog',
        searchName: 'Search',
        managementName: 'Management'
    }

    //TODO - add data, formulas and/or methods to support your view
});
