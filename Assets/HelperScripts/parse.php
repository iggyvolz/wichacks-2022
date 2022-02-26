<?php
$f = fopen(__DIR__ . "/../Resources/animalfacts.csv", "r");
$headers = fgetcsv($f);
foreach($headers as &$header) $header = str_replace([" ", ":"], ["",""], $header);
$data = [];
while($line = fgetcsv($f)) {
	$line = array_combine($headers, $line);
	$line = array_map(fn($s) => trim($s, " ."), $line);
	$data[] = $line;
}
ob_start();
?>
public class Animal
{
<?php foreach ($data as $entry): ?>
    public static readonly Animal <?= str_replace(" ", "", $entry[array_key_first($entry)]) ?> = new Animal(<?= implode(", ", array_map(fn($x) => json_encode($x, JSON_THROW_ON_ERROR), $entry)); ?>);
<?php endforeach; ?>
    public static readonly Animal[] animals = {<?= implode(", ", array_map(fn($entry) => str_replace(" ", "", $entry[array_key_first($entry)]), $data)) ?>};
    public readonly string <?= implode(", ", $headers) ?>;


    Animal(<?= implode(", ", array_map(fn($header) => "string " . lcfirst($header), $headers)) ?>)
    {
<?php foreach($headers as $h): ?>
        <?= $h ?> = <?= lcfirst($h) ?>;
<?php endforeach; ?>
    }
}
<?php
file_put_contents(__DIR__ . "/../Scripts/Animal.cs", ob_get_clean());
