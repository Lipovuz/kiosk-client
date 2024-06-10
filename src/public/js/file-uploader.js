

window.onload = function() {


};

function dzInputFileUploader(input, url = '/file') {

    var myDropzone = new Dropzone("div#myId", {
        uploadMultiple: false,
        maxFiles: 1,
        headers: 1,
        init: function() {
            let myDropzone = this;
            let mockFile = { name: "Filename 2", size: 12345 };
            myDropzone.displayExistingFile(mockFile, "https://i.picsum.photos/id/959/600/600.jpg");
            // Если вы используете параметр maxFiles, убедитесь, что вы настроили его на
            // правильное количество:
            let fileCountOnServer = 2; // Количество уже загруженных файлов
            myDropzone.options.maxFiles = myDropzone.options.maxFiles - fileCountOnServer;
        }
    });

}

