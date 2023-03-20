## Keys

**Here are the three secret keys to be able to make transactions, spend in moderation:**

>Private key: 33b24608ef3bfd75f7926345820a177859147e3321df23488021460c7822e0c1; 
>Public key: 048caaacede16a225cf285769c6586277d6ea8824db86b386208437cd68f4bab7d7f7e01abb902980febc85792d32903be427888519410aef825d2d30395d2cbfe

>Private key: 2fd0deb0730e4c411bc993959fbe7b038f69679e5ad7aeb6a8b399e653dd5dd4; 
>Public key: 04310d6c594232e18c8ba3bc8877d090012b52261c40e35664ff5ddb04bded2e0e5d185e6767f39bb5c1ea6c8f4daa6a02ce7e74052493d40d45730ae70623e588

>Private key: 604404b346112f05baf7bd3a693a6c389994ec47991adb8bbc6adfe76dae5942; 
>Public key: 04a47647ce93d7d7137aad90fb332a05ca72bf048d666e1350fb78239af9e944aff1097067c8c8f0cd3774996f5b3990aa6cf0bc05d76852d3d7b11fbaa938359a


## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
