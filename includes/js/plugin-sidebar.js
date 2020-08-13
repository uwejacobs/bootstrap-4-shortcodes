( function( wp ) {
    var registerPlugin = wp.plugins.registerPlugin;
    var PluginSidebar = wp.editPost.PluginSidebar;
    var el = wp.element.createElement;
    var Text = wp.components.TextControl;

    const bsIcon = el('svg',
	    {
		    width: 20,
    		height: 20,
    		viewBox: "0 0 16 16",
    		'class': "bi bi-bootstrap",
    		fill: "currentColor"
    	},
	    el( 'path',
		    {
		        'fill-rule': "evenodd",
			    d: "M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"
		    }
	    )
    );

    registerPlugin( 'bs4-plugin-sidebar', {
        render: function() {
            return el( PluginSidebar,
                {
                    name: 'bs4-plugin-sidebar',
                    icon: bsIcon,
                    title: 'Bootstrap 4 Shortcodes',
               },
                el( 'div',
                    { className: 'plugin-sidebar-content' },
                    el( Text, {
                        label: 'Meta Block Field',
                        value: 'Initial value',
                        onChange: function(content) { jQuery("#bootstrap-shortcodes-help").modal('show');},
                    } )
                )            );
        },
    } );
} )( window.wp );