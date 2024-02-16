FROM node:20.11.1-alpine3.18

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install 

USER app

CMD ["node", "app.js"]
