Ext.define('PhpBnl2013.view.TalkDetail', {
    extend: 'Ext.Panel',
    xtype: 'talkdetail',

    config: {
        items: [
            {
                xtype: 'toolbar',
                title: '',
                items: {
                    xtype: 'button',
                    ui: 'back',
                    text: 'Back'
                }
            },
            {
                xtype: 'panel',
                layout: 'fit',
                scrollable: true,
                styleHtmlContent: true,
                data: [],
                tpl: [
                    '<h1>{title}</h1>',
                    '<p>',
                        'What: {talk_type}<br>',
                        'Where: {room.post_title}<br>',
                        'When: {timestamp_start:date("F j, H:i")} - {timestamp_end:date("H:i")}',
                    '</p>',
                    '<p>{content}</p>',
                    '<tpl for="speaker">',
                        '<h2>{post_title}</h2>',
                        '<p>{post_content}</p>',
                    '</tpl>'
                ].join("")
            }
        ]
    }
});