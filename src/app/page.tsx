
import CopyEmailButton from "@/components/CopyEmailButton";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-white" />
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-6xl flex-col justify-center gap-20">
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

        <section>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                Projets
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Quelques projets fictifs
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition group-hover:bg-gray-900 group-hover:text-white">
                    Mock
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-medium text-gray-900 underline-offset-4 transition hover:underline"
                >
                  Voir le projet
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}