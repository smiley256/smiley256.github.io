window.onload = function() {
    const canvas = document.getElementById("display");
    const ctx = canvas.getContext("2d");
    const desktopBackground = document.getElementById("bg_bliss");
    console.log("variables have been defined.");

    desktopBackground.onload = function() {
        ctx.drawImage(desktopBackground, 0, 0, canvas.width, canvas.height);
        console.log("image has been drawn.")
    };

    console.log("scipt has loaded.");
};