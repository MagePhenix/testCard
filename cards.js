
//handles fullscreen requests
function setFullscreen () {

    //when in fullscreen
    if (document.fullscreenElement) {

        //exits fullscreen
        document.exitFullscreen()
    }
    //when not fullscreen
    else
    {
        //goes to fullscreen
        document.body.requestFullscreen()

    }

}

function initialize() {

    document.getElementById("fullscreenBtn").addEventListener("click", setFullscreen)

}