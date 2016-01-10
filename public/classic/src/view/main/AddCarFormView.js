Ext.define('MyApp.view.main.AddCarFormView', {
    extend: 'Ext.window.Window',
    xtype: 'addCarFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Название модели',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'price',
                    fieldLabel: 'Цена',
                    regex: /^([0-9]{1,20})*$/,
                    regexText: 'Цена должна состоять из цифр',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Сохранить',
            action: 'save',
            disabled: false
        },
        {
            text: 'Отменить',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});