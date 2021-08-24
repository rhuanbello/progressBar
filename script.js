let progressBar = document.querySelector("progress")
let progressBarValue = 0       

function animationBar(speed, add) {

    if (add) {
        progressBarValue++ 
    } else {
        progressBarValue = 0
    }
    
    progressBar.setAttribute('value', progressBarValue);
    setTimeout( ()=> {fillBar()}, speed )

}

function fillBar() {

    if (progressBarValue < 101){
        animationBar(40, true)
    } else {
        animationBar()
    }

}

fillBar()
