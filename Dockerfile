FROM node:17-alpine
WORKDIR /app
COPY package.json .

# install all packages
RUN npm install
COPY . .
EXPOSE 3000

# start command
CMD ["npm", "start"]