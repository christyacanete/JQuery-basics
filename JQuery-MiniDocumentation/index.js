/********************************************
* This file contains the JQuery codes 
* to execute animations on the elements.
*********************************************/
$ (document).ready(function(){
    $("#ex1").click(function(){
        alert("You clicked the button!")
    });
    $("#ex2").click(function(){
        $("#ex-hide").hide();
    });
    $("#ex3-hide").click(function(){
        $("#ex-show").hide();
    });
    $("#ex3").click(function(){
        $("#ex-show").show();
    });
    $("#ex4").click(function(){
        $("#ex-toggle").toggle();
    });
    $("#ex5").click(function(){
        $("#show-kitty").slideDown(1000);
    });
    $("#ex6").click(function(){
        $("#happy-dogs").slideUp(1000);
    });
    $("#ex7").click(function(){
        $("#happy-cat").slideToggle(1000);
    });
    $("#ex8").click(function(){
        $("#stay-happy").fadeIn(1000);
    });
    $("#ex9").click(function(){
        $("#cat-box").fadeOut(1000);
    });
    $("#ex10").click(function(){
        $("#ex10-sentence").addClass("blue-font");
    });
    $("#ex11").click(function(){
        $("#ex11-sentence").before("<p>Hello! </p>");
    });
    $("#ex12").click(function(){
        $("#ex12-sentence").after("<p>Goodbye! </p>");
    });
    $("#ex13").click(function(){
        $("#cats-love").append("<li>Laser toys</li>");
    });
    $("#ex14").click(function(){
        $("#change-html").html("Just kidding, I love cats!");
    });
    $("#ex15").click(function(){
        $("#fluffy-cat").attr("height", "300px");
    });
    $("#ex16").click(function(){
        $("input:text").val("Juan de la Cruz");
    });
    $("#ex17").click(function(){
        $("#set-text").text("I'm fine, thank you!");
    });
})
