Ext.define('PhpBnl2013.store.Room', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: "PhpBnl2013.model.Page",
        proxy: {
            type: "jsonp",
            url : "http://conference.phpbenelux.eu/2013/api/get_recent_posts/",
            extraParams: {
                post_type: 'room',
                orderby: 'title',
                order: 'ASC'
            },
            reader: {
                type: "json",
                rootProperty: "posts"
            }
        },
        autoLoad: true
    }
});