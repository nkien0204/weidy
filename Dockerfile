FROM ubuntu:18.04

RUN apt-get update -y \
    && apt-get install -y curl build-essential

RUN apt-get install gcc g++ make

RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs

RUN node -v
RUN npm -v

RUN npm install --global yarn

RUN apt-get install -y libsodium-dev

RUN apt-get install -y libzmq3-dev

# RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh 
RUN git clone https://github.com/hyperledger/indy-sdk
RUN cd indy-sdk/libindy
RUN cargo build --release
RUN mv target/release/libindy.so /usr/lib/libindy.so

# COPY libindy.so /usr/lib/libindy.so


RUN npm install -g @nestjs/cli

# RUN npm i -g npx

# RUN npx -p @aries-framework/node@^0.3 is-indy-installed

WORKDIR /usr/src/.

COPY . .

RUN npm install

# RUN rm -rf yarn.lock package-lock.json

# RUN yarn add @aries-framework/core @aries-framework/node


CMD [ "npm", "run", "start:dev:issuer" ]
