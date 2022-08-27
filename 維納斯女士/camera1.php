<?php
include("connect.php");
$img =   $_POST['result'];
?>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src='https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/tesseract.js'></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/2.1.4/worker.min.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="assets/css/camera1.css" rel="stylesheet" id="style">
    </head>
    <body>
        <div id="main" class="result-div">
            <form name=identify1 action="" method="POST">
                <textarea id="transcription">(loading...)</textarea>
            </form>
        </div>
        <span class="material-icons cancel1"  onclick="history.go(-1);">cancel</span>
        <span onclick="identify1.submit();" class="material-icons ensure">image_search</span>
        <script>
            recognize_image();
        function recognize_image(){
        Tesseract.recognize("<?=$img?>", {
            lang: 'eng',
            classify_bln_numeric_mode: 1
        }).then(function(result){
            console.log(result.text); 
            document.getElementById('transcription').className = "done"
        document.getElementById('transcription').innerText = result.text;
        });
        }
        </script>
    </body>
 
</html>