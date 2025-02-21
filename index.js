var numButton = document.querySelectorAll(".drum").length

for( var i = 0; i < numButton; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

        switchs(this.innerHTML)
        
     })

}

addEventListener("keypress", function(event){
    
     switchs(event.key)
})

function switchs(value){
    switch (value) {
        case "w":
            crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case "s":
            snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            
    }
}

