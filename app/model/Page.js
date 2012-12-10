Ext.define('PhpBnl2013.model.Page', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id', type: 'number'},
            {name: 'type', type: 'string'},
            {name: 'slug', type: 'string'},
            {name: 'url', type: 'string'},
            {name: 'status', type: 'string'},
            {name: 'title', type: 'string'},
            {name: 'title_plain', type: 'string'},
            {name: 'content', type: 'string'},
            {name: 'excerpt', type: 'string'},
            {name: 'date', type: 'date'},
            {name: 'modified', type: 'date'},
            {name: 'categories', type: 'auto'}
        ]
    }
});