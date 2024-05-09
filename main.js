

    
    
    // The button in the footer
function author() {
    alert("Author is:  BAMTEFA, Olorunshogo Moses ☺☺☺☺.")
}

            // SIDEMENU
    // Open Button
// {
//     const openButton = document.getElementById("open-button");
//     openButton.addEventListener("click", function() {
//         document.getElementById('side-menu').style.width = '200px';
//     });
// }

    // Close Button
// {
//     const closeButton = document.getElementById("close-button");
//     const close1 = document.getElementById("home");

//         // Close X icon
//     closeButton.addEventListener("click", function() {
//         document.getElementById('side-menu').style.width = '0';
//     });

//     // Showcase Section
//     close1.addEventListener("click", function() {
//         document.getElementById('side-menu').style.width = '0';
//     });
// }

    // LOGIN Form
// {
//     let loginForm = document.getElementById("loginForm");
//     loginForm.addEventListener("submit", (e) => {
//         e.preventDefault();

//         let email = document.getElementById("logEmail");
//         let password = document.getElementById("logPassword");

//         if (email.value == "" || password.value == "") {
//             alert("Please ensure you input a value in both fields.")
//         } else {
//             // Perform operation with form input.
//             alert("This form has been submitted, successfully.");
//             console.log(
//                 "This form has an Email of " + email.value + " and password of " + password.value + "."
//             );

//             email.value = "";
//             password.value = "";
//         }
//     });
// } 

// SIGN UP FORM
// {
//     let signupFOrm = document.getElementById("sign-up-form");
//     signupFOrm.addEventListener("click", function() {
//         document.getElementById("signinForm").submit();
//     });
// }

        // DASHBOARD
// SIDEBAR
const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      searchBtn = body.querySelector(".search"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector("darkmode-text"),
      hamburger = body.querySelector(".hamburger");

// Add the "close" class to sidebar
hamburger.addEventListener("click", function() {
  sidebar.classList.toggle("close");
});

// Onclick toggle to the and light mode
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// FAVORITES at each Recipe part
function favorite(x) {
    x.classList.toggle("fa-solid");
}


// REPORT DATE
function currentDate() {
    let dateObj = new Date();
    const month   = dateObj.getUTCMonth() + 1; // months from 1-12
    // const day     = dateObj.getUTCDate();
    const year    = dateObj.getUTCFullYear();
    const dateDisplayed = month + "/" + year;
    document.getElementById("currentDate").innerHTML = dateDisplayed;
    document.getElementById("currentDate").style.color = "#777";
    document.getElementById("currentDate").style.fontSize = "12px";
}
currentDate();

// PIE CHART for report of calories per week based on recipes made.
{
    let dateObj = new Date();
    const currentMonth   = dateObj.getUTCMonth();
    let month = "";
    let xValues = ["Calories", "Carbohydrate", "Fats", "Protein"];
    let yValues = [48, 48, 22, 18];
    let barColours = [
        "#e8c3b9", "#2b5797",
        "#00aba9", "#b91d47"
    ];

    if (currentMonth == 0) {
        month = "January";
      } else if (currentMonth == 1) {
        month = "February";
      } else if (currentMonth == 2) {
        month = "March";
      } else if (currentMonth == 3) {
        month = "April";
      } else if (currentMonth == 4) {
        month = "May";
      } else if (currentMonth == 5) {
        month = "June";
      } else if (currentMonth == 6) {
        month = "July";
      } else if (currentMonth == 7) {
        month = "August";
      } else if (currentMonth == 8) {
        month = "September";
      } else if (currentMonth == 9) {
        month = "October";
      } else if (currentMonth == 10) {
        month = "November";
      } else {
        month = "December";
      }

    new Chart ("reportChart", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColours,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Details for the month of " + month + "."
            }
        }
    });
}
