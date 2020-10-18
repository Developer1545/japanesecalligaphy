//sound source
$(document).ready(function(){
   
})
$('#shodo').click(function(){
    var shodo = new Audio('./soundfiles/shodo.mp3');
    shodo.play();
    
})
function hoverBlock(block) {
    console.log(block);

    switch(parseInt(block)) {
        case 1:
            var japan = new Audio('./soundfiles/japan.mp3');
            japan.play();
            break;
        case 2:
            var peaceful = new Audio('./soundfiles/peaceful.mp3');
            peaceful.play();
            break;
        case 3:
            var fire = new Audio('./soundfiles/fire.mp3');
            fire.play();
            break;
        case 4:
            var tree = new Audio('./soundfiles/tree.mp3');
            tree.play();
            break;
        case 5:
            var mountain = new Audio('./soundfiles/mountain.mp3');
            mountain.play();
            break;
        case 6:
            var america = new Audio('./soundfiles/america.mp3');
            america.play();
            break;
        case 7:
            var friendship = new Audio('./soundfiles/friendship.mp3');
            friendship.play();
            break;
        case 8:
            var daoism = new Audio('./soundfiles/daoism.mp3');
            daoism.play();
            break;
        case 9:
            var sushi = new Audio('./soundfiles/sushi.mp3');
            sushi.play();
            break;
        default:
            console.log("Sound not found!");
            break;

    }
}