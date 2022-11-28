function home() {
    const home = document.getElementById("homepage");

    if (home) {
        home.style.display = "block";
    }
    const about = document.getElementById("aboutus");
    if (about) {
        about.style.display = "none";
    }
    const loginform = document.getElementById("log-in-form");

    if (loginform){
        loginform.style.display = "none";
    }
    const butoni = document.getElementById("first-btn")
        if (butoni){
            butoni.style.display = "none"
        }
    
   
}
function about() {
    const about = document.getElementById("aboutus");

    if (about) {

        about.style.display = "block";

        const home = document.getElementById("homepage");
        if (home) {
            home.style.display = "none";
        }
        const loginform = document.getElementById("log-in-form");

        if (loginform){
            loginform.style.display = "none";
        }
        const butoni = document.getElementById("first-btn")
        if (butoni){
            butoni.style.display = "none"
        }
    }
}
function contactus() {
    const contactus = document.getElementById("contact-us");

    if (contactus){
        contactus.style.display = "block";

        const about = document.getElementById("aboutus");
        if (about) {
            about.style.display = "none";
        }
        const home = document.getElementById("homepage");
        if (home) {
            home.style.display = "none";
        }
        const loginform = document.getElementById("log-in-form");

        if (loginform){
            loginform.style.display = "none";
        }
        const butoni = document.getElementById("first-btn")
        if (butoni){
            butoni.style.display = "none"
        }
        
    }
}
function loginform() {
    const loginform = document.getElementById("log-in-form");

    if (loginform){
        loginform.style.display = "block";
    }
    const contactus = document.getElementById("contact-us");
    if (contactus){
        contactus.style.display = "none";
    }
        const about = document.getElementById("aboutus");
        if (about) {
            about.style.display = "none";

            const home = document.getElementById("homepage");
        if (home) {
            home.style.display = "none";
        }
        const butoni = document.getElementById("first-btn")
        if (butoni){
            butoni.style.display = "none"
        }
        
        }
    }
    function butoni() {
        const butoni = document.getElementById("first-btn")
        if (butoni){
            butoni.style.display = "block"
        }
        const loginform = document.getElementById("log-in-form");

        if (loginform){
            loginform.style.display = "none";
        }
        const contactus = document.getElementById("contact-us");
        if (contactus){
            contactus.style.display = "none";
        }
            const about = document.getElementById("aboutus");
            if (about) {
                about.style.display = "none";
    
                const home = document.getElementById("homepage");
            if (home) {
                home.style.display = "none";
            }
            alert('Thank you for your time we will hit you back');
            
            }
    }
  
