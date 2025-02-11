FROM node:18 AS base
COPY . .
RUN npm install
ENTRYPOINT [ "npm", "start" ]