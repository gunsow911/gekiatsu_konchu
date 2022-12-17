FROM node:14.17-alpine

WORKDIR /web

COPY . .

RUN yarn install && yarn build

EXPOSE 3000

CMD ["yarn", "start"]
