import { CardsList, ProjectFilters, ProjectTypeSwitcher } from "@/shared/components";

export default function Projects() {
  return (
    <main className="mx-auto container mt-32">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl lg:text-6xl font-semibold">Проекты</h1>
      </div>
      <div className="mt-12 xl:flex justify-between">
        <ProjectTypeSwitcher />
        <ProjectFilters />
      </div>
      <CardsList />
    </main>
  );
}
