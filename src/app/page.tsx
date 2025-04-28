import Image from "next/image";
import Grid from "./components/Grid/Grid";
import Table from "./components/Table/Table";

export default async function Home() {
  const skills = [
    {
      image: "/dribbble-square.png",
      title: "Tipo de Quadra",
      description: "Society",
    },
    {
      image: "/align-left.png",
      title: "Nível",
      description: "Semi-Profissional",
    },
    {
      image: "/trophy.png",
      title: "Vitórias",
      description: "345",
    },
  ];

  return (
    <main>
      <section className="bg-primary py-5">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:max-w-2xl gap-y-4">
            {skills.map((item, index) => (
              <Grid
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container max-w-5xl mx-auto px-4">
          <Table />
        </div>
      </section>
    </main>
  );
}
