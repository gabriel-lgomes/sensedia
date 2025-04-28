import { useAlbums } from "@/app/hooks/useAlbums";
import { usePosts } from "@/app/hooks/usePosts";

interface UserRowProps {
  id: string;
  name: string;
  email: string;
}

export default function UserRow({ id, name, email }: UserRowProps) {
  const { posts, postsError } = usePosts(id);
  const { albums, albumsError } = useAlbums(id);

  return (
    <div
      key={id}
      className="bg-white border-b border-gray-200 text-gray-75 flex flex-col md:flex-row py-4"
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
        <span className="md:hidden font-semibold">Cidade:</span> cidade
      </div>
      <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/6">
        <span className="md:hidden font-semibold">Dias:</span> 10
      </div>
      <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/12 text-center">
        <span className="md:hidden font-semibold">Posts:</span>{" "}
        {postsError ? "Erro" : posts}
      </div>
      <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/12 text-center">
        <span className="md:hidden font-semibold">Álbuns:</span>{" "}
        {albumsError ? "Erro" : albums}
      </div>
    </div>
  );
}
