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
            url : "http://conference.phpbenelux.eu/2013/?json=phpbenelux.schedule",
            reader: {
                type: "json",
                rootProperty: "posts"
            }
        },
        sorters: [
            {
                property: 'timestamp_start',
                direction: 'ASC'
            },
            {
                sorterFn: function(record1, record2) {
                    var name1 = record1.data.room.post_title,
                        name2 = record2.data.room.post_title;

                    return name1 > name2 ? 1 : (name1 === name2 ? 0 : -1);
                }
            }
        ],
        grouper: {
            groupFn: function (record) {
                var start = record.data.timestamp_start,
                    end = record.data.timestamp_end,
                    startH = Ext.util.Format.leftPad(start.getHours(), 2, '0'),
                    startM = Ext.util.Format.leftPad(start.getMinutes(), 2, '0'),
                    endH = Ext.util.Format.leftPad(end.getHours(), 2, '0'),
                    endM = Ext.util.Format.leftPad(end.getMinutes(), 2, '0');

                start = "January " + start.getDate() + " " + startH + ":" + startM;
                end =  endH + ":" + endM;

                return start + ' - ' + end;
            }
        },
        autoLoad: true
    }
});