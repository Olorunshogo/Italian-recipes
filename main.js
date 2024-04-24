// The button in the footer
function tada() {
    alert("TADA!!!")
}

// SIDEMENU
function openSideMenu() {
    document.getElementById('side-menu').style.width = '200px';
}

function closeSideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('side-menu').style.width = '0';
}

    // Read More Buttons
/*
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMore");

    if (moreText.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

*/