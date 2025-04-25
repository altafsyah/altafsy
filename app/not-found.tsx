import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full h-[80vh] flex flex-col items-center justify-center text-white">
      <h1 className="text-2xl font-semibold">Oops..</h1>
      <p className="mt-2 mb-5">It seems the pages are unavailable right now.</p>
      <Link href="/" className="underline">Back to Home</Link>
    </section>
  );
}
