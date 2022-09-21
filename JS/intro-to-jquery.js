// $(document).ready(function(){
//     $("h3").click(function(){
//         $(this).next().slideToggle(600);
//     });
// });
//

function init() {
    $("h3").click(function(){
        $(this).next().slideToggle(600);
    });
}
window.onload = init;