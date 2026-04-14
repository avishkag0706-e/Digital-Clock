function updateclock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    // Format time (add leading zeros)
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Format date
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    // NOW create formatted strings (after fixing values)
    let currentTime = hours + ":" + minutes + ":" + seconds;
    let currentDate = day + "/" + month + "/" + year;

    document.getElementById("time").textContent = currentTime;
    document.getElementById("date").textContent = currentDate;
}

// Run every second
setInterval(updateclock, 1000);

// Run immediately
updateclock();