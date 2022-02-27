FROM php:alpine AS build
RUN wget https://getcomposer.org/installer
RUN php installer
RUN php composer.phar global require composer/composer
ENV PATH="$PATH:/root/.composer/vendor/bin"
COPY minify.sh /bin
RUN minify.sh `which php` /dist
COPY index.php /dist
COPY composer.json /dist
COPY composer.lock /dist
WORKDIR /dist
RUN composer install --no-dev -a
CMD [ "sh" ]
FROM scratch
COPY --from=build /dist /