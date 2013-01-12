Ext.define('PhpBnl2013.store.Crew', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: "PhpBnl2013.model.Crew",
        proxy: {
            type: "jsonp",
            url : "http://conference.phpbenelux.eu/2013/?json=phpbenelux.crew",
            reader: {
                type: "json",
                rootProperty: "posts"
            }
        },
        autoLoad: true
    }
});