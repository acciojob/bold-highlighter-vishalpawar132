function highlight() {
    var boldWords = document.getElementsByTagName("strong");
    
    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "green";
    }
}

function return_normal() {
    var boldWords = document.getElementsByTagName("strong");
    
    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "black";
    }
}
