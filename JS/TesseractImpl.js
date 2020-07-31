function doFileTesseract(data){
    console.log("doFileTesseract")
    console.log(data)
    Tesseract.recognize(data).then(function(result){
        document.getElementById("textareaOCR").value="Hello world".concat(result.text);
    });
}
