// Group of events and there corresponding event functions
var events = {"help": trigger_help};

function trigger_help(){
    var message = document.createElement("h4");
    message.innerText = "Coming Soon...";
    return message;
}

// Code to create new input box
function create_new_entry(){
    window.session_block_id = window.session_block_id + 1;

    var new_block = document.createElement('div');

    var div_block_left = document.createElement('div');
    div_block_left.style = "width:10%;font-weight:bold";
    div_block_left.innerText = " > ";

    new_block.append(div_block_left);

    var div_block_right = document.createElement('div');
    var input_block = document.createElement('input');
    input_block.type = 'text';
    input_block.placeholder = "Type help.";
    input_block.className = "inputBox";
    input_block.size = "175";
    //input_block.id = "helpButton_"+window.session_block_id;
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
        message = events[query]();
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
        document.getElementById("helpButton_0").id = "helpButton";
        document.getElementById("helpButton").disabled = true;
        trigger_event(query);
    }
});