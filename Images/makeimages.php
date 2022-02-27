<?php
ob_start();
foreach(scandir(__DIR__ ) as $f) {
    if(str_starts_with($f, ".")) continue;
    if(!str_ends_with($f, ".jpg") && !str_ends_with($f, ".jpeg") && !str_ends_with($f, ".png")) continue;
    $name = str_replace([" ","-"], ["",""], explode(".", $f)[0]);
    echo "/** @type Promise<HTMLImageElement> */export const $name = new Promise(r => {const x = new Image();x.onload = () => r(x);x.src = '/Images/$f';});\n";
}
echo "export default {";
foreach(scandir(__DIR__ ) as $f) {
    if(str_starts_with($f, ".")) continue;
    if(!str_ends_with($f, ".jpg") && !str_ends_with($f, ".jpeg") && !str_ends_with($f, ".png")) continue;
    $name = str_replace([" ","-"], ["",""], explode(".", $f)[0]);
    echo "$name,";
    // echo "/** @type Promise<HTMLImageElement> */export const $name = new Promise(r => {const x = new Image();x.onload = () => r(x);x.src = '/Images/$f';});\n";
}
echo "};\n";
file_put_contents(__DIR__ . "/Images.js", ob_get_clean());