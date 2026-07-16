function login() {

    let prn = document.getElementById("PRN").value;
    let password = document.getElementById("password").value;


    if (prn !== "" && password !== "") {

        showPopup(
            "⚠️ PHISHING RED FLAGS<br><br>" +
            "• Never share passwords or OTP<br>" +
            "• Check sender email carefully<br>" +
            "• Avoid clicking unknown links<br>" +
            "• Verify website URLs before login<br>" +
            "• Be careful with urgent messages"
        );


       
        playBeep(3000);


       
        setTimeout(() => {
            closePopup();
        }, 4500);


    } 
    else {

        showPopup(
            "⚠️ WARNING<br><br>" +
            "Please enter PRN number<br>" +
            "and password"
        );

    }

}


function showPopup(message) {

    let popup = document.getElementById("popup");
    let popupMessage = document.getElementById("popup-message");

    popupMessage.innerHTML = message;

    popup.style.display = "flex";

}



function closePopup() {

    document.getElementById("popup").style.display = "none";

}

function playBeep(duration) {

    let audioContext = new (window.AudioContext || window.webkitAudioContext)();

    let oscillator = audioContext.createOscillator();
    let gainNode = audioContext.createGain();


    oscillator.type = "square";
    oscillator.frequency.value = 1000; 



    gainNode.gain.value = 0.12;


    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);


    audioContext.resume().then(() => {

        oscillator.start();


        setTimeout(() => {

            oscillator.stop();
            audioContext.close();

        }, duration);

    });

}