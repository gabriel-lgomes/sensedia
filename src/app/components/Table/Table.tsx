import React from "react";
import Search from "../Search/Search";

export default function Table() {
  return (
    <section>
      <h2 className="text-2xl">Usuários</h2>
      <Search />
      <div className="relative overflow-x-auto mt-8">
        <div className="w-full">
          <div className="hidden md:flex text-sm text-gray-50 uppercase border-t border-b border-gray-25">
            <div className="w-1/6 py-3">User</div>
            <div className="w-1/6 py-3">Nome</div>
            <div className="w-1/6 py-3">E-mail</div>
            <div className="w-1/6 py-3">Cidade</div>
            <div className="w-1/6 py-3">Dias da semana</div>
            <div className="w-1/12 py-3 text-center">Posts</div>
            <div className="w-1/12 py-3 text-center">Álbuns</div>
          </div>

          <div className="bg-white border-b border-gray-200 text-gray-75 flex flex-col md:flex-row py-4">
            <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/6 font-bold">
              <span className="md:hidden font-semibold">User:</span> Sonya64
            </div>
            <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/6">
              <span className="md:hidden font-semibold">Nome:</span> Mildred
              Turner
            </div>
            <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/6">
              <span className="md:hidden font-semibold">E-mail:</span>{" "}
              Loraine25@hotmail.com
            </div>
            <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/6">
              <span className="md:hidden font-semibold">Cidade:</span> Abraham
            </div>
            <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/6">
              <span className="md:hidden font-semibold">Dias:</span> Todos
            </div>
            <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/12 text-center">
              <span className="md:hidden font-semibold">Posts:</span> 3
            </div>
            <div className="flex md:block justify-between py-2 md:py-6 w-full md:w-1/12 text-center">
              <span className="md:hidden font-semibold">Álbuns:</span> 2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
