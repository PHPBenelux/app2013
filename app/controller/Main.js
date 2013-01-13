Ext.define('PhpBnl2013.controller.Main', {
    extend: 'Ext.app.Controller',
    require: ['PhpBnl2013.view.TalkDetail'],

    config: {
        refs: {
            detailToolbar: 'talkdetail toolbar',
            detailContent: 'talkdetail panel',
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

    openItem: function(cmp, index, target, record) {
        var recordData = record.data,
            toolbar, content;
        if (record.data.talk_type == 'nontalk') {
            return true;
        }

        if (!this.talkDetail) {
            this.talkDetail = Ext.create('PhpBnl2013.view.TalkDetail');
        }

        toolbar = this.talkDetail.query('toolbar')[0];
        content = this.talkDetail.query('panel')[0];

        toolbar.setTitle(recordData.title);
        content.setData(recordData);
        content.setHeight('100%');

        Ext.Viewport.setActiveItem(this.talkDetail);
    },

    openMain: function() {
        Ext.Viewport.setActiveItem(0);
    }
});