import Image from "next/image";
import Form from "./components/Form/Form";
import Grid from "./components/Grid/Grid";
import Table from "./components/Table/Table";
import { helps } from "./data/helps";
import { skills } from "./data/skills";

export default function Home() {
  return (
    <main className="mt-44">
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
      <section className="py-5">
        <div className="container max-w-5xl mx-auto px-4">
          <Form />
        </div>
      </section>
      <section className="py-5">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">
            {helps.map((item, index) => (
              <div key={index}>
                <p className="text-primary font-medium mb-6">{item.title}</p>
                <div className="flex items-center gap-3">
                  <div className="w-1/6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={43}
                      height={43}
                    />
                  </div>
                  <div className="w-5/6">
                    <p className="font-medium text-[#707070]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
