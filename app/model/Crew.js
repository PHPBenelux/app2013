Ext.define('PhpBnl2013.model.Crew', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'ID', type: 'number'},
            {name: 'post_type', type: 'string'},
            {name: 'post_slug', type: 'string'},
            {name: 'post_url', type: 'string'},
            {name: 'post_status', type: 'string'},
            {name: 'post_title', type: 'string'},
            {name: 'post_title_plain', type: 'string'},
            {name: 'post_content', type: 'string'},
            {name: 'post_excerpt', type: 'string'},
            {name: 'post_date', type: 'date'},
            {name: 'post_modified', type: 'date'},
            {name: 'post_categories', type: 'auto'},
            {name: 'picture', type: 'string'}
        ]
    }
});