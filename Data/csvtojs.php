<?php
$f = fopen("php://stdin", "r");
$headers = array_map(fn($header) => str_replace([" "], [""], $header), fgetcsv($f));
$data = [];
while($line = fgetcsv($f)) {
	$line = array_combine($headers, $line);
	$line = array_map(trim(...), $line);
	$data[] = $line;
}
echo "export default " . json_encode($data, JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR);