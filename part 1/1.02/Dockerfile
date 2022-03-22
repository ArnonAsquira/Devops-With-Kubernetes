FROM node:16

WORKDIR /usr/src/workdir
COPY . .
RUN ["npm", "i"]

ENV PORT=8080

CMD ["npm", "start"]