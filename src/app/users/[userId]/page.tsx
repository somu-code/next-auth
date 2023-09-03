import { getUserById, getUsers } from "@/lib/prisma/users";
import User from "./user";

export async function generateStaticParams() {
  const { users } = await getUsers();

  return users?.map((user) => {
    userId: user.id;
  });
}

export default async function Page({ params }: { params: { userId: string } }) {
  const { user } = await getUserById(params.userId);
  return <User user={user} />;
}
