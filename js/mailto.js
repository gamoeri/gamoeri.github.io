document.getElementById("prevent_spam").addEventListener("click", function(){ 
    var username = "gamoeri", 
          domain = "google";
    window.location.href = "mailto:" + username + "@" + domain + ".com";
} );