## WEB приложение клиентов (киосков) Lomobil 

Для того чтобы поднять проект нужно выполнить следующие пункты:

1. Проверить ли в системе установлен git, docker, docker-composer, если что-то не установлено, установите.
2. Склонировать проект с репозитория https://github.com/lomobil20/2021-client
3. Создать файл настройки src/.env по примеру src/.env.example
4. Для постойки контейнеров нужно запустить команду `docker/build.sh`
5. Для запуска контейнеров выполните команду `docker/run.sh`
6. Войти в консоль PHP контейнера `docker/fpm_bash.sh`
    1. Переходим в папку с проектом `cd /code`
    2. Установка пакетов `composer install`
    3. Поднятие миграций `php artisan migrate`

Команда для переноса заказов в админку `docker exec lomobil_client_phpfpm php /code/artisan kiosk:sync_orders` 
Команда для иснхронизации киоска через консоль `docker exec lomobil_client_phpfpm php /code/artisan kiosk:sync_kiosk_setting`
Создание чеков которые по которой либо причине не создались раньше `exec lomobil_client_phpfpm php /code/artisan kiosk:hold_invoices` 

Для инициализации киоска переходим по сылке http://localhost/admin и вводим нужные данние. 
После того как отправим запрос на инициализацию, нужно этот запрос подтвердить из админки.
Как только запрос будет подтвержден, нажымаем на кнопку "Синхронизировать киоск".

Сайт будет доступен по сылке http://localhost/
