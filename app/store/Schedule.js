Ext.define('PhpBnl2013.store.Schedule', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.JsonP',
        'PhpBnl2013.store.Room',
        'PhpBnl2013.store.Speaker'
    ],

    config: {
        model: "PhpBnl2013.model.Schedule",
        proxy: {
            type: "jsonp",
            url : "http://conference.phpbenelux.eu/2013/api/get_recent_posts/",
            extraParams: {
                post_type: 'talk',
                orderby: 'schedule_start',
                order: 'ASC',
                count: 1000,
                custom_fields: 'schedule_start,schedule_end,talk_type,talk_room,speakers,picture'
            },
            reader: {
                type: "json",
                rootProperty: "posts"
            }
        },
        grouper: {
            groupFn: function (record) {
                return record.data.custom_fields.schedule_start[0];
            }
        },
        autoLoad: true
    }
});