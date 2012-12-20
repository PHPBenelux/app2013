Ext.define('PhpBnl2013.view.TalkDetail', {
    extend: 'Ext.Panel',

    config: {
        items: [
            {
                xtype: 'toolbar',
                title: 'Talk title',
                items: {
                    xtype: 'button',
                    ui: 'back',
                    text: 'Back'
                }
            },
            {
                styleHtmlContent: true,
                html: 'Yeah!'
            }
        ]
    }
});