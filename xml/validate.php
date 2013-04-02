<?php
ini_set('html_errors', 1);
ob_start();

// Enable advanced libxml errors
libxml_use_internal_errors(true);

$xmlStr = stripslashes($_GET['code']);

if ( ! empty($_GET['code2']))
{
    $xmlStr = stripslashes($_GET['code2']);
    $xsdStr = stripslashes($_GET['code']);
}

$xml = explode("\n", $xmlStr);
$xml[-1] = "No source available for this line.";
$dom = new DOMDocument();
$dom->strictErrorChecking = false; // Allow malformed XML

// Don't try to validate if XML is malformed
if ($dom->loadXML($xmlStr))
{
    $dom->validate();
}

$errors = libxml_get_errors();
libxml_clear_errors();

if (empty($errors))
{
    echo '<div class="success">XML is well formed and valid!</div>';
}
else if (current($errors)->code == 522)
{
    if ($xsdStr)
    {
        @$dom->schemaValidateSource($xsdStr);
        
        $errors = libxml_get_errors();
        libxml_clear_errors();

        if (empty($errors))
        {
            echo '<div class="success">XML is well formed and valid!</div>';
        }
    }
    else
    {
        echo '<div class="success">XML is well formed!<br>',
             '<small>No validation was performed because no DTD was found.</small></div>';
        $errors = array();
    }
}

foreach ($errors as $error) {
    echo display_xml_error($error, $xml);
}

$out = ob_get_contents();
ob_end_clean();
$out = json_encode($out);
echo "callback($out)";

function display_xml_error($error, $xml)
{
    $return = "<div class=\"error\">\n";
    $return .= "<span class=\"code\">";

    switch ($error->level) {
        case LIBXML_ERR_WARNING:
            $return .= "Warning $error->code";
            break;
         case LIBXML_ERR_ERROR:
            $return .= "Error $error->code";
            break;
        case LIBXML_ERR_FATAL:
            $return .= "Fatal error $error->code";
            break;
    }
    
    $return .= "</span> on ";
    $return .= "<span class=\"line\">line " . $error->line . "</span> ";
    $return .= "<span class=\"column\">column " . $error->column . "</span>: ";
    $return .= "<span class=\"message\">" . trim($error->message) . "</span>\n";
    $line = $error->line == 0 ? -1 : $error->line - 1;
    $return .= "<div class=\"source\">" .
                   @highlight($xml[$line], $error->column).
               "</div>";
    $return .= "</div>";

    return $return;
}
function highlight($source, $column)
{
    if ($column == 0)
    {
        return htmlspecialchars($source);
    }
    $str = substr_replace($source, '<*>', $column - 2, 0);
    $str = substr_replace($str, '</*>', $column + 2, 0);
    $str = htmlspecialchars($str);
    $str = str_replace('&lt;*&gt;', '<span>', $str);
    $str = str_replace('&lt;/*&gt;', '</span>', $str);
    return $str;
}
