import $ from 'jquery'





$(document).ready(()=>{
    $('.change').click(()=>{
        $('.customize-box').toggle(500)
    })
    
    document.body.style.fontFamily ="Monomakh, serif";
})

$(document).ready(function(){
    let moved = false;
    $(".change").click(function(){
        if (!moved) {
            $(this).css("right", "+=15%"); // Move right by 15px
        } else {
            $(this).css("right", "-=15%"); // Move back to original position
        }
        moved = !moved;
    });
});
$(document).ready(()=>{
    $('.close').click(()=>{
        // alert('hello')
        $('.customize-box').slideUp('slow')
        $('.change').css('right','0px')
    })
})