import { useState } from "react";
import server from "./server";
import { sha256 } from "ethereum-cryptography/sha256";
import { utf8ToBytes, bytesToHex } from "ethereum-cryptography/utils"
import * as secp from "ethereum-cryptography/secp256k1"; 

function Transfer({ address, setBalance, privateKey }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    const payload = JSON.stringify({
      sender: address,
      amount: parseInt(sendAmount),
      recipient
    })
    const hashMessage = bytesToHex(sha256(utf8ToBytes(payload)))

    const [signature, rec] = await secp.sign(hashMessage, privateKey, { recovered: true })
    const signatureHex = bytesToHex(signature)

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        amount: parseInt(sendAmount),
        hashMessage,
        signature: signatureHex,
        rec
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
