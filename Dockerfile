FROM node:10 as builder

WORKDIR /usr/src

COPY . /

WORKDIR /usr/src/

RUN npm install --only=productiondo

CMD ["npm", "run", "build:prod"]

CMD ["node", "server.js"]


FROM node:10

COPY ["Mortem-Video-ReactJS/package.json", "Mortem-Video-ReactJS/package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install --only=production

COPY --from=builder ["/usr/src/Mortem-Video-ReactJS/server.js", "/usr/src/"]
COPY --from=builder ["/usr/src/Mortem-Video-ReactJS/index.html", "/usr/src/"]
COPY --from=builder ["/usr/src/Mortem-Video-ReactJS/images", "/usr/src/images"]
COPY --from=builder ["/usr/src/Mortem-Video-ReactJS/dist", "/usr/src/dist"]

EXPOSE 3000

CMD ["node", "server.js"]
