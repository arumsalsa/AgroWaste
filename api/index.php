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

try {
    require __DIR__ . '/../public/index.php';
} catch (\Throwable $e) {
    $errors = [];
    $current = $e;
    while ($current !== null) {
        $errors[] = [
            'error' => $current->getMessage(),
            'file' => $current->getFile(),
            'line' => $current->getLine(),
        ];
        $current = $current->getPrevious();
    }
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode(['chain' => $errors]);
}
