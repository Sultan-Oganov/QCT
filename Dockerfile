FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY /packages/web/dist/ .
COPY /configs/nginx/default.conf /etc/nginx/conf.d/default.conf
