///// gnb 풀다운  /////
$(function () { $("#mainMenu>li").mouseover(function () {
        $(".subMenu").stop().fadeIn(1000);
        $("#subMenuBG").stop().fadeIn(1000);
    });
    $("#mainMenu>li").mouseout(function () {
       $(".subMenu").stop().fadeOut(1000);
        $("#subMenuBG").stop().fadeOut(1000);
    });

});

///// 슬라이드 쇼 /////
$(function(){

    setInterval(fnSlide, 3000);

    function fnSlide() {

        $("#shuttleFrame>a").fadeOut(500);
        $("#shuttleFrame>a:nth-child(2)").fadeIn(
            1000,
            function() {
                $("#shuttleFrame>a:first-child").insertAfter("#shuttleFrame>a:last-child");
            }
        );

    }

});

//// 레이어 팝업 ////
$(function(){

    /* 모달 레이어 팝업 시작 */
    $("#noticeArea span.point").click(function(){
        $("#layerBG").css({"display": "block"});
    });
    /* 모달 레이어 팝업 끝 */

    /* 모달 레이어 팝업 닫기버튼 시작 */
    $("#closeBtn").click(function(){
        $("#layerBG").css({"display": "none"});
    });
    /* 모달 레이어 팝업 닫기버튼 끝 */


});
