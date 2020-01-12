function doFileTesseract(data){
    Tesseract.recognize(data).then(function(result){
        alert(result.text);
    });
}
