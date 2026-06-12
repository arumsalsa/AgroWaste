<?php
ob_start();

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

putenv('APP_SERVICES_CACHE=/tmp/bootstrap/cache/services.php');
putenv('APP_PACKAGES_CACHE=/tmp/bootstrap/cache/packages.php');
putenv('APP_CONFIG_CACHE=/tmp/bootstrap/cache/config.php');
putenv('APP_ROUTES_CACHE=/tmp/bootstrap/cache/routes.php');
putenv('APP_EVENTS_CACHE=/tmp/bootstrap/cache/events.php');

register_shutdown_function(function() {
    $error = error_get_last();
    if ($error) {
        ob_clean();
        header('Content-Type: application/json');
        echo json_encode(['fatal' => $error]);
    }
});

require __DIR__ . '/../public/index.php';
