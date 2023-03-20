const express = require("express");
const secp = require("ethereum-cryptography/secp256k1");
const app = express();
const cors = require("cors");
const port = 3042;
const { bytesToHex } = require("ethereum-cryptography/utils");

app.use(cors());
app.use(express.json());

const balances = {
  "048caaacede16a225cf285769c6586277d6ea8824db86b386208437cd68f4bab7d7f7e01abb902980febc85792d32903be427888519410aef825d2d30395d2cbfe": 100, //dan
  "04a47647ce93d7d7137aad90fb332a05ca72bf048d666e1350fb78239af9e944aff1097067c8c8f0cd3774996f5b3990aa6cf0bc05d76852d3d7b11fbaa938359a": 50,  //al
  "04310d6c594232e18c8ba3bc8877d090012b52261c40e35664ff5ddb04bded2e0e5d185e6767f39bb5c1ea6c8f4daa6a02ce7e74052493d40d45730ae70623e588": 75,  //ben
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { recipient, amount, hashMessage, signature, rec } = req.body;  
  const sender = bytesToHex(secp.recoverPublicKey(hashMessage, signature, rec));

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
