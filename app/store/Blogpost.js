Ext.define('PhpBnl2013.store.Blogpost', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: "PhpBnl2013.model.Blogpost",
        proxy: {
            type: "jsonp",
            url : "http://conference.phpbenelux.eu/2013/api/get_recent_posts/",
            extraParams: {
                count: 3
            },
            reader: {
                type: "json",
                rootProperty: "posts"
            }
        },
        autoLoad: true
    }
});