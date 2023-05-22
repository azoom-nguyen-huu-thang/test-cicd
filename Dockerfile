FROM node:14-alpine

WORKDIR /
COPY package*.json ./
COPY . .
RUN yarn 

EXPOSE 3000
CMD ["yarn", "start"]
