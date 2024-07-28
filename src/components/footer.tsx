import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <nav className="mx-auto flex max-w-5xl gap-3 p-4">
        <Link href={"/privacy"}>Privacy</Link>
      </nav>
    </footer>
  );
}
