

let Stand = document.getElementById('deal-el')
let total = 0;
let AItotal = 0;
let saveEl = document.getElementById('save-el')
let LostEnd = 'Loss'
let WonEnd = 'Win'
let pleaseStandEL = document.getElementById('pleasestand-el')
let dealCardbtn = document.getElementById('increment-btn')
let savebtn = document.getElementById('save-btn')
let standbtn = document.getElementById('stand-btn')
let countEL = document.getElementById('count-el')
let AIcountEL = document.getElementById('AI-count-el')
let AIStand = document.getElementById('AI-deal-el')
let AISaveEl = document.getElementById('AI-save-el')
let AIpleaseStandEL = document.getElementById('AI-pleasestand-el')

//Deal Random Card
function dealcard() {
  total += Math.floor(Math.random() * 13 + 1);
  AItotal += Math.floor(Math.random() * 13 + 1);
  countEL.innerText = total;
  AIcountEL.innerText = AItotal;
}
//Stand win/loss 
function stand(){
    if(total === 21 ){
        Stand.innerText = "BLACKJACK!" 
    }
    else if (total < 21){
        Stand.innerText = 'LOST!'
    }
    else{
        Stand.innerText = 'LOST!'   
    }
    if(AItotal === 21){
        AIStand.innerText = "BLACKJACK!" 
    }
    else if (AItotal < 21){
        AIStand.innerText = 'LOST!'
    }
    else{
        AIStand.innerText = 'LOST!'   
    }

    dealCardbtn.disabled = true;
    standbtn.disabled = true;
    pleaseStandEL.innerText = ''
    AIpleaseStandEL.innerText = ''

}
//Save Button
function save(){
    if (total < 21 && Stand.innerText == 'LOST!'){
    saveEl.innerText += ' ' + LostEnd + ' -';
    }
    else if (total ===21 && Stand.innerText == 'BLACKJACK!'){
    saveEl.innerText += ' ' + WonEnd + ' -';
    }
    else if (total >21 && Stand.innerText == 'LOST!'){
    saveEl.innerText += ' ' + LostEnd + ' -';   
    }
    else{
    pleaseStandEL.innerText = 'Please Stand before saving'; 
    }

            //AI Save Function
    if (AItotal < 21 && AIStand.innerText == 'LOST!'){
        AISaveEl.innerText += ' ' + LostEnd + ' -';
        }
        else if (AItotal ===21 && AIStand.innerText == 'BLACKJACK!'){
        AISaveEl.innerText += ' ' + WonEnd + ' -';
        }
        else if (AItotal >21 && AIStand.innerText == 'LOST!'){
        AISaveEl.innerText += ' ' + LostEnd + ' -';   
        }
        else{
            AIpleaseStandEL.innerText = 'Please Stand before saving'; 
            }
    //Reset
    Stand.innerText = '' 
    countEL.innerText = 0
    total = 0
    AIStand.innerText = '' 
    AIcountEL.innerText = 0
    AItotal = 0

    //Have unnecessary buttons hidden until needed
    if(dealCardbtn.disabled = true && standbtn.disabled == true){
        dealCardbtn.disabled = false;
        standbtn.disabled = false;
    }

}

