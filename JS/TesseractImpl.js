function doFileTesseract(data){
    Tesseract.recognize(data).then(function(result){
        document.getElementById("textareaOCR").value=result.text;
    });
}
