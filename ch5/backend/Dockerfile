FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Copia wait-for-it.sh
COPY wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

CMD ["npm", "start"]