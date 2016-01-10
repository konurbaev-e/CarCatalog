Ext.define('MyApp.view.main.CarGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'carGridView',

    requires: [
        'MyApp.store.CarCatalogStore'
    ],

    store: {
        type: 'carcatalogstore'
    },

    frame: true,

    viewConfig:{
        markDirty:false
    },

    columns: [
        {
            text: 'Model',
            flex: 1,
            sortable: true,
            dataIndex: 'name',
            editor: {
                xtype:'textfield',
                allowBlank: false,
                blankText: 'Required field!'
            }
        },
        {
            flex: 2,
            text: 'Price',
            sortable: true,
            dataIndex: 'price',
            editor: {
                xtype:'textfield',
                regex: /^([0-9]{1,20})*$/,
                regexText: 'Incorrect format!',
                allowBlank: false,
                blankText: 'Required field!'
            }
        }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            saveBtnText: 'Save',
            cancelBtnText: 'Cancel'
        })
    ],
    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Add',
                    action: 'add',
                    iconCls: 'fa-cog'
                },
                '-',
                {
                    action: 'delete',
                    text: 'Delete',
                    iconCls: 'fa-cog',
                    disabled: true
                }
            ]
        }
    ]

});