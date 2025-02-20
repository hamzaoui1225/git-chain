import { mongo } from "@/lib/mongo";
import { TRepositories } from "@/lib/repository/repository/TRepository";
import {ObjectId} from "mongodb";

const repository_collection = process.env.COLLECTION_USER ?? "repository";

const repository = async () => (await mongo()).collection(repository_collection);

export async function addRepository(data: TRepositories) {
  return (await repository()).insertOne(data);
}

export async function findRepositoryByName(name: any) {
  return (await repository()).find({ name: name }).toArray();
}
export async function findRepositoryById(id: any) {
  return (await repository())
    .findOne({ _id: ObjectId.createFromHexString(id) });
}

export async function getRepositories() {
  return (await repository()).find({}).toArray();
}
