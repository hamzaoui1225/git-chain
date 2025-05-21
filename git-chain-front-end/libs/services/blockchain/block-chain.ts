import { blockChainBaseUrl } from "./block-config";

export async function getAllBlocks() {
    return await fetch(blockChainBaseUrl + "/blocks", {
        method: "GET",
        mode: 'no-cors',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Content-Type": "application/json"
        }
    }
    ).then((res) => res.json());
}

export async function addBlock(payload: any) {
    return await fetch(blockChainBaseUrl + "/batches", {
        method: "POST",
        mode: 'no-cors',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Content-Type": "application/json"
        },
        body: new Blob([JSON.stringify(payload)], { type: 'application/octet-stream' })
    }
    ).then((res) => console.log(res));
}