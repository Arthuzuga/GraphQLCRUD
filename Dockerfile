FROM node:10-alpine

WORKDIR /usr/app
COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 4000

CMD ["yarn" , "start]