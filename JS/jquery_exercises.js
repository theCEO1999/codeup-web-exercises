// $(function myFunction(){
//     // const refToBody = document.getElementsByTagName("body");
//     alert("This page has finished loading");
// })
//
// $('*').css('border', '1px solid black');
//
// $('#myP').text("This was jibberish anyways").css('color', 'blue');
// $('#myH1').css('color', 'blue');



$('h1').click(function(){
    $(this).css('background-color', 'blue');
})

$('p').dblclick(function(){
    $(this).css('font-size', '18px')
})

$('li').hover(
    function() {
        $(this).css('color', 'red');
    }, function () {
        $(this).css('color', 'black');
    }
)