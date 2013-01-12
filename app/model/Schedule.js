Ext.define('PhpBnl2013.model.Schedule', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id', type: 'number'},
            {name: 'title', type: 'string'},
            {name: 'title_link', type: 'string'},
            {name: 'content', type: 'string'},
            {name: 'timestamp_start', type: 'date'},
            {name: 'timestamp_end', type: 'date'},
            {name: 'talk_type', type: 'string'},
            {name: 'room' },
            {name: 'speaker' }
        ]
//        ],
//        hasMany: [
//            {
//                model: 'PhpBnl2013.model.Speaker',
//                name: 'speaker'
//            },
//            {
//                model: 'PhpBnl2013.model.Room',
//                name: 'room'
//            }
//        ]
    }
});