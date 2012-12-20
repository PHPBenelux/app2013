Ext.define('PhpBnl2013.store.Sponsors', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: "PhpBnl2013.model.Page",
        proxy: {
            type: "jsonp",
            url : "http://conference.phpbenelux.eu/2013/api/get_recent_posts/",
            extraParams: {
                count: 1000,
                post_type: 'sponsor',
                order: 'ASC',
                orderby: 'sponsor_method'
            },
            reader: {
                type: "json",
                rootProperty: "posts"
            }
        },
        autoLoad: true
    }
});