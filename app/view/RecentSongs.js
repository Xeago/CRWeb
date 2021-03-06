Ext.define('CRWeb.view.RecentSongs', {

    extend: 'Ext.List',   
    xtype: 'RecentSongs',
	
	id : 'RecentSongs',
    config: {

		id : 'RecentSongs',	
        title: ' ',
		
        items: [
            {
               // docked: 'top',
                xtype: 'titlebar',
				cls:'displaynone'
            }
        ],

		store: {
					autoLoad:true,
					fields:['song'],
					proxy: {
						type:'ajax',
						actionMethods: {
							create : 'POST',
							read   : 'POST',
							update : 'POST',
							destroy: 'POST'
						},
						enablePagingParams: false,
						headers: {
							'Content-Type': 'application/json',
							//'content-Length': '0'
						},
						url: 'http://cr.xeago.eu/RecentSongsService.asmx/RecentSongs',
						reader: {
							type: 'json',
							rootProperty: 'd'
						}
					}
					
					
				},    
        disableSelection: true,

        emptyText: '<p class="no-searches">No Songs Found</p>',
		//		itemTpl:'{song}',
		itemTpl: Ext.create('Ext.XTemplate',                 
         //   '<div>',
			'<div class="RecentSongItem {[xindex === 0 ? \"FirstRecentSong\" : \"\"]}">',
                '<h2>{song} {[xindex === 0 ? \" : Wordt nu afgespeeld\" : \"\"]}</h2>',				
            '</div>',
            {
				//derp :function(){alert('yo');}
            }
        )
    }
});
