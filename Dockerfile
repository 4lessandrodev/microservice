FROM node:16.13

WORKDIR /usr/app

COPY ./package.json  ./package.json

COPY ./yarn.lock  ./yarn.lock

COPY .  .

RUN npm install -g npm@latest

RUN yarn

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
