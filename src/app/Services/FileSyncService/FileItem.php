<?php
namespace App\Services\FileSyncService;

/**
 * Class FileItem
 * Класс УРИ файла, обработка элементов пути
 *
 * @property-read string $scheme
 * @property-read string $host
 * @property-read string $localPath
 * @property-read string $dirname
 * @property-read string $filename
 * @property-read string $extension
 *
 */
class FileItem
{
    /**
     * Путь к родительской папке (src/public)
     * @var string
     */
    protected string $basePath;

    protected string $scheme;
    protected string $host;
    protected string $localPath;
    protected string $port;
    protected string $dirname;
    protected string $filename;
    protected string $extension;

    public function __get($name)
    {
        if (property_exists($this, $name)) {
            return $this->$name;
        } else {
            throw new \InvalidArgumentException("Property $name not found");
        }
    }

    /**
     * FileItem constructor.
     * @param string $defaultScheme - схема хоста по умолчанию (ядро)
     * @param string $defaultHost - хост по умолчанию (ядро)
     */
    public function __construct(string $uri, string $basePath, string $defaultScheme, string $defaultHost)
    {
        // парсим путь,  определяем основные составляющие
        $this->basePath = $basePath;

        $parseUrl = parse_url($uri);
        $this->localPath = isset($parseUrl['path']) ? $parseUrl['path'] : '';
        if (isset($parseUrl['host'])) {
            // ури внешние
            $this->scheme = isset($parseUrl['scheme']) ? $parseUrl['scheme'] : 'http';
            $this->host = $parseUrl['host'];
            $this->port = isset($parseUrl['port']) ? ':' . $parseUrl['port'] : '';
        } else {
            $this->scheme = $defaultScheme;
            $this->host = $defaultHost;
            $this->port = '';
        }

        $parsePath = pathinfo($this->localPath);
        $this->extension = isset($parsePath['extension']) ? $parsePath['extension'] : '';
        $this->dirname = isset($parsePath['dirname']) ? $parsePath['dirname'] : '';
        $this->filename = isset($parsePath['filename']) ? $parsePath['filename'] : '';
    }

    public function getLocalUri(): string
    {
        if (!$this->isValidUri()) {
            throw new \LogicException("Uri is invalid");
        }
        return $this->dirname . '/' . $this->filename . '.' . $this->extension;
    }

    public function getAbsoluteUri(): string
    {
        return $this->scheme . '://' . $this->host . $this->port . $this->getLocalUri();
    }

    public function getLocalPath(): string
    {
        return str_replace('/',DIRECTORY_SEPARATOR, $this->getLocalUri());
    }

    public function getFullPath(): string
    {
        return $this->basePath . $this->getLocalPath();
    }

    public function isExist(): bool
    {
        return file_exists($this->getFullPath());
    }

    public function isValidUri(): bool
    {
        return $this->extension && $this->filename && $this->dirname;
    }
}