FROM nginx:alpine
COPY . /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html && rm -f /usr/share/nginx/html/security-headers.conf /usr/share/nginx/html/Dockerfile /usr/share/nginx/html/nginx-sitio.conf
COPY security-headers.conf /etc/nginx/conf.d/security-headers.conf
COPY nginx-sitio.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
