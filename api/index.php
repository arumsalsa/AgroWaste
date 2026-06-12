<?php
ini_set('display_errors', '1');
error_reporting(E_ALL);

foreach ([
    '/tmp/storage/app/public',
    '/tmp/storage/framework/cache/data',
    '/tmp/storage/framework/sessions',
    '/tmp/storage/framework/views',
    '/tmp/storage/logs',
    '/tmp/bootstrap/cache',
] as $dir) {
    is_dir($dir) || mkdir($dir, 0777, true);
}

// Redirect bootstrap/cache ke /tmp
app()->useBootstrapPath ?? null;
define('LARAVEL_START', microtime(true));

require __DIR__ . '/../public/index.php';
