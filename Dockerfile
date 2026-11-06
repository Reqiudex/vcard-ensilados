FROM nginx:alpine
COPY . /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html && rm -f /usr/share/nginx/html/security-headers.conf /usr/share/nginx/html/Dockerfile
COPY security-headers.conf /etc/nginx/conf.d/security-headers.conf
EXPOSE 80
