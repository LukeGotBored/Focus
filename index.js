// check if the os color scheme is dark (dark mode)
let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

// photo metadata and stuff
let defaultPictures = [ 
    ["aleskrivec",'Photo by <a href="https://unsplash.com/@aleskrivec?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ales Krivec</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["kencheung",'Photo by <a href="https://unsplash.com/@kencheungphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ken Cheung</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["baileyzinde",'Photo by <a href="https://unsplash.com/@baileyzindel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bailey Zindel</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["lucabravo",'Photo by <a href="https://unsplash.com/@lucabravo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luca Bravo</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["nickperez",'Photo by <a href="https://unsplash.com/@nipez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Perez</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["albertorestifo",'Photo by <a href="https://unsplash.com/@albertorestifo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alberto Restifo</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["benjaminvoros",'Photo by <a href="https://unsplash.com/@vorosbenisop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Benjamin Voros</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["danielacuevas",'Photo by <a href="https://unsplash.com/@danielacuevas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniela Cuevas</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["jakehills",'Photo by <a href="https://unsplash.com/@jakehills?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jake Hills</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["jasperboer",'Photo by <a href="https://unsplash.com/@jasperboer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jasper Boer</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["max",'Photo by <a href="https://unsplash.com/@notquitemax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Max</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["nitishmeena",'Photo by <a href="https://unsplash.com/@nitishm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nitish Meena</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["pinewatt",'Photo by <a href="https://unsplash.com/@pinewatt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">pine watt</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["rodrigosoares",'Photo by <a href="https://unsplash.com/@rodi01?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rodrigo Soares</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["samuelferrara",'Photo by <a href="https://unsplash.com/@samferrara?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Samuel Ferrara</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["silasbaisch",'Photo by <a href="https://unsplash.com/@silasbaisch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Silas Baisch</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
]

function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

function TickLoop() {
    var today = new Date();
    var hours = today.getHours()
    var minutes = String(today.getMinutes()).padStart(2, "0");

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var fulldate = monthNames[today.getMonth()] + " " +  getOrdinalNum(today.getDate()) + ", " + today.getFullYear()
    
    document.title = "New Tab | " + hours + ":" + minutes;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("date").innerText = fulldate
    
    setTimeout(TickLoop, 1000);
}
TickLoop()

$('input[type="text"]').on('focus', function() {
    document.getElementById("bg").className = "background-hvr"
});

$('input[type="text"]').on('focusout', function() {
    document.getElementById("bg").className = "background"
});

document.onkeypress = function (e) {
    document.getElementById("search").focus();
}

var randomBg = defaultPictures[Math.random() * defaultPictures.length | 0]
var bgimage = new Image();      
bgimage.src="./assets/wallpapers/default/" + randomBg[0] + ".jpg"; 

$(".credits").html("<img src=\"assets/icons/us_logo.png\" height=\"10px\" width=\"10px\"></img>" + " " + randomBg[1])     


if(!matched){
    // if light mode is enabled, change the loading color to flashba- sorry, I meant white (also what is wrong with you?)
    $(".loading").css("background-color","#F9F9F9")
    $(document).css("background-color", "#F9F9F9")
} else {
    // dark mode by default, because why not :>
    $(".loading").css("background-color","#3B3B3B")
    $(document).css("background-color", "#3B3B3B")
}

$(document).ready(function() {
    $(bgimage).on('load', function(){   
        $(".background").css("background-image","url("+$(this).attr("src")+")").show()
    })  
});