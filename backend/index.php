<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
require_once __DIR__ . "/vendor/autoload.php";

// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0c3QxMjM0In0.1pNZ9W-2XW2ggeO2DagtkCA6I_JlvH-aAZK0pI5qiA0
$key = "TEST123";
$adapter = new League\Flysystem\Local\LocalFilesystemAdapter(__DIR__ . "/storage");
$filesystem = new League\Flysystem\Filesystem($adapter);

$authorization = $_SERVER["HTTP_AUTHORIZATION"] ?? "";
if(!str_starts_with($authorization, "Bearer ")) {
    http_response_code(403);
    die();
}
$jwt = substr($authorization, strlen("Bearer "));
$decoded = (array)JWT::decode($jwt, new Key($key, 'HS256'));
switch($_SERVER["REQUEST_METHOD"]) {
    case "GET":
        echo $filesystem->read($decoded["sub"]);
        break;
    case "POST":
        $filesystem->write($decoded["sub"], file_get_contents("php://input"));
        break;
}