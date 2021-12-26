//ytp-right-controls = o lugar no youtube onde fica alguns controles

    let controls = document.querySelector(".ytp-right-controls")

    const acelleratorButton = document.createElement("button");
    acelleratorButton.textContent = "3X";
    acelleratorButton.classList.add("acelleratorButtonClass");

    acelleratorButton.addEventListener("click", () => {
        const video = document.querySelector("video");
        video.playbackRate = 3;

    });

    controls.appendChild(acelleratorButton);



