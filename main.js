let user = null
let win = 0;
let defeat = 0;
let draw = 0;

function rock(){
    user = 'Rock';
    console.log('ROCK')
}

function paper(){
    user = 'Paper';
    console.log('PAPER')
}

function scissors(){
    user = 'Scissors';
    console.log('SCISSORS')
}

function fight(user, ia){
    if(user == ia){
        draw ++;
        return 'Draw';
    }
    if(user == 'Rock' && ia == 'Paper'){
        defeat ++;
        return 'Defeat';
    }
    if(user == 'Rock' && ia == 'Scissors'){
        win ++;
        return 'Victory';
    }
    if(user == 'Paper' && ia == 'Rock'){
        win ++;
        return 'Victory';
    }
    if(user == 'Paper' && ia == 'Scissors'){
        defeat ++;
        return 'Defeat';
    }
    if(user == 'Scissors' && ia == 'Rock'){
        defeat ++;
        return 'Defeat';
    }
    if(user == 'Scissors' && ia == 'Paper'){
        win ++;
        return 'Victory';
    }
}

function play(){
    if(user == null){
        document.getElementById('alert').style = 'visibility: visible;';
    }else{
        document.getElementById('alert').style = 'visibility: hidden; position: absolute;';
        let ia = Math.floor(Math.random() * 3) + 1;
        if(ia == 1){
            ia = 'Rock';
        }
        if(ia == 2){
            ia = 'Paper';
        }
        if(ia == 3){
            ia = 'Scissors';
        }

        let final = fight(user, ia);

        document.getElementById('result').style = 'visibility: visible;';
        document.getElementById('vs_text').textContent = user + ' vs ' + ia;
        document.getElementById('result_text').textContent = final;
    }
    
}

function again(){
    user = null;
    document.getElementById('result').style = 'visibility: hidden;';
    document.getElementById('wins').textContent = win;
    document.getElementById('defeats').textContent = defeat;
    document.getElementById('draws').textContent = draw;
    console.log('Victory = '+ win);
    console.log('Defeat = '+ defeat);
    console.log('Draw = '+ draw);
}
