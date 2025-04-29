"use client";
import { useAdditionalUserData } from "@/app/hooks/useAdditionalUserData";
import { useDeleteUser } from "@/app/hooks/useDeleteUser";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { DeleteModal } from "../Modal/DeleteModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserPosts } from "@/app/hooks/usePosts";
import { useUserAlbums } from "@/app/hooks/useAlbums";

interface UserRowProps {
  id: string;
  name: string;
  email: string;
  onUserDeleted: (userId: string) => void;
}

export default function UserRow({ id, name, email }: UserRowProps) {
  const { data: posts, error: postsError } = useUserPosts(id);
  const { data: albums, error: albumsError } = useUserAlbums(id);
  const { city, weekdays } = useAdditionalUserData(id);
  const { mutateAsync: deleteUser, isPending: isDeleting } = useDeleteUser();

  const [showDelete, setShowDelete] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteUser(id);
      toast.success(`Usuário deletado com sucesso!`, {
        position: "top-right",
        autoClose: 3000,
      });
    } catch {
      toast.error(`Falha ao deletar o usuário!`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
    setShowModal(false);
  };

  return (
    <div
      className="bg-white border-b border-gray-200 text-gray-75 flex flex-col md:flex-row py-4 px-2 relative group hover:bg-purple-50"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/6 font-bold truncate">
        <span className="md:hidden font-semibold">User:</span> {id}
      </div>

      <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-2/6 truncate pr-2">
        <span className="md:hidden font-semibold">Nome:</span> {name}
      </div>

      <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-2/6 truncate pr-2">
        <span className="md:hidden font-semibold">E-mail:</span> {email}
      </div>

      <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/6">
        <span className="md:hidden font-semibold">Cidade:</span>
        {city}
      </div>

      <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/6">
        <span className="md:hidden font-semibold">Dias:</span>
        {weekdays}
      </div>

      <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/12 text-center">
        <span className="md:hidden font-semibold">Posts:</span>
        {postsError ? (
          <span className="text-red-400">Erro</span>
        ) : (
          posts?.length ?? 0
        )}
      </div>

      <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/12 text-center">
        <span className="md:hidden font-semibold">Álbuns:</span>
        {albumsError ? (
          <span className="text-red-400">Erro</span>
        ) : (
          albums?.length ?? 0
        )}
      </div>

      {showDelete && (
        <button
          onClick={() => setShowModal(true)}
          className="p-3 flex justify-center items-center absolute right-4 top-12 transform -translate-y-1/2 text-white transition-colors cursor-pointer bg-primary"
          aria-label="Excluir usuário"
          disabled={isDeleting}
        >
          <FiTrash2 size={18} />
        </button>
      )}

      <DeleteModal
        isOpen={showModal}
        userName={name}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        isLoading={isDeleting}
      />
    </div>
  );
}
