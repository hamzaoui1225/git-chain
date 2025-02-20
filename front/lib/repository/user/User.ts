import { mongo } from "@/lib/mongo";
import { TUser } from "@/lib/repository/user/TUser";

const user_collection = process.env.COLLECTION_USER ?? "users";

const user = async () => (await mongo()).collection(user_collection);

export async function isUserExist(email: string) {
  return (await user()).findOne({ email });
}
export async function addUser(data: TUser) {
  return (await user()).insertOne(data);
}

export async function getUserById(data: any) {
  return (await user()).findOne(data);
}

export async function findUser(data: any) {
  return (await user()).find(data).toArray();
}

export async function getUsers() {
  return (await user()).find({}).toArray();
}
