    // The button in the footer
function author() {
    alert("Author is:  BAMTEFA, Olorunshogo Moses ☺☺☺☺.")
}

    // SIDEMENU
    // Open Button
{
    const openButton = document.getElementById("open-button");
    openButton.addEventListener("click", function() {
        document.getElementById('side-menu').style.width = '200px';
    });
}

    // Close Button
{
    const closeButton = document.getElementById("close-button");
    const close1 = document.getElementById("home");

    // Close X icon
    closeButton.addEventListener("click", function() {
        document.getElementById('side-menu').style.width = '0';
    });

    // // Showcase Section
    close1.addEventListener("click", function() {
        document.getElementById('side-menu').style.width = '0';
    });
}