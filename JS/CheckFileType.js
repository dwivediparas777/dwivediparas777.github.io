var _acceptableExtension = [".inkml"];
function validation(fileNames){
    var arrInput = fileNames.getElementsByTagName("input");
    for(var i=0; i<arrInput.length; i++){
        var inputData = arrInput[i];
        if(inputData.type == "file"){
            var fileName = inputData.value;
            if (fileName.length > 0) {
                var blnValid = false;
                for (var j = 0; j < _acceptableExtension.length; j++) {
                    var sCurExtension = _acceptableExtension[j];
                    if (fileName.substr(fileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }
                if (!blnValid) {
                    alert("Sorry, " + fileName + " is invalid, allowed extension is: " + _acceptableExtension.join(", "));
                    return false;
                }
                else{
                readFileContent(file);
                }
            }
        }
    }
}
function readFileContent(fileName) {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onload = event => resolve(event.target.result)
            reader.onerror = error => reject(error)
            reader.readAsText(fileName)
        });
}