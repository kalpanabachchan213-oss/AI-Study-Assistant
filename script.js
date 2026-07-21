// AI Study Assistant Welcome Message

window.onload = function(){
    console.log("AI Study Assistant Started 🤖");
};


// Start Learning Button
function startLearning(){
    alert("Welcome! Let's start your smart learning journey 🚀");
}


// Login Button
function login(){
    alert("Student Login Page Coming Soon 📚");
}


// Register Button
function register(){
    alert("Registration Started ✨");
}


// AI Tutor Message
function askAI(){
    let question = prompt("Ask your study question:");

    if(question){
        alert("AI Tutor: I will help you understand " + question);
    }
    else{
        alert("Please enter your question.");
    }
}


// Quiz Feature
function startQuiz(){
    alert("AI Quiz Generator Activated 📝");
}
