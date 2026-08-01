
import CopyEmailButton from "@/components/CopyEmailButton";

export default function Home() {
  return (
    <main className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-white" />
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-4xl items-center">
        <section className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Software Engineer
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Merwane Bouri
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            Je suis un software engineer curieux qui aime comprendre les
            systèmes en profondeur.
          </p>
          <div className="mt-8">
            <CopyEmailButton email="merwane.bouri@gmail.com" />
          </div>
        </section>
      </div>
    </main>
  );
}