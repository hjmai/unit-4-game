var obi, jarjar, darthMaul, darthSidious;
var charArray = [];
var yourChar = null;
var enemyChar = null;
var enemiesAvailabke = null;

function createCharacter(name, imgSrc, hp, attackPower, counterAttack){
    var x = new Object();
    x.name = name;
    x.img = imgSrc;
    x.hp = hp;
    x.attackpower = attackPower;
    x.counterAttack = counterAttack
    x.isSelected = false;
    return x;
}

function StartGame(){
    obi = createCharacter("Obi-Wan", "./assets/images/obi.jpeg", 150, 13, 15);
    jarjar = createCharacter("Jar Jar", "./assets/images/jarjar.png", 120, 3, 2);
    darthMaul = createCharacter("Darth Maul", "./assets/images/darthmaul.png", 180, 12, 20);
    // darthSidious = createCharacter("Darth Sidious", "./assets/images/darthsidious.jpg", 200, 14, 22);
    charArray.push(obi, jarjar, darthMaul); // push darthSidious later
}

$(document).ready(function(){
    StartGame();
    console.log("Game is ready to play!");
    for(var i = 0; i < charArray.length; i++){
        $('.characterSection').append('<div class="character"> <h3>'+charArray[i].name+'</h3><img src="'+charArray[i].img+'"><h3>HP: '+charArray[i].hp+'</h3>');
    }
    $('div.character').on('click', function(){
        console.log($('div.character > h3') + " clicked");
    })
});
