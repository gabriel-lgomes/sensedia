"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretRight, FaRegQuestionCircle } from "react-icons/fa";
import { IoMdApps } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <header>
      <div className="bg-gray-950 px-4 py-6">
        <div className="container mx-auto">
          <Link href="/" className="flex flex-col">
            <Image
              src="/logo.png"
              alt="Sensedia Logo"
              width={126}
              height={30}
            />
            <span className="text-xs text-[#B1B1B1] pl-8">
              Treinador De Futebol
            </span>
          </Link>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-8 lg:px-0 px-4">
          <div className="flex gap-2 items-center">
            <Image
              src="/sensedia.svg"
              alt="Sensedia Logo"
              width={27}
              height={27}
            />
            <h1 className="text-sm text-primary uppercase font-medium">
              Bem-vindo
            </h1>
            <span className="text-gray-25 text-xs">
              <FaCaretRight />
            </span>
            <span className="text-sm font-medium text-gray-75">Registro</span>
          </div>

          {/* Nav menu */}
          <div className="lg:flex items-center justify-end px-2 py-4 gap-8">
            <div className="lg:flex hidden gap-4">
              <div>
                <Link
                  href="#"
                  className="text-2xl text-gray-75 hover:text-primary transition-all"
                >
                  <FaRegQuestionCircle />
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="text-2xl text-gray-75 hover:text-primary transition-all"
                >
                  <IoMdApps />
                </Link>
              </div>
            </div>
            <nav className="relative">
              <ul className="lg:flex lg:gap-4 items-center pl-1 transition-all border-l-2 border-gray-25">
                <li>
                  <button
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={toggleUserMenu}
                  >
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-50 text-white">
                      UN
                    </span>
                    <span className="text-gray-75 font-medium hover:text-primary transition-all">
                      Nome de usuário
                    </span>
                  </button>
                </li>
              </ul>
              {/* Submenu do usuário */}
              {isUserMenuOpen && (
                <div className="absolute lg:-right-6 right-0 top-full mt-2 w-40 bg-gray-950 shadow-lg py-1 z-20">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-light hover:border-l-4 hover:border-primary"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Lista de amigos
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-light hover:border-l-4 hover:border-primary"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Artigos Salvos
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-light hover:border-l-4 hover:border-primary"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Notificações
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-light hover:border-l-4 hover:border-primary"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Preferências
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-light hover:border-l-2 hover:border-primary"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Fechar Sessão
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
