$(document).ready(function(){

    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        // console.log(sct);

        var sct_con_2 = $(".section_2").offset().top; 
        var sct_con_3 = $(".section_3").offset().top; 
        var sct_con_4 = $(".section_4").offset().top; 
        

        if(sct >= sct_con_3 * 0.8){
            $('.section_3 .con_wrap_3').addClass('active_0');
        }

        if(sct >= sct_con_4 * 0.9){
            $('.section_5 .txt_wrap_5').addClass('active_1');
        }

    });


});