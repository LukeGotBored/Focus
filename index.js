let pictures = [ 
    ["aleskrivec",'Photo by <a href="https://unsplash.com/@aleskrivec?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ales Krivec</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["kencheung",'Photo by <a href="https://unsplash.com/@kencheungphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ken Cheung</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["baileyzinde",'Photo by <a href="https://unsplash.com/@baileyzindel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bailey Zindel</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["lucabravo",'Photo by <a href="https://unsplash.com/@lucabravo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luca Bravo</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'],
    ["nickperez",'Photo by <a href="https://unsplash.com/@nipez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Perez</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>']
]

function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}


tabNameTime()
function tabNameTime() {
    var Symbol;
    var today = new Date();
    var hours = today.getHours()
    var minutes = String(today.getMinutes()).padStart(2, "0");

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var fulldate = monthNames[today.getMonth()] + " " +  getOrdinalNum(today.getDay()) + ", " + today.getFullYear()
    
    document.title = "New Tab | " + hours + ":" + minutes;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("date").innerText = fulldate
    
    setTimeout(tabNameTime, 1000);
}



$('input[type="text"]').on('focus', function() {
    document.getElementById("bg").className = "background-hvr"
});

$('input[type="text"]').on('focusout', function() {
    document.getElementById("bg").className = "background"
});



document.onkeypress = function (e) {
    document.getElementById("search").focus();
}




var randomBg = pictures[Math.random() * pictures.length | 0]
var bgimage = new Image();      
console.log(randomBg)
console.log(randomBg[0])
console.log(randomBg[1])
bgimage.src="./assets/wallpapers/1080/" + randomBg[0] + ".jpg"; 

$(".credits").html("<img src=\"assets/logo/us_logo.png\" height=\"10px\" width=\"10px\"></img>" + " " + randomBg[1])     


$(bgimage).on('load', function(){   
    $(".background").css("background-image","url("+$(this).attr("src")+")").hide().fadeIn('slow')
})