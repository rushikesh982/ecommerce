import $ from 'jquery'

$(document).ready(()=>{
    $('.ri-menu-line').click(()=>{
        // alert('hello')
        $('.mob-nav').fadeToggle('slow')
    })
})