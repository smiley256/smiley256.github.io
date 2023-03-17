<?php
if($_POST["message"]) {
    mail("smiley00256@gmail.com", "Here is the subject line",
    $_POST["insert your message here"]. from: smiley00256@gmail.com);
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Email</title>
    </head>
    <body>
        <form method="post" action="subscriberform.php">
            <textarea name="message"></textarea>
            <input type="submit">
        </form>
    </body>
</html>