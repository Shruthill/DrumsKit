var buttonCount=document.querySelectorAll(".drum").length
for (var i=0; i<buttonCount;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonElement=this.innerHTML;
        makeSound(buttonElement);

    });
}

document.addEventListener("keypress",function (event){
    makeSound(event.key);
})

function makeSound(buttonElement){
    switch (buttonElement){
        case "w":    
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play()
        break;
        case "a":    
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play()
        break;
        case "s":    
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play()
        break;

        case "d":    
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play()
        break;
        case "j":    
        var audio = new Audio("./sounds/crash.mp3");
        audio.play()
        break;

        case "k":    
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play()
        break;
        case "l":    
        var audio = new Audio("./sounds/snare.mp3");
        audio.play()
        break;

        default: alert("The key you pressed now is Invalid. Please check!")
        break;
        };
}