<?php
//Fill this place

//connecting
try{
    $connectionString='mysql:host=localhost;dbname=travel';
    $user="root";
    $pass="";
    $pdo=new PDO($connectionString,$user,$pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    $sql="SELECT ContinentCode, ContinentName FROM continents";
    $result=$pdo->query($sql);          //executing the query


}catch (PDOException $e){
    die($e->getMessage());
}//dealing with error


//$result->close();


//****** Hint ******
//connect database and fetch data here

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Chapter 14</title>

      <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="css/bootstrap.min.css" />



    <link rel="stylesheet" href="css/captions.css" />
    <link rel="stylesheet" href="css/bootstrap-theme.css" />

</head>

<body>
    <?php include 'header.inc.php'; ?>



    <!-- Page Content -->
    <main class="container">
        <div class="panel panel-default">
          <div class="panel-heading">Filters</div>
          <div class="panel-body">
            <form action="Lab10.php" method="get" class="form-horizontal">
              <div class="form-inline">
              <select name="continent" class="form-control">
                <option value="0">Select Continent</option>
                <?php
                //Fill this place

                while($row = $result->fetch()) {
                    echo '<option value=' . $row['ContinentCode'] . '>' . $row['ContinentName'] . '</option>';

                }

                ?>
              </select>

              <select name="country" class="form-control">
                <option value="0">Select Country</option>
                <?php
                //Fill this place
                try{
                    $pdo2 = new PDO('mysql:host=localhost;dbname=travel','root',"");
                    $pdo2->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    $sql='SELECT CountryName, ISO FROM countries';
                    $result = $pdo2->query($sql);
                }catch (PDOException $e){
                    die($e->getMessage());
                }
                while($row = $result->fetch()) {
                    echo '<option value=' . $row['ISO'] . '>' . $row['CountryName'] . '</option>';
                }

                //****** Hint ******
                /* display list of countries */
                ?>
              </select>
              <input type="text"  placeholder="Search title" class="form-control" name=title>
              <button type="submit" class="btn btn-primary">Filter</button>
              </div>
            </form>

          </div>
        </div>


		<ul class="caption-style-2">
            <?php
            function echoing($id,$path,$title,$description){
                echo '<li>
                      <a href="detail.php?id='. $id .'"class="img-responsive">
                        <img src="images/square-medium/'.$path.'" alt="'.$title.'">
                        <div class="caption">
                          <div class="blur"></div>
                          <div class="caption-text">
                            <p>'.$description.'</p>
                          </div>
                        </div>
                      </a>
                    </li>';
            }
            //Fill this place
            try{
                $pdo3 = new PDO('mysql:host=localhost;dbname=travel','root',"");
                $pdo3->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $sql3='SELECT ImageID, Title, Description, CountryCodeISO, ContinentCode, Path FROM imagedetails';
                $result3 = $pdo3->query($sql3);
            }catch (PDOException $e){
                die($e->getMessage());
            }
            while($row = $result3->fetch()) {
                if(isset($_GET["country"]) && $_GET["country"] != "0"){
                    if($row["CountryCodeISO"] === $_GET["country"]){
                    echoing($row["ImageID"],$row["Path"],$row["Title"],$row["Description"]);
                }
                }else if(isset($_GET["continent"]) && $_GET["continent"] != "0"){
                    if($row["ContinentCode"] === $_GET["continent"]){
                        echoing($row["ImageID"],$row["Path"],$row["Title"],$row["Description"]);
                    }
                }else{
                    echoing($row["ImageID"],$row["Path"],$row["Title"],$row["Description"]);
                }
            }







            //****** Hint ******
            /* use while loop to display images that meet requirements ... sample below ... replace ???? with field data
            <li>
              <a href="detail.php?id=????" class="img-responsive">
                <img src="images/square-medium/????" alt="????">
                <div class="caption">
                  <div class="blur"></div>
                  <div class="caption-text">
                    <p>????</p>
                  </div>
                </div>
              </a>
            </li>
            */


            ?>
       </ul>


    </main>

    <footer>
        <div class="container-fluid">
                    <div class="row final">
                <p>Copyright &copy; 2017 Creative Commons ShareAlike</p>
                <p><a href="#">Home</a> / <a href="#">About</a> / <a href="#">Contact</a> / <a href="#">Browse</a></p>
            </div>
        </div>


    </footer>


        <script type="text/javascript">
            let options = $("option");
            <?php
            if(isset($_GET["country"]))
                echo 'for(let i in options){
            if(options[i].value == "'.$_GET["country"].'")
            $(options[i]).attr("selected","true");
            }';
            if(isset($_GET["continent"]))
                echo 'let options1 = $(".form-control1 option");for(let i in options1){
            if(options1[i].value == "'.$_GET["continent"].'")
            $(options1[i]).attr("selected","true");
            }';
            $connectionString=null;
            ?>
        </script>

        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</body>

</html>