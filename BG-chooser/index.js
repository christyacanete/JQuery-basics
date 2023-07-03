$(document).ready(function(){
    $("#main-box").click(function () {
        $(this).css("background","lightgray");
        $(".mini_boxes").css("border","0");
    });
    $(".mini_boxes").click(function (event) {
        event.stopPropagation();
        $(this).css("border", "2px solid yellow");
        var bg = $(this).attr("src");
        $("#main-box").css("background-image","url("+bg+")");
        $("#main-box").css("background-size","cover");
        $(this).siblings().css("border", "0");
    });
})