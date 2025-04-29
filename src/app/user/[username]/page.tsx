"use client";
import { useUserById } from "@/app/hooks/useUserById";
import { useParams } from "next/navigation";
import { CiCalendarDate } from "react-icons/ci";
import { FiMail, FiUser } from "react-icons/fi";
import { SyncLoader } from "react-spinners";

export default function UserID() {
  const { username } = useParams();
  const { user, isLoading, error } = useUserById(username as string);

  if (isLoading) return <SyncLoader color="#8556aa" size={20} />;

  function formatDateToBR(dateString: string) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "America/Sao_Paulo",
    }).format(date);
  }

  return (
    <section className="mt-44">
      <div className="container mx-auto max-w-3xl px-4 py-8">
        {error && (
          <div className="text-red-500">Erro ao carregar usuário...</div>
        )}
        <h1 className="text-2xl font-bold mb-6">Detalhes do Usuário</h1>

        <div className="space-y-4 text-gray-700 text-base bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3">
            <FiUser className="text-purple-600" />
            <span>{user?.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <FiMail className="text-purple-600" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <CiCalendarDate className="text-purple-600" />
            <span className="font-mono tracking-widest">
              Criado em:{" "}
              {user?.created_at ? formatDateToBR(user.created_at) : "—"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
