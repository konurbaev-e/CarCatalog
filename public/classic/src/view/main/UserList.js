/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userlist',

    requires: [
        'MyApp.store.Users'
    ],

    title: 'Users',

    store: {
        type: 'users'
    },

    columns: [
        { text: 'firstName',  dataIndex: 'firstName' },
        { text: 'age', dataIndex: 'age', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
