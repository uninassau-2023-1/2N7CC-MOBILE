FROM node:16-alpine

WORKDIR /

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .


CMD ["npm", "run", "start"]

EXPOSE 4000