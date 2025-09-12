// IMPORTANT: FWIOS means "Fake Web-based Input/Output System".

const t = document.getElementById("terminal");

function write(text) {
    const p = document.createElement("p");
    p.textContent = text;
    t.appendChild(p);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} // code borrowed from https://stackoverflow.com/a/39914235

const name = "FWIOS v1.1 [FREEWARE :)]";

async function bootText() {
    write(name);
    write("(c) 2025 smiley256");
    await sleep(1000)
    write("Loading FWIOS...");
    await sleep(1000);
    write("Checking for updates...");
    await sleep(1000);
    write("FWIOS is up to date!");
    write("GPU: PVIDIA pForce RTX 9040");
    write("CPU: Panasonic Microwave Oven");
    write("RAM: 16");
    write("SSD: big");
    write("Booting FWIOS...");
    await sleep(2000);
    write("Almost there...");
    await sleep(1000);
    write("Still loading...");
    await sleep(3000);
    write("FWIOS is booting...");
    await sleep(3000);
    write("FWIOS is ready!");

}

bootText();