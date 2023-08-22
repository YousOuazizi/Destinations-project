FROM node:16

WORKDIR /usr/src/app

# Copiez d'abord les fichiers package.json et package-lock.json et installez les dépendances
COPY package*.json ./
RUN npm install

# Copiez le script wait-for-it.sh et rendez-le exécutable
COPY wait-for-it.sh /usr/src/app/wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh

# Copiez le reste de l'application
COPY . .

EXPOSE 4000

CMD ["/usr/src/app/wait-for-it.sh", "mongo:27017", "--", "npm", "start"]
