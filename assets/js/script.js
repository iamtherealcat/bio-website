document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("myAudio");
    var video = document.getElementById("myVideo");
    var overlay = document.getElementById("overlay");
    var enterText = document.getElementById("enter-text");
    var dotCount = 0;

    overlay.addEventListener('click', function() {
        video.play();
        audio.play();
        overlay.style.display = 'none'; // Overlay ausblenden
    });

    var maxVolume = 0.1; 
    function limitVolume(volume) {
        if (volume > maxVolume) {
            audio.volume = maxVolume;
        } else {
            audio.volume = volume; 
        }
    }

    limitVolume(0.1);

    setInterval(() => {
        dotCount = (dotCount + 1) % 4; // Counts from 0 to 3
        enterText.textContent = `Click to Enter${'.'.repeat(dotCount)}`; // Update the text with dots
    }, 500); // Change every half a second
});
