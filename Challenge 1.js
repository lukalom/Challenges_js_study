function ageInDays(){
    var birthYear = prompt('what year you were born?: ')
    var ageInDays = (2021 - birthYear) * 365
    
    var h1 = document.createElement('h1')
    h1.setAttribute('class', 'age-in-days')
    var resultText = 'you are ' + ageInDays + ' days old'
    h1.append(resultText)

    document.querySelector('.answer').append(h1)

    
}

function reset(){

    document.querySelector('.age-in-days').remove()

}

function generate(){
    var img = document.createElement('img')
    var url = "http://thecatapi.com/api/images/get?format=src&type=gif"
    // img.setAttribute('src',"https://acegif.com/wp-content/gifs/happy-cat-9.gif")
    img.setAttribute('src',url)
    img.setAttribute('alt',"https://acegif.com/wp-content/gifs/happy-cat-9.gif")

    
    document.querySelector('.cat-list').append(img)
    
}



//challange 3 rock paper scissors

function rpsGame(yourChoice){

    console.log(yourChoice)

    var humanChoice, botChoice;

    humanChoice = yourChoice.id
    botChoice = numberToChoice(randToRpsInt())
    console.log('computer choice: ', botChoice)

    result = decideWinner(humanChoice, botChoice) // [1,0] win [0.5, 0.5] draw
    console.log(result)

    message = finalMessage(result) // choose you won and you lose maybe draw
    console.log(message)

    rpsFrontEnd(yourChoice.id, botChoice, message)
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3)
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice){
    var rpsDataBase = {
        'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper': 1, 'scissors':0.5, 'rock': 0},

    }

    var yourScore = rpsDataBase[yourChoice][computerChoice]
    var computerScore = rpsDataBase[computerChoice][yourChoice]

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'}
    }else if( yourScore === 0.5){
        return {'message': 'You tied!', 'color':'yellow'}
    }else{
        return {'message':'You won!', 'color':'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){

    var imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src,
    }


    // lets remove all the images 
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()


    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + 
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"

    messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"

    botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + 
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>"


    document.getElementById("flex-box-rps-div").append(humanDiv)
    document.getElementById("flex-box-rps-div").append(messageDiv)
    document.getElementById("flex-box-rps-div").append(botDiv)

}

//challange 4: Chane the Color of All Buttons


//getElementsByTagName gadaecema Tagis dasaxeleba magalitad button
// gamoitans yvela buttons 
var all_buttons = document.getElementsByTagName('button')
//  

var copyAllButtons = []
for(let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1])
}


function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red') {
        buttonRed();
    }else if(buttonThingy.value === 'green'){
        buttonGreen();
    }else if(buttonThingy.value === 'reset'){
        buttonColorReset();
    }else if(buttonThingy.value === 'random'){
        randomColors();
    }
    // ყოველ ბექდროპის გადასვლაზე აბრუნებს მის values
    // console.log(buttonThingy.value)  


}

function buttonRed(){
    for(let i=0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }
}

function buttonGreen(){
    for(let i=0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonColorReset(){
    for(let i=0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllButtons[i])
    }
}

function randomColors(){
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning', ]

    for(let i=0; i < all_buttons.length; i++){
        let randomChoice = Math.floor(Math.random() * 4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choices[randomChoice])
    }
}
