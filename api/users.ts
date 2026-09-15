import { db } from "../lib/db";

export async function getUser(userId: string) {
  return db.user.findUnique({ where: { id: userId } });
}

export async function deleteUser(userId: string) {
  const user = await db.user.findUnique({ where: { id: userId } });
  await db.user.delete({ where: { id: userId } });
  return user;
}
