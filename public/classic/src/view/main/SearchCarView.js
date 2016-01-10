Ext.define('MyApp.view.main.SearchCarView', {
    extend: 'Ext.form.Panel',
    xtype: 'searchCarView',
    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            name: 'search',
            labelWidth: '50%',
            fieldLabel: 'Enter model name',
            maxLength: 200
        }
    ]
});