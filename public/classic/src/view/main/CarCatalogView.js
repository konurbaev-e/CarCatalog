Ext.define('MyApp.view.main.CarCatalogView', {
    extend: 'Ext.panel.Panel',
    xtype: 'carCatalogView',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.CarGridView',
        'MyApp.view.main.SearchCarView',
        'MyApp.view.main.CarCatalogModel'
    ],

    viewModel: 'carcatalogmodel',
    controller: 'carcatalogcontroller',

    layout: 'border',
    items: [
        {
            xtype: 'panel',
            title: {
                bind: {
                    text: '{catalogName}'
                },
                flex: 1
            },
            region: 'north',
            height: 40
        },
        {
            xtype: 'searchCarView',
            title: {
                bind: {
                    text: '{searchName}'
                },
                flex: 1
            },
            region: 'west',
            width: 400,
            collapsible: true,
            collapsed: false
        },
        {
            xtype: 'carGridView',
            title: {
                bind: {
                    text: '{managementName}'
                },
                flex: 1
            },
            region: 'center'
        }

    ],
    renderTo: Ext.getBody()
});