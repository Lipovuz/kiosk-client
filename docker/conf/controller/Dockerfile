FROM php:7.4

# PHP расширения
RUN pecl install channel://pecl.php.net/dio-0.2.0 && \
    docker-php-ext-enable dio && \
    pecl install channel://pecl.php.net/swoole-4.6.6 && \
    docker-php-ext-enable swoole

# Запуск
CMD ["php", "/code/index.php"]
