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
    return get_default_message();
}

function trigger_get_experience(){
    return get_default_message();
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
    var skills = ["Python", "Django rest framework", "Structured Query Language",  "PostgreSQL", "C++", "Angular - Typescript", "Machine Learning", "Gitlab"];
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
        }
    }
});


// Code to update visit count
function increaseVisitCount(file) {
    $.getJSON(file, function( data ) {
        data['views'] += 1;
        console.log("increaseVisitCount : ", data);
        //document.getElementById('userVisitCount').innerHTML = "User visit count: " + data["views"];                  
        var newData = JSON.stringify(data);
        jQuery.post(file, {
            newData: newData
        }, function(response){
            // response could contain the url of the newly saved file
        })
      });
}

window.onload = increaseVisitCount("data/views.json");