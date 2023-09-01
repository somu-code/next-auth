import { getUserById } from "@/lib/prisma/users";
import User from "./user";

export default async function Page({ params }: { params: { userId: string } }) {
  const { user } = await getUserById(params.userId);
  return <User user={user} />;
}
