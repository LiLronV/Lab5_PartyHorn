// main.js
//

let car = document.getElementById('radio-car-horn');
let air = document.getElementById('radio-air-horn');
let party = document.getElementById('radio-party-horn');

document.getElementById('volume-number').addEventListener('input', function()
{
    document.getElementById('volume-slider').value = document.getElementById('volume-number').value;
    document.getElementById('honk-btn').disabled = false;
    let temp = document.getElementById('volume-slider').value;
    let volumeArrow = document.getElementById('volume-image');
    if (temp >=67){
        volumeArrow.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(temp >=34){
        volumeArrow.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(temp>=1){
        volumeArrow.src = "./assets/media/icons/volume-level-1.svg";
    }
    else{
        volumeArrow.src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById('honk-btn').disabled = true;
    }

    document.getElementById('horn-sound').volume = document.getElementById('volume-number').value / 100;
});

document.getElementById('volume-slider').addEventListener('input', function()
{
    document.getElementById('volume-number').value = document.getElementById('volume-slider').value;
    document.getElementById('honk-btn').disabled = false;
    let temp = document.getElementById('volume-slider').value;
    let volumeArrow = document.getElementById('volume-image');
    if (temp >=67){
        volumeArrow.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(temp >=34){
        volumeArrow.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(temp>=1){
        volumeArrow.src = "./assets/media/icons/volume-level-1.svg";
    }
    else{
        volumeArrow.src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById('honk-btn').disabled = true;
    }

    document.getElementById('horn-sound').volume = document.getElementById('volume-number').value / 100;
});


air.addEventListener('click', function(){
    document.getElementById('horn-sound').src = "./assets/media/audio/air-horn.mp3";
    document.getElementById('sound-image').src = "./assets/media/images/air-horn.svg";
});

car.addEventListener('click', function(){
    document.getElementById('horn-sound').src = "./assets/media/audio/car-horn.mp3";
    document.getElementById('sound-image').src = "./assets/media/images/car.svg";
});

party.addEventListener('click', function(){
    document.getElementById('horn-sound').src = "./assets/media/audio/party-horn.mp3";
    document.getElementById('sound-image').src = "./assets/media/images/party-horn.svg";
});

document.getElementById('honk-btn').addEventListener('click', function(currentEvent){
    currentEvent.preventDefault();
    document.getElementById('horn-sound').volume = document.getElementById('volume-number').value / 100;
    document.getElementById('horn-sound').play();

});