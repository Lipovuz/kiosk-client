FROM php:7.4-fpm

# Установка системных зависимостей
RUN apt-get update && apt-get install -y \
        curl \
        git \
        zip \
        unzip \
        libfreetype6-dev \
        libzip-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libjpeg-dev \
        libwebp-dev \
        libfreetype6-dev \
        libicu-dev \
        zlib1g-dev \
        libmemcached11 \
        libmemcachedutil2 \
        libonig-dev \
        libxml2-dev \
        libpq-dev \
        libonig-dev \
        cups-client

# Очистка Кеша установки
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# PHP расширения
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath zip \
        && pecl install -o -f redis \
        && rm -rf /tmp/pear \
        && docker-php-ext-enable redis

RUN docker-php-ext-configure gd \
    --with-webp=/usr/include/ \
    --with-freetype=/usr/include/ \
    --with-jpeg=/usr/include/
RUN docker-php-ext-install gd

# Сразу ставим лимит загрузки на 64 метра
RUN echo "post_max_size = 64M" >> /usr/local/etc/php/conf.d/uploads.ini; \
    echo "upload_max_filesize = 64M" >> /usr/local/etc/php/conf.d/uploads.ini;

# Установка композитора
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Вешаем fpm на прослушивания порта
EXPOSE 9000
CMD ["php-fpm"]

