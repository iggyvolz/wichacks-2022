<?php
$f = fopen(__DIR__ . "/../Resources/animalfacts.csv", "r");
$headers = fgetcsv($f);
foreach($headers as &$header) $header = str_replace([" "], [""], $header);
$data = [];
while($line = fgetcsv($f)) {
	$line = array_combine($headers, $line);
	$line = array_map(fn($s) => trim($s, " ."), $line);
	$data[] = $line;
}
ob_start();
?>
public class AnimalData
{
    public static readonly System.Collections.Generic.Dictionary<Animal, AnimalData> Animals = new System.Collections.Generic.Dictionary<Animal, AnimalData>
    {
<?php foreach($data as $entry): ?>
        { Animal.<?= str_replace(" ", "", $entry["Name"]) ?>, new AnimalData { <?= implode(", ", array_map(fn($v, $k) => "$k = " . json_encode($v, JSON_THROW_ON_ERROR), $entry, array_keys($entry))) ?>, Image = UnityEngine.Resources.Load<UnityEngine.Sprite>("<?= str_replace(" ", "", $entry["Name"]) ?>"), } },
<?php endforeach; ?>
    };
<?php foreach($headers as $h): ?>
    public string <?= $h ?> {get; private set;}
<?php endforeach; ?>
    public UnityEngine.Sprite Image { get; private set; }
}

public enum Animal
{
<?php foreach($data as $entry): ?>
    <?= str_replace(" ", "", $entry["Name"]) ?>,
<?php endforeach; ?>
}

public static class _Animal
{
    public static AnimalData data(this Animal animal)
    {
        return AnimalData.Animals[animal];
    }
}
<?php
//echo ob_get_clean();
file_put_contents(__DIR__ . "/../Scripts/Animal.cs", ob_get_clean());
