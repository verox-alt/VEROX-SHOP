$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:5500/"
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Serving http://localhost:5500/ (press Ctrl+C in the terminal to stop)"
while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
    } catch {
        break
    }
    $path = $context.Request.Url.LocalPath.TrimStart('/')
    if ($path -eq '') { $path = 'index.html' }
    $file = Join-Path (Get-Location) $path
    if (Test-Path $file) {
        $bytes = [System.IO.File]::ReadAllBytes($file)
        $mime = "application/octet-stream"
        switch ([System.IO.Path]::GetExtension($file).ToLower()) {
            '.html' { $mime = 'text/html' }
            '.htm' { $mime = 'text/html' }
            '.js' { $mime = 'application/javascript' }
            '.css' { $mime = 'text/css' }
            '.png' { $mime = 'image/png' }
            '.jpg' { $mime = 'image/jpeg' }
            '.jpeg' { $mime = 'image/jpeg' }
            '.svg' { $mime = 'image/svg+xml' }
            '.json' { $mime = 'application/json' }
        }
        $context.Response.ContentType = $mime
        $context.Response.ContentLength64 = $bytes.Length
        $context.Response.OutputStream.Write($bytes,0,$bytes.Length)
        $context.Response.OutputStream.Close()
    } else {
        $context.Response.StatusCode = 404
        $context.Response.Close()
    }
}
