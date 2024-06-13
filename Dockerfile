FROM node:18-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock* ./

RUN yarn install --frozen-lockfile

COPY . .

#For real project will be better to setup env onfly
COPY .env ./.env

COPY seeders ./seeders
COPY migrations ./migrations

EXPOSE 3000

CMD ["sh", "-c", "yarn run migrate && yarn run seed:all && yarn start"]