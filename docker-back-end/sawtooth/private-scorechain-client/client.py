import json
import hashlib
import base64
import requests
from sawtooth_signing import create_context, CryptoFactory
from sawtooth_sdk.protobuf.transaction_pb2 import Transaction, TransactionHeader
from sawtooth_sdk.protobuf.batch_pb2 import Batch, BatchHeader, BatchList

from flask import Flask

app = Flask(__name__)


context = create_context("secp256k1")
private_key = context.new_random_private_key()
signer = CryptoFactory(context).new_signer(private_key)

def get_state_address(username):
    namespace = hashlib.sha512("scorechain".encode("utf-8")).hexdigest()[:6]
    user_address = hashlib.sha512(username.encode("utf-8")).hexdigest()[:64]
    return namespace + user_address

def submit_transaction(username, score_change):
    payload = json.dumps({"username": username, "score": score_change}).encode("utf-8")
    payload_hash = hashlib.sha512(payload).hexdigest()

    txn_header = TransactionHeader(
        family_name="scorechain",
        family_version="0.1",
        inputs=[get_state_address(username)],
        outputs=[get_state_address(username)],
        signer_public_key=signer.get_public_key().as_hex(),
        batcher_public_key=signer.get_public_key().as_hex(),
        dependencies=[],
        payload_sha512=payload_hash,
        nonce=base64.b64encode(payload).decode("utf-8")
    )

    txn = Transaction(
        header=txn_header.SerializeToString(),
        header_signature=signer.sign(txn_header.SerializeToString()),
        payload=payload
    )

    batch_header = BatchHeader(
        signer_public_key=signer.get_public_key().as_hex(),
        transaction_ids=[txn.header_signature]
    )

    batch = Batch(
        header=batch_header.SerializeToString(),
        header_signature=signer.sign(batch_header.SerializeToString()),
        transactions=[txn]
    )

    batch_list = BatchList(batches=[batch])
    batch_bytes = batch_list.SerializeToString()

    url = "http://197.238.230.5:8008/batches"
    headers = {"Content-Type": "application/octet-stream"}
    response = requests.post(url, headers=headers, data=batch_bytes)

    print(response.json())


@app.route("/")
def hello_world():
    return submit_transaction("Alice", 10)
