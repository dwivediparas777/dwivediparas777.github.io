function doFileTesseract(data){
    Tesseract.recognize(data).then(function(result){
        document.getElementById("textareaOCR").value="Hello world".concat(result.text);
    });
}
