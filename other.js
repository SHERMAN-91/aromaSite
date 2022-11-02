var elementsPage = []


var allHeight = 0;
window.onload = function () {  // i put this becuse i have imges , (before loaud img then go to the code to calculate heihgt elements)


    $(".mainS").each(function (index) {
        var idname = $(this).attr("id");//take id element to put it in array
        if (index == 0) {// top site like heder 
            elementsPage[index] = [idname, 0];// offset header is 0

        }
        else if (index == 1) { //second elemnt 

            elementsPage[index] = [idname, allHeight / 2];// i take half header , allhieght is now hieght header

        }
        else {

            var otherTop = allHeight - elementsPage[1][1];// now i take all height from top header until top THIS elemnt and - half header(half header it is 50vh)

            elementsPage[index] = [idname, otherTop];

        }

        allHeight += $(this).innerHeight();// i plus height elements from top until top nextElement  
        console.log(allHeight)

    }
    )

}
window.onscroll = function () {
    var lstEL
    for (i = 0; i < elementsPage.length; i++) {
        if (window.scrollY >= elementsPage[i][1]) {
            console.log(`.${elementsPage[i][0]}A`)
            console.log($(`.${elementsPage[i][0]}A`))
            $(`.${elementsPage[i][0]}A`).parent().addClass("active").siblings().removeClass("active");
        }
        elem
    }

}