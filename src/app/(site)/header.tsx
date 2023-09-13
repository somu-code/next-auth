import Link from "next/link";
import SigninButton from "../components/auth/SigninButton";

export default function Header(): JSX.Element {
  return (
    <header className="bg-stone-100 py-10">
      <nav className="mx-auto max-w-screen-lg text-sm font-medium tracking-wider uppercase text-stone-500 flex flex-row gap-8 justify-between">
        <ul className="flex flex-row justify-center gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
        <ul>
          <li>
            <SigninButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
