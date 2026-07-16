
// Welcome message
window.onload = function(){
    console.log("AI Study Assistant Website Loaded");
};


// AI Button
let aiButton = document.querySelector("#assistant button");

if(aiButton){
    aiButton.onclick = function(){
        alert("Hello! Ask your AI Study Question.");
    };
}


// Contact Form
let form = document.querySelector("form");

if(form){
    form.onsubmit = function(event){
        event.preventDefault();
        alert("Your message has been sent!");
    };
}
