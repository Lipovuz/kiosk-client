### Docker:

- `docker/build.sh` - Построить контейнеры 
- `docker/run.sh` - Запуск контейнеров 
- `docker/stop-all.sh` - Остановка контейнеров
- `docker/fpm_bash.sh` - Войти в консоль PHP контейнера  (composer, artisan, ...)
- `docker/db_bash.sh` - Войти в консоль MySql контейнера

### Настройки
.env  - параметры БД, Редис, Хост, окружение.  Использовать .env.example (параметры под подключение БД из докер контейнера админки Ломобиля).

/storage - права (sudo chmod -R 777 storage) 

### Настройки для печати (если команда выполняется через ssh) - уже не нужно 
- .env - проверить наличие KIOSK_PRINT_FOLDER - путь к директории с фото для печати (путь в рамках основной системи).
- скопировать файлы .ssh/id_rsa и .ssh/id_rsa.pub в /.ssh
- дать права для папки ssh cmd:`chmod 700 .ssh`
- дать права на файл .ssh/id_rsa cmd:`chmod 400 .ssh/id_rsa`
- дать права на файл .ssh/id_rsa.pub cmd:`chmod 644 .ssh/id_rsa.pub`

- в контейнере lomobil_client_phpfpm выполнить команду cmd:`chown -R www-data:www-data /ssh`

### Миграции:
cmd: `php artisan migrate`

cmd: `php artisan db:seed`

### Файлы
Создание сим. ссылки на файловое хранилище
cmd: `php artisan storage:link`

### Обновление
`composer dump-autoload` - вполнять при изменениях в миграциях, тестах, сидах

### Composer:
- __Первоначальная установка только через:__ `composer install` 
- __НЕ выполнять глобальное composer update__ (версии пакетов зафиксированы)  
- __Обновление собственного пакета STL:__ `composer update lomobil20/2021-stl`

###Настройка почты для IMAP
- __Включить в настройках почты доступ по протоколу IMAP__
- __Перейти в управлении аккаунтом гугл, раздел безопасность, и разрешить доступ ненадежным приложениям__