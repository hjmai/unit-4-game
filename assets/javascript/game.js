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

// Creates our characters and inserts them into html
function reset(){
    for(var i = 0; i < charArray.length; i++){
        $('.characterSection').append(
            // This block defines characters data attributes
            '<div class="character" id="'+charArray[i].id+
            '"data-attack="'+charArray[i].attackPower+
            '"data-hp="'+charArray[i].hp+
            '"data-counter="'+charArray[i].counterAttack+'">'+
            
            // This block inserts visible html into the .characterSection
            '<h3>'+charArray[i].name+'</h3>'+
            '<img src="'+charArray[i].img+'">'+
            '<h3>HP: '+charArray[i].hp+'</h3>'+
            '<h3>Attack: '+charArray[i].attackPower+'</h3>');
    }
}

$(document).ready(function(){
    StartGame();
    console.log("Game is ready to play!");
    reset();

    $('div.character').on('click', function(){
        if(!yourCharSelected){
            yourCharSelected = true;
            $('.yourHero').append($(this));
            $(this).unbind('click');
        }
        else{
            if(!enemyCharSelected){
                enemyCharSelected = true;
                $('.enemyHero').append($(this));
                $(this).unbind('click');
            }
        }
    })

    $('.fightBtn').on('click', function(){
        if(!yourCharSelected && !enemyCharSelected){
            $('.fightSection>div.col-md-12').text('You need to choose your hero and an enemy!');
        }
        else if(!yourCharSelected){
            $('.fightSection>div.col-md-12').text("You need to choose a hero!");
        }
        else if(!enemyCharSelected){
            $('.fightSection>div.col-md-12').text("You need to choose an opponent!");
        }
        else{
            $('.fightSection>div.col-md-12').html("<h2>Let's Battle!</h2>");
        }
    })
});
