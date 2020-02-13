FROM node
WORKDIR /opt/backparcela
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
