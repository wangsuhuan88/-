$(function(){
	//新闻搜索
//the search
var $selectlist = $('.js-type-list', '.search-box'),
	$searchtype = $('.search-type span');
$('.search-select').hover(function() {
	$selectlist.find('li').show();
	$selectlist.find('a:contains("'+$searchtype.text()+'")').parent('li').hide();
    $('.type-box', $(this)).show();
},function() {
    $('.type-box', $(this)).hide();
});
$selectlist.delegate('a', 'click',
function() {
	if($('input[type=text]:visible').val()){
		var inputVal = $('input[type=text]:visible').val();
	}
    $('.search-type span', '.search-box').text($(this).text());
    //$('form.search-form', '.search-box').attr('action', $(this).data('url'));
	$('input.search_type', '.search-box').val($(this).data('type'));
    $('input:text', '.search-box').removeAttr('name').hide();
    $('input[data-v=' + $(this).data('id') + ']', '.search-box').attr('name', 'keyword').show();
    $('.type-box', '.search-box').hide();
	$('input[type=text]:visible').val(inputVal)
});
try{
$('input[data-v=1],input[data-v=2],input[data-v=3]').autocomplete('http://search.17173.com/web/suggest.do', {
    width: 211,
    minChars: 1,
    selectFirst: false,
    autoFill: false,
    dataType: 'jsonp',
    parse: function(data) {
        var parsed = [];
        var rows = data;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (row) {
                parsed.push({
                    data: row,
                    value: row.kindName,
                    result: this.formatResult && this.formatResult(row, row.kindName) || row.kindName
                });
            }
        }
        return parsed;
    },
    extraParams: {
        'topN': 8,
        'index-name': 'SHOUYOUSUGGEST',
        'filter': "kindChannel='1'"
    },
    formatItem: function(row, i, max) {
        return '<a href="' + row.kindUrl + '">' + row.kindName + '</a>'
    },
    formatMatch: function(row, i, max) {
        return row.kindName + " " + row.kindUrl
    },
    formatResult: function(row) {
        return row.kindName
    }
});
}catch(e){}
var loc2 = window.location.href;
if(loc2.indexOf('/site-search.html')!=-1){
	$('.js-type-list a:eq(1)', '.search-box').click();
}else if(loc2.indexOf('/list.html')!=-1){
	$('.js-type-list a:eq(0)', '.search-box').click();
}
var wloc = {};
(function(loc){
	var url = window.location.href;
	loc.getQueryString = function(name){
		//console.log(window.location.href.match(/&?keyword=([^&]*)/));
		var reg = new RegExp("(^|&|\\?)"+ name +"=([^&]*)(&|$)"), r; 
		if (r=url.match(reg)) return decodeURIComponent(r[2]); return null; 
	}
	
})(wloc);
wloc.getQueryString('keyword')&&$('input[name=keyword]','.search-form').val(wloc.getQueryString('keyword').replace('+',' '));

});