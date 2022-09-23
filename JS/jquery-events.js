$(function(){

    $('#clickMe').on('click', function(){
        alert('That tickles')
    });

    $('#create-an-element').on('click', function(){
        $(this).after("<button class='will-this-work'>Click Me</button>")

    });

    // //this wont work bc we are trying to register an event handler to an element that
    // does not exist yet
    // $(".will-this-work").on('click', function(){
    //     alert(":(This wont work)");
    // });
    // below is called a delegated event
    $("#dynamic-content").on('click', '.will-this-work', function(){
        alert("oooooooo");
    });

    // $('.box').hover(function(){
    //     $(this).css('background-color', 'blue');
    // },
    // function(){
    //     $(this).css('background-color', 'unset')
    // });

    $('.box').hover(function() {
        $(this).toggleClass('blue');
    });

    $(document).keydown(function(e){
        alert("you just pressed a key down");
        console.log(e);
    });

    console.log($('div').text());
    console.log($('div').html());


});

