//设置视频基本参数
var OkIdea_sc1={
	"flash_src":"http://images.17173.com/2015/www/if/video/aoqi/201503/23-63/sc.swf",
	"flash_h":263,
	"flash_w":325,
	"flash_href":"http://clk.optaim.com/event.ng/Type=click&FlightID=201503&TargetID=sohu&Values=7d6c741c,d17e9fec,3dd2de3c,8bfbcc1d&AdID=16552094",
	"oi_sc_id":22172,
	"oi_log":"http://ad.elr.okjoys.com/count?",
	"show_time":15,
	"interval":10
}
var oi_sc1_in,oi_played=0,oi_last_play_time,oi_time;
//设置cookie, XX时间内只播放一次
oi_time = new Date().getTime();
oi_last_play_time = getCookie("oi_lastPlayTime"+OkIdea_sc1.oi_sc_id);
if ((oi_last_play_time==null)||(oi_time-oi_last_play_time>=1000*60*OkIdea_sc1.interval)){
	oi_played=1;
	SetCookie("oi_lastPlayTime"+OkIdea_sc1.oi_sc_id,oi_time);
}else {
	oi_played=0;
};
//预设广告内容
if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
	oi_sc1_in='<div id="OkIdea_sc" style="width:0px; height:0px; "></div>';
}else{
oi_sc1_in='<div id="OkIdea_sc" style="position:absolute;width:'+OkIdea_sc1.flash_w+'px;height:'+OkIdea_sc1.flash_h+'px;right:0px;top:500px;z-index:99998;"><embed width="'+OkIdea_sc1.flash_w+'" height="'+OkIdea_sc1.flash_h+'" src="'+OkIdea_sc1.flash_src+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div>';
}
//写入广告的函数
function oi_sc_putIn(){
	if(oi_played==1){
		$("body").prepend(oi_sc1_in);
		$("#OkIdea_sc").css({top:$(window).height()+$(window).scrollTop()-$("#OkIdea_sc").height()});
		sc_sign_log("show","");
	}
}

//写入接口队列
AD=new ADM("oi_sc_in",5);
AddSchedule(AD);
var _oi_sc_in_5;
function oi_sc_in_main(o){
	_oi_sc_in_5=o;
	oi_sc_putIn();
}

//关闭
function oi_sc_close(second){
	$("#OkIdea_sc").remove();
	_oi_sc_in_5.s=2;
	sc_sign_log("close","&time="+second)
}
//播放完毕
function oi_sc_playover(){
	_oi_sc_in_5.s=2;
	sc_sign_log("play_all","&time="+OkIdea_sc1.show_time*1000)
}
//重播
function oi_sc_replay(){
	sc_sign_log("replay","")
}
//open url
function oi_sc_url(){
	window.open(OkIdea_sc1.flash_href);
}
//cookie操作函数
function getCookie(name)//取cookies函数       
{
	var oi_arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if(oi_arr != null) return unescape(oi_arr[2]); return null;
}

function SetCookie(name,value)//设置cookie
{
	var oi_Days = 14; //此 cookie 将被保存XX 天
	var oi_exp = new Date();    //获取当时时间;
	oi_exp.setTime(oi_exp.getTime() + oi_Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + oi_exp.toGMTString();
}
//sign log
function sc_sign_log(log_type,data){
	//$.getJSON(OkIdea_sc1.oi_log+log_type+"_ad_id="+OkIdea_sc1.oi_sc_id+data,{},function(data){});
	var log_img = new Image();
//	log_img.src = OkIdea_sc1.oi_log+OkIdea_sc1.oi_sc_id;
	log_img.src = OkIdea_sc1.oi_log+log_type+"_ad_id="+OkIdea_sc1.oi_sc_id+data;
}

