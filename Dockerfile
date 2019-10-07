FROM node:10

RUN apt-get install -y git

WORKDIR /usr/src

RUN git clone https://github.com/Mortem45/PortafolioFrontend.git

WORKDIR /usr/src/PortafolioFrontend

RUN npm install --only=productiondo

RUN ["npm", "run", "build:prod"]

CMD ["node", "server.js"]
