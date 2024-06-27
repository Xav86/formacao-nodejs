FROM node:alpine

WORKDIR C:\Users\gustavo.santos\Documents\web\node

COPY package*.jason ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]