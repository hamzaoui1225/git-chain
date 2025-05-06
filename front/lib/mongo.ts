import { Db, MongoClient } from "mongodb";

let connection: MongoClient;

const url = process.env.MONGO_URL ?? "mongodb://192.168.1.26:27017/";
const database = process.env.MONGO_DATABASE ?? "gitchain";

async function initConnection() {
  if (!connection) connection = await new MongoClient(url).connect();
}

export async function mongo(): Promise<Db> {
  await initConnection();

  return connection.db(database);
}
