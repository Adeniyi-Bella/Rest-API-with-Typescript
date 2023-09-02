#use node as base image
FROM node:16.20.1 
#set working directory
WORKDIR /usr/code
#copy package.json into working directory
COPY package.json .
#install dependencies from package.json
RUN npm install
#copy all other files from current directory to working directory
COPY . .
#define environment variables
ENV SERVER_PORT 3000
#expose port 3000
EXPOSE $SERVER_PORT
#run the app i.e npm run start:prod
CMD ["npm", "run", "start:prod"]