FROM node:12.14.0-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install 

USER app

CMD ["node", "app.js"]
