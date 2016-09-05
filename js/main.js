$(function(){

$("img.lazy").lazyload();
$(".m-hotsearch a").eq(0).css("padding-left","0");
$("#recom-list li").eq(8).css("padding-right","0");
$("li.test-item:first-child").css("border","none");
$(".js-bgf6").hover(function(){$(this).addClass("f-bg");},function(){$(this).removeClass("f-bg");});

$(".hotqzitem").hover(function(){$(this).removeClass("f-bg").addClass("f-bg-hover");},function(){$(this).removeClass("f-bg-hover").addClass("f-bg");});
//各行变色最新开测
$(".start-item:nth-child(odd)").css("background-color","#f6f6f6");
$(".start-item:nth-child(even)").css("background-color","#fff");

$(".welflist").each(function(){
    var index=$(this).index();
     if ((index+1)%2==0) {    
        $(this).css("margin-left","18px");
        // $(this).find("a").css({"padding-right":"0","padding-right":"10px"});版本1
    };
});
$("#u-orgVideo li").hover(function(){
    var index=$(this).index();
    var obj=$(this).siblings();
    obj.find(".c1").hide();
    obj.find(".c2").show();
    $(this).find(".c1").show();
    $(this).find(".c2").hide();
});
bgFun("#u-playicon li");
bgFun(".inditem");
bgFun(".phitem2");
bgFun(".art-list li");
bgFun(".play-icon-list");
paddrFun("#u-actnew li",0);
paddrFun("#u-actnew2 li",0);
paddrFun(".u-imglist li",0);
paddrFun(".gril-item",0);
paddrFun(".hotqzitem",1);
function bgFun(obj){
        $(obj).mouseover(function(){
        var index=$(this).index();
        $(this).addClass("f-bg").siblings().removeClass("f-bg");
        });
}
function paddrFun(obj,csst){
   $(obj).each(function(){    
      var index=$(this).index();
      if ((index+1)%2==0) {
          if (csst==0) {
              $(this).css("padding-right","0");
          }
          else
          {
              $(this).css("margin-right","0");
          }
          // $(this).find("a").css({"padding-right":"0","padding-right":"10px"});版本1
      };
    });
}



function getAdTop(){
  var top1=$(".m-header").offset().top+$(".m-header").height();
  $("#banner-ad").css("top",top1+"px");
}


var adtime=null;
setTimeout(function(){

  $("#banner-ad").show(1000);
  $("#adStart").fadeIn();
  adtime=setTimeout(function(){
    $("#banner-ad").hide(1000);
  },5000);
},2000);

$("#adClose").click(function(){$("#banner-ad").toggle(1000);clearTimeout(adtime);});
$("#adStart").click(function(){$("#banner-ad").stop().show(1000);});
$("#bgClose").click(function(){$("body").css("background","none");$(this).parent().hide();});
$("#videoClose").click(function(){$(this).parent().hide();});




//广告投放
 (function(b) {
  for(var i =0; i<b.length; i++){
    $(".gb-tab-pn .recomm-list:eq(1) img").eq(i).attr("src", b[i].smallImg);
    $(".gb-tab-pn .recomm-list:eq(1) img").eq(i).attr("alt", b[i].smallImg);
    $(".gb-tab-pn .recomm-list:eq(1) a").eq(i).attr("href", b[i].link);
    $(".gb-tab-pn .recomm-list:eq(1) .tit").eq(i).html(b[i].adText1);
    $(".gb-tab-pn .recomm-list:eq(1) .score").eq(i).html(b[i].adText2);
  }
})
 (
  [{
  smallImg: 'http://ics.073img.com/15/03/20150323115049_d4e0a.jpg', //图片
  smallImgAlt: '17173.com', //小图图片alt属性
  link:'17173.com',//链接
  }]
);









});


window.onload=function(){
var moveFrameWork={   
    startMove:function(obj, json, fn){

      clearInterval(obj.iTimer);
      var iCur = 0;
      var iSpeed = 0;
      obj.iTimer = setInterval(function() {
        var iBtn = true;
        for (var attr in json) {
          if (attr == 'opacity') {
            iCur = Math.round(moveFrameWork.getStyle(obj, 'opacity') * 100);
          } else {
            iCur = parseInt(moveFrameWork.getStyle(obj, attr));
          }

          iSpeed = (json[attr] - iCur) / 5;
          iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

          if (iCur != json[attr]) {
            iBtn = false;
            if (attr == 'opacity') {
              obj.style.opacity = (iCur + iSpeed) / 100;
              obj.style.filter = 'alpha(opacity='+(iCur + iSpeed)+')';
            } else {
              
           
              obj.style[attr] = iCur + iSpeed + 'px';
            }
          }
          
        }
        
        if (iBtn) {
          clearInterval(obj.iTimer);
          fn && fn.call(obj);
        }
        
      },30);
    },
    getStyle:function(obj, attr) {
      if (obj.currentStyle) {
        return obj.currentStyle[attr];
      } else {
        return getComputedStyle(obj, false)[attr];
      }
    },
    childFun:function(elements,j){
      var leng=elements.length;
      for (var i = 0; i < leng; i++) { 
        var par=elements[i].getElementsByTagName("div")[0].getElementsByTagName("div")[0];
        var big=par.getElementsByTagName("div")[0];
        var small=par.getElementsByTagName("div")[1];
        if (i==j) {
         
          big.style.display="block";
          small.style.display="none";
          elements[i].className="test-item";
        }
        else
        {
          big.style.display="none";
          small.style.display="block";
          elements[i].className="test-item  nohover";
        }
      }
    },
    initFun:function(){
      var elements=document.getElementById("ul-test").getElementsByTagName("li");
      var leng=elements.length;
      for (var i = 0; i < leng; i++) {
        elements[i].style.position="absolute";
        if (i==0) {
           elements[0].style.left=0;
           elements[0].style.width=420+"px";
        }else
        { 
          elements[i].style.left=1000-((leng-i)*146)+"px";
        }
        elements[i].index=i;
        elements[i].onmouseover=function(){
          //alert(this.index);
          //start1
          for (var j = 0; j < leng; j++) {
                      var tmp1=j*146;
                      if (this.index<j) {
                        var spaceX=1000-((leng-j)*146);
                        moveFrameWork.startMove(elements[j],{left:spaceX,width:'145'});
                      }
                      else
                      {
                        moveFrameWork.startMove(elements[j],{left:tmp1,width:'145'});
                      };
                      var tmp2=this.index*146;

                      moveFrameWork.startMove(this,{left:tmp2,width:'420'});
                      moveFrameWork.childFun(elements,this.index);
           }
          //end1
        };
      

        
      };    
    },
    initAdFun:function(){//没有应用
      var objAd=document.getElementById("banner-ad");
      var leftX=document.body.clientWidth;
      var target=parseInt(leftX/2-500);
      moveFrameWork.startMove(objAd,{right:target});
      objAd.style.display="block";
      var btnclose=document.getElementById("adClose");
      var btnstart=document.getElementById("adStart");
      btnclose.onclick=function(){       
        btnstart.style.display="block";
        moveFrameWork.startMove(objAd,{right:-1000});
      },
      btnstart.onclick=function(){
        btnstart.style.display="none";
        moveFrameWork.startMove(objAd,{right:target});
      }

    }
}
//新游测评动画
new moveFrameWork.initFun();
//setTimeout(function(){new moveFrameWork.initAdFun();},2000);

//焦点图
(function(){
    var obj=null;   
    var chlidObj=null;
    var num=0;
    var tmpObj=null;

    function forcusFun(){ 
        num++;   
        var length=chlidObj.length;
        if (num>length-1) {
            num=0;
        };
        obj.style.top = -num*260+"px";
        childObj=null;

    };

    function forcusHoverFun(){  
        for (var i = 0; i < chlidObj.length; i++) {
            if(chlidObj[i]==this)
            {
              num=i;
              clearInterval(time1);
            }
        };
      
    }
    function forcusMoveFun(){   
        time1=setInterval(forcusFun,3000);    
    }    
 
    var time1;
    function initFocus(){
      obj = document.getElementById("u-focus");
      chlidObj=document.getElementById("u-focus").getElementsByTagName("li");
      time1=setInterval(forcusFun,3000);
      for (var i = 0;  i<chlidObj.length; i++) {
        chlidObj[i].onmouseover=forcusHoverFun;
        chlidObj[i].onmouseout=forcusMoveFun;
      }
    }

    initFocus();
})();

}


