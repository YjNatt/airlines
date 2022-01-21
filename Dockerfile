FROM node:14

EXPOSE 3000

WORKDIR /usr/src/app

ENV SKIP_PREFLIGHT_CHECK=true

COPY . .

RUN npm install

CMD ["npm", "start"]
