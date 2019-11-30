var _acceptableExtension = [".inkml"];
function validation(fileNames){
    var arrInput = fileNames.getElementsByTagName("ink_ml");
    for(var i=0; i<arrInput.length; i++){
        var inputData = arrInput[i];
        if(inputData.type == "file"){
            var fileName = inputData.value;
            alert("Sorry, " + fileName );
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
                    alert("Sorry, " + fileName + " is invalid, allowed extensions are: " + _acceptableExtension.join(", "));
                    return false;
                }
            }
        }
    }
}
