//------ Local Storage --------//
var ls = window.localStorage;
if(ls.getItem('firstSetup') == null){ // If it's the first boot
    ls.setItem("firstSetup",true) // Setup happened
    ls.setItem("effects",true) // Blur and zoom
    ls.setItem("focus", false) // Focus mode
    ls.setItem("searchEngine",0) // Search engine
    ls.setItem("clock", 0) // Clock (24 hrs / 12 hrs)
    ls.setItem("theme", 2) // Page theme (dark mode / light mode)
    
    newToast("👋 Welcome to Focus!")
}

// Set all the options on the settings screen to the actual ones
var effects = JSON.parse(ls.getItem('effects'))
var focusOpt = JSON.parse(ls.getItem("focus"))

document.getElementById('fxOpt').checked = effects
document.getElementById('focusOpt').checked = focusOpt
document.getElementById('seOpt').selectedIndex = ls.getItem('searchEngine')


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

$("#focusOpt").on('change', function(){   
    ls.setItem("focus", document.getElementById("focusOpt").checked)
    var effects = JSON.parse(ls.getItem('focus'))
    newToast("⚙️ Reload to apply!") 
})


// Effects Logic
$('input[type="text"]').on('focus', function() {
    var effects = JSON.parse(ls.getItem('effects'))
    if(effects){
        document.getElementById("bg").className = "background-hvr"
    }
});

$('input[type="text"]').on('focusout', function() {
    document.getElementById("bg").className = "background"
});


// Set Search Engine
$("#seOpt").on('change', function(){   
    ls.setItem("searchEngine", document.getElementById('seOpt').selectedIndex)
})

// Get Clock
$('input:radio[name=clock]').on('change', function() {
    ls.setItem("clock", document.querySelector('input[name="clock"]:checked').value)
})

// Get Theme
$('input:radio[name=theme]').on('change',function () {
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
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes + "<span id='clockTw'> PM</span>";
        } else {
            document.getElementById("hours").innerText = (hours - 12);
            document.getElementById("minutes").innerHTML = minutes + "<span id='clockTw'> AM</span>";
        }
    }
    
    document.title = "New Tab"
    document.getElementById("date").innerText = fulldate 


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
    if(!window.navigator.onLine){
        $(".background").css("background-image","url('./assets/wallpapers/offline.png')").show()
        $("#search").hide()
        $("#button").hide()
        $(".overlay").css("background-image:", "none")
        $(".credits").html("it seems like you're <b>offline</b>")
    } else {
        $(".background").css("background-image","url('https://source.unsplash.com/1920x1080/daily?landscape,mountains')").show()
        $(".credits").html("<img src=\"assets/icons/us_logo.png\" height=\"15px\" width=\"15px\"></img>" + "&nbsp&nbsp" + "Daily photo by <a href='https://unsplash.com'>Unplash</a>")  
    }
    
    if(focusOpt){
        $(".credits").html("<b>Focus mode</b> is enabled")     
        $('link[href="style.css"]').attr('href','focus.css');
      } else {
        $('link[href="focus.css"]').attr('href','style.css');     
      }
})


//--------------------- Utils ---------------------------//

function newToast(text){
    var x = document.getElementById("toast");
    if(x.className == "show"){
        console.error("Looks like there's already a toast!")
        return false
    }
    x.innerText = text
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3900);
}


function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

$("#reset").on("click", function(){
    if(window.confirm("You're about to reset Focus, proceed?")){
        localStorage.clear()
        location.reload()
    }
})