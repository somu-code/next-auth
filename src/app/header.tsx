import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="bg-stone-100 py-10">
      <nav className="text-sm font-medium tracking-wider uppercase text-stone-500">
        <ul className="flex flex-row justify-center gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
