FROM ubuntu:16.04
MAINTAINER Blockchain Team 

ENV DEBIAN_FRONTEND noninteractive

# Usual update / upgrade
RUN apt-get update
RUN apt-get upgrade -q -y
RUN apt-get dist-upgrade -q -y

# Install curl
RUN apt-get install curl -y

# Install Ethereum
RUN apt-get install -q -y software-properties-common
RUN add-apt-repository ppa:ethereum/ethereum
RUN apt-get update
RUN apt-get install -q -y ethereum

# Install Solidity Compiler
RUN apt-get install -q -y solc

# Install node
RUN apt-get install -q -y git
RUN curl -sL curl -sL https://deb.nodesource.com/setup_8.x | bash && \
    apt-get install -q -y nodejs build-essential

# Install swagger
RUN npm install -g swagger

# Install node-gyp
# RUN npm install -g node-gyp

# eth port
EXPOSE 30302
# node port
EXPOSE 10010

CMD ["bash"]