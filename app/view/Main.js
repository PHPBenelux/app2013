Ext.define('PhpBnl2013.view.Main', {
    extend: 'Ext.ux.slidenavigation.View',

    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom'
    ],

    config: {
        fullscreen: true,

        /**
         *  Any component within the container with an 'x-toolbar' class
         *  will be draggable.  To disable draggin all together, set this
         *  to false.
         */
        slideSelector: 'x-toolbar',

        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 200,

        /**
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 400,
            width: 200,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                title: {
                    title: 'Navigation',
                    centered: false,
                    width: 200,
                    left: 0
                }
            }]

        },

        /**
         *  Example of how to re-order the groups.
         */
        groups: {
            'Home': 1,
            'Info': 2,
            'About': 3
        },

        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            style: 'background: #fff',
            xtype: 'container'
        },

        items: [{
            title: 'Home',
            group: 'Home',
            slideButton: {
                selector: 'toolbar',
                iconCls: 'list'
            },

            items: [
                {
                    xtype: 'toolbar',
                    title: 'Home',
                    docked: 'top'
                },{
                    xtype: 'dataview',
                    scrollable: 'vertical',
                    store: 'Blogpost',
                    styleHtmlContent: true,
                    itemCls: 'blogpost',
                    itemTpl: '<h1>{title}</h1><div>{content}</div>'
                }
            ]
        },{
            title: 'Schedule',
            group: 'Info',
            slideButton: {
                selector: 'toolbar'
            },

            items: [
                {
                    xtype: 'toolbar',
                    title: 'Schedule',
                    docked: 'top'
                },{
                    xtype: 'list',
                    id: "schedulelist",
                    grouped: true,
                    store: 'Schedule',
                    styleHtmlContent: true,
                    itemCls: 'scheduleitem',
                    itemTpl: [
                        '<div class="room {room.post_name}"></div>',
                        '<div class="main">',
                            '<h3>{title}</h3>',
                            '<p class="speaker">',
                                '<tpl for="speaker">',
                                    '<span class="name">{post_title}</span>',
                                '</tpl>',
                            '</p>',
                        '</div>',
                        '<tpl if="talk_type !== \'nontalk\'">',
                            '<div class="more">&nbsp;</div>',
                        '</tpl>'
                    ].join("")
                }
            ]
        },{
            title: 'Location',
            group: 'Info',
            slideButton: {
                selector: 'toolbar'
            },

            items: [
                {
                    xtype: 'toolbar',
                    title: 'Location',
                    docked: 'top'
                },{
                    xtype: 'dataview',
                    scrollable: 'vertical',
                    store: 'Location',
                    styleHtmlContent: true,
                    itemCls: 'blogpost',
                    itemTpl: '<h1>{title}</h1><div>{content}</div>'
                }
            ]
        },{
            title: 'Sponsors',
            group: 'About',
            slideButton: {
                selector: 'toolbar'
            },

            items: [
                {
                    xtype: 'toolbar',
                    title: 'Sponsors',
                    docked: 'top'
                },{
                    xtype: 'dataview',
                    scrollable: 'vertical',
                    store: 'Sponsors',
                    styleHtmlContent: true,
                    itemCls: 'blogpost',
                    itemTpl: '<h1>{post_title}</h1><div><img src="{logo}">{post_content}</div>'
                }
            ]
        },{
            title: 'About',
            group: 'About',
            slideButton: {
                selector: 'toolbar'
            },

            items: [
                {
                    xtype: 'toolbar',
                    title: 'About',
                    docked: 'top'
                },{
                    xtype: 'dataview',
                    scrollable: 'vertical',
                    store: 'About',
                    styleHtmlContent: true,
                    itemCls: 'blogpost',
                    itemTpl: '<h1>{title}</h1><div>{content}</div>'
                }
            ]

        },{
            title: 'Crew',
            group: 'About',
            slideButton: {
                selector: 'toolbar'
            },

            items: [
                {
                    xtype: 'toolbar',
                    title: 'Crew',
                    docked: 'top'
                },{
                    xtype: 'dataview',
                    scrollable: 'vertical',
                    store: 'Crew',
                    styleHtmlContent: true,
                    itemCls: 'blogpost',
                    itemTpl: '<h1>{post_title}</h1><div><img src="{picture}">{post_content}</div>'
                }
            ]
        }
    ]
    }
});
