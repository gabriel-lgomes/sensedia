"use client";
import React from "react";
import Search from "../Search/Search";
import { useUsers } from "@/app/hooks/useUsers";
import UserRow from "../UserRow/UserRow";

export default function Table() {
  // Get users
  const { users, loading, error } = useUsers();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar usuários: {error.message}</p>;
  }

  return (
    <section>
      <h2 className="text-2xl">Usuários</h2>
      <Search />
      <div className="relative overflow-x-auto mt-8">
        <div className="w-full">
          <div className="hidden md:flex text-sm text-gray-50 uppercase border-t border-b border-gray-25">
            <div className="w-1/6 py-3">User</div>
            <div className="w-2/6 py-3">Nome</div>
            <div className="w-2/6 py-3">E-mail</div>
            <div className="w-1/6 py-3">Cidade</div>
            <div className="w-1/6 py-3">Dias da semana</div>
            <div className="w-1/12 py-3 text-center">Posts</div>
            <div className="w-1/12 py-3 text-center">Álbuns</div>
          </div>

          {/* Verify if there are users */}
          {users.length > 0 ? (
            users.map((user) => <UserRow key={user.id} {...user} />)
          ) : (
            <p>Nenhum usuário encontrado.</p>
          )}
        </div>
      </div>
    </section>
  );
}
