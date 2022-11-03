var elementsPage = []
var elShow = []
var elShowBox = []
var elShowTitle = []
var elShowBoxAbout = []
var elShowBoxPrice = []
var elShowBoReport = []
var elShowFormCon = []
var elShowCon = []
var plusNum = 20;
var allH = $(this).innerHeight();
window.onload = function () {  // i put this becuse i have imges , (before loaud img then go to the code to calculate heihgt elements)
    $(".mainS").each(function (index) {
        var idname = $(this).attr("id");//take id element to put it in array
        if (index == 0) {// top site like heder 
            elementsPage[index] = [idname, 0];// offset header is 0
            // i take half screen 50vh i can take any namber . i use it later
        }
        else {
            var otherTop = $(this).offset().top - allH / 4;// now i take top THIS element and - half Screen
            elementsPage[index] = [idname, otherTop];
        }
    }
    );

    function doArr(classNameEle, arrName) {
        $(classNameEle).each(function (index) {
            var idname = $(this).attr("id");//take id element to put it in array

            var otherTop = $(this).offset().top - allH + 100;// now i take top THIS element and - half Screen 
            arrName[index] = [idname, otherTop];
        }
        )
    }
    doArr(".heidE", elShowTitle);
    doArr(".boxCard > div", elShow);
    doArr(".boxAbout > div", elShowBoxAbout);
    doArr(".boxOur > div", elShowBox);
    doArr(".boxprice > div", elShowBoxPrice);
    doArr(".boxreport", elShowBoReport);
    doArr(".boxCon", elShowCon);

    window.onscroll = function () {
        scrollThis()
    }
    scrollThis();

}


doInterval = true;
function scrollThis() {
    for (i = 0; i < elementsPage.length; i++) {
        if (window.scrollY >= elementsPage[i][1]) {
            $(`.${elementsPage[i][0]}A`).parent().addClass("active").siblings().removeClass("active");

        }
    }
    function doShow(arr, delayEl = false, delaYbetween) {
        let d = 0;
        for (i = 0; i < arr.length; i++) {

            if (window.scrollY >= arr[i][1]) {
                if (delayEl) {
                    $(`#${arr[i][0]}`).css("transitionDelay", `${d}s`);
                    d += delaYbetween;
                }
                $(`#${arr[i][0]}`).addClass("visibleE");
                if (arr[i][0] == "boxConId") {
                    $("#formElCon").addClass("visibleE")
                }
            }
        }

    }
    new doShow(elShowTitle);
    new doShow(elShow, true, .1);
    new doShow(elShowBoxAbout);
    new doShow(elShowBox, true, .3);
    new doShow(elShowCon);
    new doShow(elShowBoxPrice, true, .2);
    var d0 = parseInt($(".circlRep")[0].textContent);
    var d1 = parseInt($(".circlRep")[1].textContent);
    var d2 = parseInt($(".circlRep")[2].textContent);
    var d3 = parseInt($(".circlRep")[3].textContent);
    var stopInt = false
    if (window.scrollY >= elShowBoReport[0][1]) {
        clearInterval(loopNum);
        if (doInterval) {
            var loopNum = setInterval(function () {
                stopInt = true;
                if (d0 <= 800) {
                    $(".circlRep")[0].textContent = d0;
                    d0 += plusNum;
                    stopInt = false;
                }
                if (d1 <= 1200) {
                    $(".circlRep")[1].textContent = d1;
                    d1 += plusNum;
                    stopInt = false;
                }
                if (d2 <= 900) {
                    $(".circlRep")[2].textContent = d2;
                    d2 += plusNum;
                    stopInt = false;
                }
                if (d3 <= 1500) {
                    $(".circlRep")[3].textContent = d3;
                    d3 += plusNum;
                    stopInt = false;
                }
                if (stopInt) {
                    clearInterval(loopNum)
                }
            }, 50);
            doInterval = false;
        }
    }
}

$(".showMenu").click(function () {
    $(".listMenue  ul").fadeToggle()
})

function win700() {
    if (window.innerWidth <= 700) {
        $(".listMenue  ul").addClass("win700");
        $(".showMenu ~  ul").css("display", "none");
        $(".full").fadeOut();

    }
    else {
        $(".showMenu ~  ul").css("display", "flex");
        $(".listMenue  ul").removeClass("win700")
        $(".full").fadeIn();

    }
}
win700()
window.onresize = function () {
    win700();
}
$(".listMenue  ul li").click(function () {
    if ($(".showMenu ~  ul").hasClass("win700")) {
        $(".showMenu ~  ul").fadeToggle()
    }


})

$(".showBig").click(function () {
    var srcImg = $(this).parent().parent().find("img").attr("src");
    console.log(srcImg)
    $(".imgShowing").fadeIn();
    $(".imgDivShow").find("img").attr("src", srcImg);
})
$(".close, .closeImg").click(function () {
    scale = 1;
    $(".imgShowing").fadeOut();
    $(".imgShowing").css("transform", "scale(1)");

})
var scale = 1
$(".full").click(function () {
    if (scale == 1.4) {
        scale = .8;
    }
    $(".imgShowing").css("transform", "scale(" + (scale += .2) + ")");
})
