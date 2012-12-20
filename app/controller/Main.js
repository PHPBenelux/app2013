Ext.define('PhpBnl2013.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            scheduleitem: '#schedulelist',
            backbtn: 'button[ui=back]'
        },
        control: {
            scheduleitem: {
                itemtap: 'openItem'
            },
            backbtn: {
                tap: 'openMain'
            }
        }
    },

    openItem: function() {
        if (!this.talkDetail) {
            this.talkDetail = Ext.create('PhpBnl2013.view.TalkDetail');
        }
        Ext.Viewport.setActiveItem(this.talkDetail);
    },

    openMain: function() {
        Ext.Viewport.setActiveItem(0);
    }
});