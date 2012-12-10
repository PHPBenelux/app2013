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
                selector: 'toolbar'
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
                    xtype: 'panel',
                    html: '<img src="resources/images/guide.jpg" width="100%" />'
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
                    xtype: 'panel',
                    html: '<img src="resources/images/guide.jpg" width="100%" />'
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
                    xtype: 'panel',
                    html: '<img src="resources/images/guide.jpg" width="100%" />'
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
                    xtype: 'panel',
                    html: '<img src="resources/images/guide.jpg" width="100%" />'
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
                    xtype: 'panel',
                    html: '<img src="resources/images/guide.jpg" width="100%" />'
                }
            ]
        }
    ]
    }
});
