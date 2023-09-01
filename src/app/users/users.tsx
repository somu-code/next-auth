import { getUsers } from "@/lib/prisma/users";
import Link from "next/link";

export default async function Users() {
  const { users } = await getUsers();

  return (
    <section className="fixed h-full w-1/4 bg-stone-800 pl-4">
      <div className="py-4 container">
        <h2 className="mb-4 text-xl font-medium text-white">Users</h2>
        <ul className="flex flex-col text-sm text-white">
          {users?.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
