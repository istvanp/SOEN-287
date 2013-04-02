<?php

# Set the output type to XML
header("Content-type: text/xml; charset=utf-8");

$query = (isset($_GET['q'])) ? $_GET['q'] : '';
$xml = simplexml_load_file('library.xml');

$writer = new XMLWriter();
$writer->openMemory();
$writer->setIndent(true);
$writer->setIndentString("  ");
$writer->startDocument('1.0', 'UTF-8');
$writer->startElement('library');

# Iterate through document and only keep matches
foreach($xml as $book)
{   
    if (stripos($book->title, $query) === FALSE)
    {
        continue;
    }
    $writer->startElement('book');
        $writer->startElement('title');
            $writer->text($book->title);
        $writer->endElement();
        $writer->startElement('author');
            $writer->text($book->author);
        $writer->endElement();
    $writer->endElement();
}

$writer->endDocument();
echo $writer->outputMemory();