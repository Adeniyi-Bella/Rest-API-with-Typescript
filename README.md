# Rest-API-with-Typescript

### Task
Build a simple rest api using typescript and deploy to AWS.

### Tech Stacks
- Angular frontend.
- Backend with typescript.
- mysql DB
- Docker and docker-compose
- Deploy using AWS

### Testing/Run
- To run the app for testing purposes:
- Download docker ([Download here](https://www.docker.com/products/docker-desktop/)) if not already downloaded.

1. clone the repo
2. change directory into cloned repo ```cd Rest-API-with-Typescript```
3. run ```docker-compose build``` to build images for all the services (backend, database).
4. run ```docker-compose up``` to start all the services.
5. The app is available on localhost:3000. You can start testing.

### Deploying to AWS
1. Create a free account on AWS
2. Launch an EC2 instance to create virtual machines and fill in the necessary information.
3. Two important steps for creating an instance:
- Security group: Two security groups are needed. A port 22 for ssh and a port 3000 for the api.
- Keypair login: This is necessary for signing into our virtual machine remotely.
4. Once every detail has been filled, launch the instance.
5. Wait for the instance to start running.
6. run ```chmod 400 <typescript.pem>``` from the terminal to set the permission for your private key file. This file was downloaded while creating an EC2 instance from AWS.
7. Log into the remote machine using ```ssh -i typescript.pem ec2-user@<Public IPv4 address>```
8. Download docker and docker-compose on the remote machine by following the steps [here](https://www.cyberciti.biz/faq/how-to-install-docker-on-amazon-linux-2/).
9. Once docker is downloaded, you can either run git clone https://github.com/Adeniyi-Bella/Rest-API-with-Typescript.git to clone the repo or just copy the file directly using the scp command.
10. run docker-compose build and docker-compose up to build and start all services
11. The app is available on <Public IPv4 address>:3000. You can start testing.


