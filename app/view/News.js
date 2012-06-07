Ext.define("CRWeb.view.News", {
    extend: 'Ext.navigation.View',
	xtype: 'News',
		
    config: {
	
		title:'Nieuws',
		displayField:'title',
		
		items: {
			xtype:'list',
			title:'easd',
			
			itemTpl:'{title}',
			grouped:true,
			
			store: {
				autoLoad:true,
				fields:['title','author','content','categories'],
				grouper: {
					groupFn: function(record) {
				                var cat = record.get('categories');
								for (var i=0;i<cat.length;i++)
								{
									if (cat[i]=='Nieuws: Games / Xbox')
										return 'Carnaval-Radio'
								}
								return 'Vasteloa'
				            }
				},
				proxy: {
					type:'jsonp',
					url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://tweakers.net/feeds/mixed.xml',
	                reader: {
	                    type: 'json',
	                    rootProperty: 'responseData.feed.entries'
	                }
				}
			}
		}
    }
});