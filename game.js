// Iteration 1: Declare variables required for this game

// Iteration 1.2: Add shotgun sound

// Iteration 1.3: Add background sound

// Iteration 1.4: Add lives

// Iteration 2: Write a function to make a zombie

// Iteration 3: Write a function to check if the player missed a zombie

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

// Iteration 5: Creating timer

// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer





let gameBody = document.getElementById('game-body')
let lives = document.getElementById('lives')
let seconds = document.getElementById('timer').textContent
let maxlives = 4;
let collision =
    console.log(seconds)


const Shot = new Audio('./assets/shotgun.wav')
Shot.volumne = 0.7

gameBody.onclick = () => {
    Shot.pause()
    Shot.currentTime = 0
    Shot.play()
}

const backgroundSound = new Audio('./assets/bgm.mp3')
backgroundSound.play()
backgroundSound.loop = true


var zombieId = 0;
const img = [
    "zombie-1.png",
    "zombie-2.png",
    "zombie-3.png",
    "zombie-4.png",
    "zombie-5.png",
    "zombie-6.png",
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;

}

var zombieId = 0;
function Creation() {
    Z = img[getRandomInt(0, img.length)]
    gameBody.innerHTML += `<img src='./assets/${Z}'
    class="zombie-image" id="zombies${zombieId}">`;

    let zombie = document.getElementById(`zombies${zombieId}`)
    zombie.style.transform = `translateX(${getRandomInt(15, 75)}vw)`

    zombie.onclick = () => {
        zombieDestroy(zombie)
    }

}
Creation()


function collisionZombie(zombie) {
    if (zombie.getBoundingClientRect().top <= 0) {
        maxlives--
        return true
    }
    return false
}


function zombieDestroy(zombie) {
    zombie.style.display = 'none';
    zombieId++
    Creation()
}

var timer = setInterval(() => {
    seconds--
    document.getElementById('timer').textContent = seconds

    let zombie = document.getElementById(`zombies${zombieId}`)

    if (collisionZombie(zombie) == true) {
        zombieDestroy(zombie)
        if (maxlives == 0) {
            clearInterval(timer)
            location.href = './game-over.html'
        }
    }

    if (seconds == 0) {
        clearInterval(timer)
        location.href = './win.html'
    }
}, 1000)





