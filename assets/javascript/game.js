var obi, jarjar, darthMaul, darthSidious;
var charArray = [];
var yourChar = null;
var yourCharSelected = false;
var enemyChar = null;
var enemyCharSelected = false;
var enemiesAvailabke = null;

function createCharacter(id, name, imgSrc, hp, baseAttack, attackPower, counterAttack){
    var x = new Object();
    x.id = id;
    x.name = name;
    x.img = imgSrc;
    x.hp = hp;
    x.baseAttack = baseAttack;
    x.attackPower = attackPower;
    x.counterAttack = counterAttack
    x.isSelected = false;
    return x;
}

function StartGame(){
    obi = createCharacter("obi", "Obi-Wan", "./assets/images/obi.jpeg", 150, 13, 13, 15);
    jarjar = createCharacter("jarjar", "Jar Jar", "./assets/images/jarjar.png", 120, 3, 3, 2);
    darthMaul = createCharacter("darthMaul", "Darth Maul", "./assets/images/darthmaul.png", 180, 12, 12, 20);
    darthSidious = createCharacter("darthSidious", "Darth Sidious", "./assets/images/darthsidious.jpg", 200, 14, 14, 22);
    charArray.push(obi, jarjar, darthMaul, darthSidious); // push darthSidious later
}

// Creates our characters and inserts them into html
function reset(){    
    for(var i = 0; i < charArray.length; i++){
        $('.characterSection').append(
            // This block defines characters data attributes
            '<div class="character" id="'+charArray[i].id+
            '"data-name="'+charArray[i].name+
            '"data-base="'+charArray[i].baseAttack+
            '"data-attack="'+charArray[i].attackPower+
            '"data-hp="'+charArray[i].hp+
            '"data-counter="'+charArray[i].counterAttack+'">'+
            
            // This block inserts visible html into the .characterSection
            '<h3>'+charArray[i].name+'</h3>'+
            '<img src="'+charArray[i].img+'">'+
            '<h3 id="hp">HP: '+charArray[i].hp+'</h3>'+
            '<h3 id="attack">Attack: '+charArray[i].attackPower+'</h3>');
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

        // This will actually start the fighting
        else{
            // Your Character Stats
            yourChar = $('.yourHero>.character');
            yourHp = yourChar.data('hp');
            yourAttack = yourChar.data('attack');
            yourBase = yourChar.data('base');

            // Enemy Stats
            enemyChar = $('.enemyHero>.character');
            enemyHp = enemyChar.data('hp');
            enemyAttack = enemyChar.data('counter');

            // Stat Update
            enemyHp = enemyHp - yourAttack;
            yourAttack = yourAttack + yourBase;
            yourHp = yourHp - enemyAttack;
            yourChar.data('attack', yourAttack);
            yourChar.data('hp', yourHp);
            enemyChar.data('hp', enemyHp);



            // HTML update after stats
            $('.yourHero>.character>#hp').text('HP: '+yourChar.data('hp'));
            $('.yourHero>.character>#attack').text('Attack: '+yourChar.data('attack'));
            $('.enemyHero>.character>#hp').text('HP: '+enemyChar.data('hp'));

            $('#battleText').text(yourChar.data('name')+' did '+yourChar.data('attack')+' to '+ enemyChar.data('name'));
            $('#battleText').append('\n'+enemyChar.data('name')+' did '+enemyChar.data('attack')+' to '+ yourChar.data('name'));

            if(yourChar.data('hp') <= 0){
                $('.yourHero').empty();
                $('#battleText').text('Game Over!')
            }
            if(enemyChar.data('hp') <= 0){
                enemyCharSelected = false;
                $('.enemyHero').empty();
            }
        }
    })
});
