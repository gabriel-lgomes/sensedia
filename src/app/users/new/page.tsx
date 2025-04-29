"use client";
import Form from "@/app/components/Form/Form";
import { useRouter } from "next/navigation";
export default function NewUser() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push("/user");
  };

  return (
    <section className="py-5 mt-44">
      <div className="container max-w-5xl mx-auto px-4">
        <h1 className="text-2xl">Cadastrar novo usuário</h1>
        <div className="py-6">
          <Form onSuccess={handleSuccess} />
        </div>
      </div>
    </section>
  );
}
