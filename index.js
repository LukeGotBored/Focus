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

//------ Local Storage --------//
var ls = window.localStorage;
if(ls.getItem('firstSetup') == null){
    ls.setItem("firstSetup",true)
    ls.setItem("effects",true)
    ls.setItem("blink", true)

    ls.setItem("searchEngine",0)
    // 0 - Google
    // 1 - DuckDuckGo
    // 2 - Bing
    // 3 - Yahoo

    ls.setItem("clock", 0) 
    // 0 - 24 
    // 1 - 12
    
    ls.setItem("theme", 2) 
    // 0 - dark 
    // 1 - light
    // 2 - auto
    
    newToast("👋 Welcome to Focus!")
}

// Set all the options on the settings screen to the actual ones
var effects = JSON.parse(ls.getItem('effects'))
var clock = JSON.parse(ls.getItem("blink"))

document.getElementById('fxOpt').checked = effects
document.getElementById('blinkOpt').checked = clock
document.getElementById('seOpt').selectedIndex = ls.getItem('searchEngine')

// Kinda useless, but why shouldn't i add a reset function? 
$("#reset").on("click", function(){
    if(window.confirm("You're about to reset Focus, proceed?")){
        localStorage.clear()
        location.reload()
    }
})

// Set Clock
if(ls.getItem("clock") == 0){
    document.getElementById('24').checked = true
} else {
    document.getElementById('12').checked = true
}


// Set Effects
$("#fxOpt").on('change', function(){   
    ls.setItem("effects", document.getElementById('fxOpt').checked)
    var effects = JSON.parse(ls.getItem('effects'))
})

$("#clockOpt").on('change', function(){   
    ls.setItem("clock", document.getElementById('clockOpt').checked)
    var effects = JSON.parse(ls.getItem('clock'))
})


// Effects Logic
$('input[type="text"]').on('focus', function() {
    var effects = JSON.parse(ls.getItem('effects'))
    console.log("effects: " + effects)
    if(effects){
        document.getElementById("bg").className = "background-hvr"
    }
});

$('input[type="text"]').on('focusout', function() {
    document.getElementById("bg").className = "background"
});

$("#blinkOpt").on("change", function(){
    ls.setItem("blink", document.getElementById("blinkOpt").checked)
    newToast("⚙️ Reload to apply!")
})

// Set Search Engine
$("#seOpt").on('change', function(){   
    console.log("changed se!")
    ls.setItem("searchEngine", document.getElementById('seOpt').selectedIndex)
})

// Get Clock
$('input:radio[name=clock]').on('change', function() {
    console.log("clock changed!")
    ls.setItem("clock", document.querySelector('input[name="clock"]:checked').value)
})

// Get Theme
$('input:radio[name=theme]').on('change',function () {
    console.log("theme changed!")
    ls.setItem("theme", document.querySelector('input[name="theme"]:checked').value)
    newToast("⚙️ Reload to apply!")
})

// Default Theme
let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(ls.getItem("theme") == 0) {
        // Dark Theme
        matched = true;
        document.getElementById('dark').checked = true
    } else if (ls.getItem("theme") == 1) {
        // Light Theme
        matched = false;
        document.getElementById('light').checked = true
    } else {
        // Auto Theme
        matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.getElementById('auto').checked = true
}




function TickLoop() {
    var today = new Date();
    var hours = today.getHours()
    var minutes = String(today.getMinutes()).padStart(2, "0");

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var fulldate = monthNames[today.getMonth()] + " " +  getOrdinalNum(today.getDate()) + ", " + today.getFullYear()
    

    if(localStorage.getItem("clock") == 0){
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
    } else {
        if(hours <= 12){
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes + " PM";
        } else {
            document.getElementById("hours").innerText = (hours - 12);
            document.getElementById("minutes").innerText = minutes + " AM";
        }
    }
    
    document.title = "New Tab"
    document.getElementById("date").innerText = fulldate 
    
    var x = document.getElementById("blinkthing");
    if(clock){
        x.className = "blink"
    } else {
        x.className = ""
    }

    switch(document.getElementById('seOpt').selectedIndex) {
        case 0:
            document.getElementById("formbox").action = "http://google.com/search"
            document.getElementById("search").name = "query"
            document.getElementById("search").placeholder = "Search on Google..."
            break;
        case 1:
            document.getElementById("formbox").action = "https://www.duckduckgo.com"
            document.getElementById("search").name = "q"
            document.getElementById("search").placeholder = "Search on DuckDuckGo..."
            break;
        case 2:
            document.getElementById("formbox").action = "http://bing.com"
            document.getElementById("search").name = "q"
            document.getElementById("search").placeholder = "Search on Bing..."
            break;

        case 3:
            document.getElementById("formbox").action = "http://search.yahoo.com/search"
            document.getElementById("search").name = "q"
            document.getElementById("search").placeholder = "Search on Yahoo..."
            break;
      }


    setTimeout(TickLoop, 100);
}

TickLoop()

  


if(!matched){
    // light mode because psycopaths exist
    $(".loading").css("background-color","#F9F9F9")
    $(document).css("background-color", "#F9F9F9")
    $(".atoast").css("background-color","#F9F9F9")
    $(".atoast").css("color","#1f1f1f")
    
} else {
    // dark mode by default, because why not :>
    $(".loading").css("background-color","#3B3B3B")
    $(document).css("background-color", "#3B3B3B")
    $(".atoast").css("background-color","#3B3B3B")
    $(".atoast").css("color","#F9F9F9")
}

// autofocus when anykey gets pressed
document.onkeypress = function (e) {
    document.getElementById("search").focus();
}

// get random image and preload it
var randomBg = defaultPictures[Math.random() * defaultPictures.length | 0]
var bgimage = new Image();      
bgimage.src="./assets/wallpapers/default/" + randomBg[0] + ".jpg"; 

// Add credits
$(".credits").html("<img src=\"assets/icons/us_logo.png\" height=\"15px\" width=\"15px\"></img>" + "&nbsp&nbsp" + randomBg[1])     


// Open settings
$('#settings').on('click', function(){
    $('#modal').toggleClass('modalClosed').toggleClass('modalOpen');
})

// Close settings when user clicks anywhere else (is this necessary? no, does it provide a better UX? absolutely yes)
$(document).on('click', function(e) {
    if (e.target.id === "bg" && $('#modal').attr("class") == "modalOpen") {
        $('#modal').toggleClass('modalClosed').toggleClass('modalOpen');
    }
})


// Show preloaded image as background
$(document).ready(function() {
    $(bgimage).on('load', function(){   
        $(".background").css("background-image","url("+$(this).attr("src")+")").show()
    })
});


//--------------------- Utils ---------------------------//

function newToast(text){
    var x = document.getElementById("toast");
    if(x.className == "show"){
        console.error("Unable to create another toast")
        return false
    }
    x.innerText = text
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3900);
}


function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}


// i drank an insane amount of caffeine and i have no idea of what i'm doing, if you find anything to fix/improveme, don't be afraid to do a pull request! 