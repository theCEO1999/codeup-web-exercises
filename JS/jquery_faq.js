$(function (){



$('#turnToYllw').click(function (){
    $('.yllwBtn').css('background-color', 'yellow');
});

$('h3').click(function (){
    $('li').css('font-weight', 'bold');
})

$('li').click(function(){
    $('.turnBlue').css('color','blue');
});


$('.pictureFrame').css('height', '120px', 'width', '120px', 'border', '2px solid black', 'background-color', 'blue');


$('.invisible').css('visibility', 'hidden');

$('#answerBtn').on('click', function (){
    $('.invisible').css('visibility', 'visible')
})

$('dt').on('click', function (){
    $(this).css('background-color', 'yellow');
});

$('.answerBtn').on('dblclick', function (){
    $('.invisible').css('visibility', 'hidden')
})




});