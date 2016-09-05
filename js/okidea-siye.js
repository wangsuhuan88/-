//设置广告基本参数
var OkIdea_sy1={
	"1":22171,
	"2":22171,
	"3":22171,
	"res_url":"http://images.17173.com/2015/www/if/video/aoqi/201503/23-57/",
	"res1":"A1.swf",
	"res1f":"A2.swf",
	"href1":"http://clk.optaim.com/event.ng/Type=click&FlightID=201503&TargetID=sohu&Values=716ae2fd,40729e5b,1e41d878,0b09e544&AdID=698821",
	"top1":32,
	"res2":"B1.swf",
	"res2f":"B2.swf",
	"href2":"http://clk.optaim.com/event.ng/Type=click&FlightID=201503&TargetID=sohu&Values=716ae2fd,40729e5b,1e41d878,0b09e544&AdID=698821",
	"top2":162,
	"res3":"C1.swf",
	"res3f":"C2.swf",
	"href3":"http://clk.optaim.com/event.ng/Type=click&FlightID=201503&TargetID=sohu&Values=716ae2fd,40729e5b,1e41d878,0b09e544&AdID=698821",
	"top3":292,
	"close_btn":"close.jpg",
	"oi_log":"http://ad.elr.okjoys.com/count?",
	"show_time":6
}
ue.NavSide.hideOverTop(600);
var OkIdea_siye_in,oi_sy_fold;
var oi_sy_played,oi_sy_time_area,oi_time,oi_now_timeArea;
//预设广告内容
if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
	OkIdea_siye_in='<div id="OkIdea_sy_fold" style="width:0px; height:0px; position:absolute; right:0px; top:32px;"></div>';
}else{
	OkIdea_siye_in='<div id="OkIdea_sy_fold" style="width:100px; height:430px; position:absolute; right:0px; top:32px; z-index:999;"><div class="oi_fold" style="width:100px; height:90px; position:relative; visibility:hidden;"><a style="position:absolute; z-index:1000; left:0px; top:0px; display:inline-block; width:100px; height:90px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="javascript:oi_play_sy(1)"></a><embed width="100" height="90" src="'+OkIdea_sy1.res_url+OkIdea_sy1.res1f+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div><div class="oi_fold" style="width:100px; height:90px; position:relative; margin-top:60px; visibility:visible;"><a style="position:absolute; z-index:1000; left:0px; top:0px; display:inline-block; width:100px; height:90px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="javascript:oi_play_sy(2)"></a><embed width="100" height="90" src="'+OkIdea_sy1.res_url+OkIdea_sy1.res2f+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div><div class="oi_fold" style="width:100px; height:90px; position:relative;margin-top:60px; visibility:visible;"><a style="position:absolute; z-index:1000; left:0px; top:0px; display:inline-block; width:100px; height:90px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="javascript:oi_play_sy(3)"></a><embed width="100" height="90" src="'+OkIdea_sy1.res_url+OkIdea_sy1.res3f+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div><a href="javascript:oi_sy_closeAll()" style="position:absolute; display:inline-block; width:45px; height:20px; right:0px; bottom:0px; z-index:1000;"><img src="'+OkIdea_sy1.res_url+OkIdea_sy1.close_btn+'" alt="close all" width="45" height="20" /></a></div>';
}

oi_sy_fold='<div id="OkIdea_sy_show" style="width:420px; height:300px; position:absolute; right:100px; top:32px; z-index:1001;">'+OkIdea_sy_big(1)+'</div>';

function OkIdea_sy_big(c){
	var oi_sy_big='<a style="position:absolute; z-index:1001; left:0px; top:0px; display:inline-block; width:380px; height:300px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="'+OkIdea_sy1["href"+c]+'" target="_blank"></a><a style="position:absolute; z-index:1001; left:380px; top:15px; display:inline-block; width:40px; height:285px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="'+OkIdea_sy1["href"+c]+'" target="_blank"></a><embed width="420" height="300" src="'+OkIdea_sy1.res_url+OkIdea_sy1["res"+c]+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always">';
	return oi_sy_big;
}
//写入广告的函数
function oi_sy_putIn(){
	$("body").prepend(OkIdea_siye_in+oi_sy_fold);
	$("#OkIdea_sy").css({top:($(window).height()-$("#OkIdea_sy").height())/2+$(window).scrollTop()});
	sy_sign_log("show","","1");
}
//写入接口队列
AD=new ADM("oi_sy_in",3);
AddSchedule(AD);
var _oi_sy_in_3;
function oi_sy_in_main(o){
	_oi_sy_in_3=o;
	oi_sy_putIn();
}

//大图关闭
function oi_siye_close(second,m){
	$("#OkIdea_sy_show").hide();
	$(".oi_fold").css({visibility:"visible"});
	m=m+"";
	sy_sign_log("close","&time="+second,m);
	_oi_sy_in_3.s=2;
}
//播放完毕
function oi_siye_playover(n){
	$("#OkIdea_sy_show").hide();
	$(".oi_fold").css({visibility:"visible"});
	_oi_sy_in_3.s=2;
	sy_sign_log("play_all","&time="+OkIdea_sy1.show_time*1000,n)
}
//重播
function oi_play_sy(s){
	$(".oi_fold").css({visibility:"visible"});
	$(".oi_fold:eq("+(parseInt(s)-1)+")").css({visibility:"hidden"});
	$("#OkIdea_sy_show").css({top:OkIdea_sy1["top"+s]});
	document.getElementById("OkIdea_sy_show").innerHTML=OkIdea_sy_big(s);
	$("#OkIdea_sy_show").show();
	var oi_s=s+"";
	sy_sign_log("replay","",oi_s)
}
//关闭回收位
function oi_sy_closeAll(){
	$("#OkIdea_sy_fold,#OkIdea_sy_show").remove();
	sy_sign_log("recycle","","1");
	_oi_sy_in_3.s=2;
}
//sign log
function sy_sign_log(log_type,data,m){
	//$.getJSON(OkIdea_sy1.oi_log+log_type+"_ad_id="+OkIdea_sy1[m]+data,{},function(data){});
	var log_img = new Image();
	log_img.src = OkIdea_sy1.oi_log+log_type+"_ad_id="+OkIdea_sy1[m]+data;
}

