var obi, jarjar, darthMaul, darthSidious;
var charArray = [];
var yourChar = null;
var yourCharSelected = false;
var enemyChar = null;
var enemyCharSelected = false;
var enemiesAvailabke = null;

function createCharacter(id, name, imgSrc, hp, attackPower, counterAttack){
    var x = new Object();
    x.id = id;
    x.name = name;
    x.img = imgSrc;
    x.hp = hp;
    x.attackPower = attackPower;
    x.counterAttack = counterAttack
    x.isSelected = false;
    return x;
}

function StartGame(){
    obi = createCharacter("obi", "Obi-Wan", "./assets/images/obi.jpeg", 150, 13, 15);
    jarjar = createCharacter("jarjar", "Jar Jar", "./assets/images/jarjar.png", 120, 3, 2);
    darthMaul = createCharacter("darthMaul", "Darth Maul", "./assets/images/darthmaul.png", 180, 12, 20);
    darthSidious = createCharacter("darthSidious", "Darth Sidious", "./assets/images/darthsidious.jpg", 200, 14, 22);
    charArray.push(obi, jarjar, darthMaul, darthSidious); // push darthSidious later
}

$(document).ready(function(){
    StartGame();
    console.log("Game is ready to play!");

    // This creates each of our character
    for(var i = 0; i < charArray.length; i++){
        $('.characterSection').append(
            '<div class="character" id="'+charArray[i].id+
            '"data-attack="'+charArray[i].attackPower+
            '"data-hp="'+charArray[i].hp+
            '"data-counter="'+charArray[i].counterAttack+'">'+
            '<h3>'+charArray[i].name+'</h3><img src="'+charArray[i].img+'"><h3>HP: '+charArray[i].hp+'</h3>');
    }
    $('div.character').on('click', function(){
        if(!yourCharSelected){
            yourCharSelected = true;
            $('.yourHero').append($(this));
        }
        else{
            if(!enemyCharSelected){
                enemyCharSelected = true;
                $('.enemyHero').append($(this));
            }
        }
    })
});
