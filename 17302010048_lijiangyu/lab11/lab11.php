<?php
  if($_SERVER["REQUEST_METHOD"] == 'GET'){
  }else if($_SERVER["REQUEST_METHOD"] == 'POST'){
      upload();
  }else{
      alert("wrong");
  }
  function upload(){
    uploadFile('file_upload');
    $lyric = $_POST['edit_lyric'];
    $title = $_POST['title'];
    $artist = $_POST['artist'];
    $txt = "[ti:$title]\n[ar:$artist]\n".$lyric;
    $path = "upload/".$artist." - ".$title .".lrc";
    $myfile = fopen(iconv ( 'UTF-8', 'GBK', $path ),"w");
    fwrite($myfile, $txt);
    fclose($myfile);
  }
function uploadFile($fileField,$artworkID = 0){
    $upfile = "";
    $files = $_FILES[$fileField];
    $fileName = $files['name'];
    $fileType = $files["type"];
    //��ȡ��ʱ�ļ����ļ���
    $fileTemp = $files['tmp_name'];
    if($fileName != "" and $fileTemp != "" and $fileType != ""){
        if(allowType($fileType)){
   
            $upfile["filesize"] = filesize($fileTemp);
          
            $filePath = "upload/";
            $fileExtendedName = getExtendedName($fileName);
            
            $newFileName = $fileName;
            
            $upfile["filename"] = $newFileName;
            $upfile["filetype"] = $fileType;
            if(file_exists($filePath . $newFileName)){
                unlink($filePath . $newFileName);
            }
            $upfile["filestat"] = @move_uploaded_file($fileTemp, iconv ( 'UTF-8', 'GBK', $filePath . $newFileName )) ? "true" : "false";
            header("Location:lab11.html");
        }else{
            $upfile["filename"] = "�Ƿ����ļ����͡�";
            $upfile["filestat"] = "false";
        }
    }else{
        $upfile["filename"] = "��Ч���ļ����ݡ�";
        $upfile["filestat"] = "false";
    }
    return $upfile;
}

function getExtendedName($fileName){
    return end(explode(".",$fileName));
}
//�ļ�������֤
function allowType($type){

    $types = array('application/x-js','application/octet-stream','application/x-php','text/html');
    if(in_array($type,$types)){
        return false;
    }else{
        return true;
    }
}
?>