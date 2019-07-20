FROM techbureau/catapult-tools:gcc-0.5.0.1
ADD ./userconfig /userconfig
RUN apt-get update
RUN apt-get install -y curl
RUN ["/bin/bash","-c","curl -sL https://deb.nodesource.com/setup_8.x | bash -"]
RUN apt-get install -y nodejs
WORKDIR /app
COPY . .
RUN npm i
CMD ["npm", "start"]