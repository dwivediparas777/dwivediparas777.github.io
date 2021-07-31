// Group of events and there corresponding event functions
var events = {"help": [trigger_help, "Shows available list of comands"],
                "skills": [trigger_get_skills, "My primary skills"],
                "awards": [trigger_get_awards, "Awards received and there details"],
                "languages": [trigger_get_languages, "List of languages and fluency"],
                "education": [trigger_get_education, "My education detail"],
                "experience": [trigger_get_experience, "Shows experience"]};

function get_default_message(){
    var message = document.createElement("h4");
    message.innerText = "Coming Soon...";
    return message;
}

function trigger_get_education(){
    graduation = {"College" : "Gurukul Kangri Vishwavidyalaya, Uttarakhand",
                "Degree" : "Bachelor of Engineering and Technology",
                "Major" : "Computer Science Engineering",
                "From_to" : "April 2012 - March 2016",
                "Accomplishment" : "Acquired First position in third semester of graduation"};
    var message = document.createElement("div");
    message.style = "margin-left:55px";
    message.innerHTML = "Education detail:<ul>";
    for (const [key, value] of Object.entries(graduation)) {
        message.innerHTML += "<li><b>" + key + "</b> : " + value + "</li>";
    }
    message.innerHTML += "</ul><br>";
    return message;            
}

function trigger_get_experience(){

    var experience = [{"Company":"TCS, Mumbai",
    "Role": "Software Developer",
    "From To" : "Jan 2020 - PRESENT",
    "Responsiblity" : ["Developed algorithm to statistically identify domain for dataset.",
                        "Designed and implemented multi-role architecture to enable secure api usage.",
                        "Implemented multi-tenancy feature which resulted in the increase of product revenue by 15%.",
                        "Increased server query response time by 25% by restructuring API.",
                        "Client engagement to enable product admin’s with the product understanding."]},
    {"Company":"TCS, Noida",
    "Role": "Python Developer",
    "From To" : "Aug 2016 - Dec 2019",
    "Responsiblity" : ["Automation of customers manual paper procedure, which reduced annual cost by 10% and reduced processing time by 70%.",
                        "Implemented the Proof of Concept on customer satisfaction prediction based on customer care call data",
                        "Work with customers and account teams to identify success metrics to quantitatively measure PoC success", 
                        "Worked along with stakeholders to gather the requirement and tweaking of the product on client review"]}]

    var message = document.createElement("div");
    message.style = "margin-left:55px";
    message.innerHTML = "Experience detail:<ul>";
    for(var i in experience){
        message.innerHTML += "<ol>";
        for (const [key, value] of Object.entries(experience[i])) {
            if(key == "Responsiblity"){
                message.innerHTML += "<li><b>" + key + "</b> : <ul>";
                for(var j in value){
                    message.innerHTML += '<li style="margin-left:30px">' + value[j] + "</li>";
                }
                message.innerHTML += "</ul></li>"
            }
            else{
                message.innerHTML += "<li><b>" + key + "</b> : " + value + "</li>";
            }
        }
        message.innerHTML += "</ol>"
    }
    message.innerHTML += "</ul><br>";
    return message;

}

function trigger_get_languages(){
    var message = document.createElement("div");
    message.style = "margin-left:55px";
    message.innerHTML = "Language Detail:<ul>";
    var skills = ["English", "Hindi"];
    for(var i in skills) {
        message.innerHTML += "<li>" + skills[i] + "</li>";
    }
    message.innerHTML += "</ul><br>";
    return message;
}

function trigger_get_awards(){
    var awards = {"Star of the Quarter Award" : "For development of product from scratch",
                  "On The Spot Award" : "7 times. For quick and on-time resolutions of technical issues",
                  "Best Team Award" : "For clearing IPSafe in recorded time of two week",
                  "Special Initiative Award" : "For developing patentable statistical model to be used by different product"};
    var message = document.createElement("div");
    message.style = "margin-left:55px";
    message.innerHTML = "Awards received<ul>";
    for (const [key, value] of Object.entries(awards)) {
        message.innerHTML += "<li><b>" + key + "</b> : " + value + "</li>";
    }
    message.innerHTML += "</ul><br>";
    return message;
}

function trigger_get_skills(){
    var message = document.createElement("div");
    message.style = "margin-left:55px";
    message.innerHTML = "Below are my primary skills:<ul>";
    var skills = ["Python", "Django rest framework", "Structured Query Language",  "PostgreSQL", "C++", "Angular - Typescript", "Natural Language Processing (NLP)", "Gitlab"];
    for(var i in skills) {
        message.innerHTML += "<li>" + skills[i] + "</li>";
    }
    message.innerHTML += "</ul><br>";
    return message;
}

function trigger_help(){
    var message = document.createElement("div");
    message.style = "margin-left:55px";
    message.innerHTML = "Please choose from below queries<ul>";
    for (const [key, value] of Object.entries(events)) {
        message.innerHTML += "<li><b>" + key + "</b> : " + value[1] + "</li>";
    }
    message.innerHTML += "</ul><br>";
    return message;
}

// Code to create new input box
function create_new_entry(){
    window.session_block_id = window.session_block_id + 1;

    var new_block = document.createElement('div');
    new_block.style = "display:inline-flex"

    var div_block_left = document.createElement('div');
    div_block_left.style = "width:2%;font-weight:bold";
    div_block_left.innerText = " > ";

    new_block.append(div_block_left);

    var div_block_right = document.createElement('div');
    div_block_right.style = "width:90%";
    var input_block = document.createElement('input');
    input_block.type = 'text';
    input_block.placeholder = "Type help.";
    input_block.className = "inputBox";
    input_block.size = "175";
    input_block.id = "helpButton_0";
    div_block_right.append(input_block);
    new_block.append(div_block_right);

    return new_block;
}

// Code to create default message if query is invalid
function data_not_found(){
    var message = document.createElement("h4");
    message.innerText = "Invalid query. Kindly check help for valid queries.";
    return message;
}

// Trigger method to create div blocks based on input
function trigger_event(query){
    var message;
    query = query.toLowerCase();

    if(query in events){
        message = events[query][0]();
    }
    else{
        message = data_not_found();
    }

    document.getElementById('userContentBlock').append(message);    

    var entry = create_new_entry();
    var div_block = document.createElement("div");
    div_block.append(entry);

    document.getElementById('userContentBlock').append(div_block);
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13 && event.target && event.target.id== 'helpButton_0') { 
        var query = document.getElementById("helpButton_0").value;
        query = query.trim();
        if(query){
            document.getElementById("helpButton_0").disabled = true;
            document.getElementById("helpButton_0").id = "helpButton";
            document.getElementById("helpButton").disabled = false;
            trigger_event(query);
            document.getElementById("helpButton_0").focus();
            increaseQueryCount();            
        }
    }
});

// Code to update queries count
function increaseQueryCount() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/pdwivedi_views/queries/");
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementById('totalQueries').innerHTML = "Queries count: " + this.response.value;
    }
    xhr.send();                     
}

// Code to update visit count
function increaseVisitCount() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/pdwivedi_views/visits/");
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementById('userVisitCount').innerHTML = "User visit count: " + this.response.value;
    }
    xhr.send();            
    increaseQueryCount();          
}

window.onload = increaseVisitCount();