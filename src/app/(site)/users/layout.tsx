import Users from "./users";

export default async function UserLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <section className="flex flex-row">
      <aside className="w-1/4">
        <Users />
      </aside>
      <main>{children}</main>
    </section>
  );
}
