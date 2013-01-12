Ext.define('PhpBnl2013.store.About', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: "PhpBnl2013.model.Page",
        proxy: {
            type: "jsonp",
            url : "http://conference.phpbenelux.eu/2013/api/get_page/",
            extraParams: {
                slug: 'about'
            },
            reader: {
                type: "json",
                rootProperty: "page"
            }
        },
        autoLoad: true
    }
});