$('button').click(function () {
    $('#advice').append('select your favourite color among the others');
    $('#sel').text("Your favourite colours in order");
    $('#img1').attr('src', 'red.jpg');
    $('#img2').attr('src', 'blue.jpg');
    $('#img3').attr('src', 'yellow.jpg');
});

/*$('#images').click(function(e){
    $(e.target).remove();
    $('#selection').text(e.target.src);
}); */

$('#img1').click(function(e){
    $('#img1').remove();
    $('#selection ul').append($('<li>red</li>'));
});

$('#img2').click(function(e){
    $('#img2').remove();
    $('#selection ul').append($('<li>blue</li>'));
});

$('#img3').click(function(e){
    $('#img3').remove();
    $('#selection ul').append($('<li>yellow</li>'));
});

/*

$('img').click(function () {
    $('#selection ul').append($('<li>' + $(this).attr('alt') + '</li>'));
    $(this).remove();
    });


 */