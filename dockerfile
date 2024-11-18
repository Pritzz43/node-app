FROM node:18
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5080
CMD ["npm","run","dev"]