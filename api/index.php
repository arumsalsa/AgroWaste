<?php

// Buat direktori writable di /tmp (Vercel read-only filesystem)
$dirs = [
    '/tmp/storage/app/public',
    '/tmp/storage/framework/cache/data',
    '/tmp/storage/framework/sessions',
    '/tmp/storage/framework/views',
    '/tmp/storage/logs',
    '/tmp/bootstrap/cache',
];

foreach ($dirs as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
    }
}

// Arahkan storage & cache ke /tmp
$_ENV['APP_STORAGE'] = '/tmp/storage';

require __DIR__ . '/../public/index.php';
