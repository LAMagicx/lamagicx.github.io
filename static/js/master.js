function getTime() {
    let d = new Date();
    return d.toLocaleTimeString()
}

function getCurrentDate() {
    var options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'};
    let today = new Date();
    return today.toLocaleDateString("en-GB", options).replace(",", "");
}

function updateTime() {
    document.getElementById("time").innerText = getTime();
    document.getElementById("date").innerText = getCurrentDate();
}

function load() {
    setInterval(updateTime, 1000);
}
