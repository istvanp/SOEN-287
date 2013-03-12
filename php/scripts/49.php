<!-- /tutorials/php/scripts/49.php -->
<pre>
<?php
    if ($_SERVER['REQUEST_METHOD'] == "POST")
        print_r($_POST);
?>
</pre>
<form action="/tutorials/php/scripts/49.php"
      method="POST">
  <label>
    Name:
    <input type="text" name="name" />
  </label><br/><br/>
  <label>
    <input type="radio" name="gender" value="m" /> Male
  </label>
  <label>
    <input type="radio" name="gender" value="f" /> Female
  </label><br/><br/>
  Interests:<br/>
  <label><input type="checkbox" name="interests[]"
   value="art" /> Art</label><br/>
  <label><input type="checkbox" name="interests[]"
   value="books" /> Books</label><br/>
  <label><input type="checkbox" name="interests[]"
   value="fashion" /> Fashion</label><br/>
  <label><input type="checkbox" name="interests[]"
   value="gaming" /> Gaming</label><br/>
  <label><input type="checkbox" name="interests[]"
   value="tech" /> Technology</label><br/>
  <label><input type="checkbox" name="interests[]"
   value="travel" /> Travel</label><br/>
  <label><input type="checkbox" name="interests[]"
   value="other" /> Other</label><br/>
  <p>
    <input type="submit" />
  </p>
</form>
