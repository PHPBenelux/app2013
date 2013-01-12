Ext.define('PhpBnl2013.store.Sponsors', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: "PhpBnl2013.model.Sponsor",
        proxy: {
            type: "jsonp",
            url : "http://conference.phpbenelux.eu/2013/?json=phpbenelux.sponsors",
            reader: {
                type: "json",
                rootProperty: "posts"
            }
        },
        autoLoad: true
    }
});