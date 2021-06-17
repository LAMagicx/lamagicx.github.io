function search(ele) {
    var url = "https://duckduckgo.com/?q=";
    if (event.key === 'Enter') {
        if (navigator.userAgent.indexOf("Chrome") !== -1) {
            url = "https://www.google.com/search?q="; 
        }
        window.location.href = url + ele.value.split(" ").join("+");
    }
}

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
    updateTime();
    setInterval(updateTime, 1000);
}


