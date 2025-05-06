import { blockChainBaseUrl } from "@/lib/services/blockchain/block-config";
import { METHODS } from "http";


const requestToSend = {
  "header": {
    "signer_public_key": "022937d0423fd6f325cd2f227b34ab977aeb7c2178236a9650270f8aa4329446bf",
    "transaction_ids": [
      "87366d959adddfb5fab439664c5ba1dbf7e1f31248c74db05f76f9d6fb8cc7097846118f28951755807a67564574b3356585157beb12f08c08c8703049312fe4"
    ]
  },
  "header_signature": "af97ec9f424ae1888f43c4a019adbf0eaf0ff05d622b2948c048adcf8f21c3254a1840d41949ac770522237ce5b7870fac8676868691f638dfb7e17b672cc1f6",
  "trace": false,
  "transactions": [
    {
      "header": {
        "batcher_public_key": "022937d0423fd6f325cd2f227b34ab977aeb7c2178236a9650270f8aa4329446bf",
        "dependencies": [],
        "family_name": "sawtooth_settings",
        "family_version": "1.0",
        "inputs": [
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7"
        ],
        "nonce": "",
        "outputs": [
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
          "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7"
        ],
        "payload_sha512": "de6b8a2267d885c8c4171f74156860428235be7f930e252e0d37cda7e5e5b9d934bb3e08f4510619f2897caabd5056d9a668b8eabdcd73707abdd63634567e87",
        "signer_public_key": "022937d0423fd6f325cd2f227b34ab977aeb7c2178236a9650270f8aa4329446bf"
      },
      "header_signature": "87366d959adddfb5fab439664c5ba1dbf7e1f31248c74db05f76f9d6fb8cc7097846118f28951755807a67564574b3356585157beb12f08c08c8703049312fe4",
      "payload": "CAESgAEKJnNhd3Rvb3RoLnNldHRpbmdzLnZvdGUuYXV0aG9yaXplZF9rZXlzEkIwMjI5MzdkMDQyM2ZkNmYzMjVjZDJmMjI3YjM0YWI5NzdhZWI3YzIxNzgyMzZhOTY1MDI3MGY4YWE0MzI5NDQ2YmYaEjB4YzNjZDkyMGNkYzgwMjk1Nw=="
    }
  ]
}


export async function GET(request: Request) {
  const data = await fetch(blockChainBaseUrl + "/batches",
      {
        method: "POST",
        mode: 'no-cors',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Content-Type": "application/octet-stream"
        },
        body: new Blob([JSON.stringify(request)], { type: 'application/octet-stream'})
      }

  ).then((data) => data.json());
  console.log(data)

  return Response.json(data);
}
