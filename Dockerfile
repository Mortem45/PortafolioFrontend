FROM node:10
# as builder

RUN apt-get install -y git

WORKDIR /usr/src

RUN git clone https://github.com/Mortem45/PortafolioFrontend.git

WORKDIR /usr/src/PortafolioFrontend

RUN npm install --only=productiondo

RUN ["npm", "run", "build:prod"]

CMD ["node", "server.js"]

# FROM node:10

# COPY ["PortafolioFrontend/package.json", "PortafolioFrontend/package-lock.json", "/usr/src/"]

# WORKDIR /usr/src

# RUN npm install --only=production

# COPY --from=builder ["/usr/src/PortafolioFrontend/server.js", "/usr/src/"]
# COPY --from=builder ["/usr/src/PortafolioFrontend/index.html", "/usr/src/"]
# COPY --from=builder ["/usr/src/PortafolioFrontend/images", "/usr/src/images"]
# COPY --from=builder ["/usr/src/PortafolioFrontend/dist", "/usr/src/dist"]

# EXPOSE 3000

# CMD ["node", "server.js"]
