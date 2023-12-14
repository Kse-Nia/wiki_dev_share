import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Page introuvable</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Retour à l'accueil</Link>
    </div>
  );
}
