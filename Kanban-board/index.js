// $( "#draggable" ).draggable();
// $(function() {
//     $(".sortable").sortable();
//     $(".sortable").draggable();
// });
$(document).ready(function(){    
    $('.sortable').sortable({
        connectWith: '.sortable'
    });
})