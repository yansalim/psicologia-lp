# Use a imagem oficial do Nginx como base
FROM nginx:alpine

# Copie os arquivos da sua landing page para o diretório raiz do Nginx
COPY docs/ /usr/share/nginx/html

# Exponha a porta 80 (porta padrão do Nginx)
EXPOSE 80
