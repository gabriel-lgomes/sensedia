"use client";
import React from "react";
import Search from "../Search/Search";
import UserRow from "../UserRow/UserRow";
import { useUsersList } from "@/app/hooks/useUsersList";
import { useDeleteUser } from "@/app/hooks/useDeleteUser";
import { SyncLoader } from "react-spinners";

export default function Table() {
  const { users, isLoading } = useUsersList();
  const { mutate: deleteUser } = useDeleteUser();

  function handleUserDeleted(id: string) {
    deleteUser(id);
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-32">
        <SyncLoader color="#8556aa" size={20} />
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-2xl">Usuários</h2>
      <Search />
      <div className="relative overflow-x-auto mt-8">
        <div className="w-full">
          <div className="hidden md:flex text-sm text-gray-50 uppercase border-t border-b border-gray-25 px-2">
            <div className="w-1/6 py-3">User</div>
            <div className="w-2/6 py-3">Nome</div>
            <div className="w-2/6 py-3">E-mail</div>
            <div className="w-1/6 py-3">Cidade</div>
            <div className="w-1/6 py-3">Dias da semana</div>
            <div className="w-1/12 py-3 text-center">Posts</div>
            <div className="w-1/12 py-3 text-center">Álbuns</div>
          </div>

          {users?.map((user) => (
            <UserRow
              key={user.id}
              {...user}
              onUserDeleted={handleUserDeleted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
