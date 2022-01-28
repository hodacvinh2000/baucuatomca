window.onload = function () {
    load();
}

function load() {
    var x = Math.floor(Math.random() * 6) + 1;
    var y = Math.floor(Math.random() * 6) + 1;
    var z = Math.floor(Math.random() * 6) + 1;
    var img1 = document.getElementById('img1');
    img1.src = "img/" + x + ".jpg";
    var img2 = document.getElementById('img2');
    img2.src = "img/" + y + ".jpg";
    var img3 = document.getElementById('img3');
    img3.src = "img/" + z + ".jpg";
}

function reload() {
    // sau 5s dung x sau 5s, 7s dung y sau 4s, 10s dung z sau 5s
    action("none");
    var intervalID;
    var time = 5000;
    intervalID  = setInterval(load, 50);
    setTimeout(function() {stop(intervalID)}, time);
    $('#reload').prop('disabled',true);
}

function stop(intervalID) {
    clearInterval(intervalID);
    document.getElementById('open').style.display = "block";
}

function action(str) {
    var x = document.getElementById('xucxac');
    x.style.display = str;
}

function moxucxac() {
    action("block");
    var x = document.getElementById('open');
    x.style.display = "none";
    $('#reload').prop('disabled',false);
}
