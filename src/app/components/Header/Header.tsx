"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdApps } from "react-icons/io";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const closeUserMenu = () => setIsUserMenuOpen(false);

  // Close menu to escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeUserMenu();
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isUserMenuOpen]);

  return (
    <header className="fixed top-0 z-50 w-full h-44 bg-white">
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
        <div className="flex items-center justify-between lg:px-0 px-4">
          <Breadcrumb />
          <div className="lg:flex items-center justify-end px-2 py-4 gap-8">
            <div className="lg:flex hidden gap-4">
              <Link
                href="#"
                className="text-2xl text-gray-75 hover:text-primary transition-all"
              >
                <FaRegQuestionCircle />
              </Link>
              <Link
                href="#"
                className="text-2xl text-gray-75 hover:text-primary transition-all"
              >
                <IoMdApps />
              </Link>
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
              {isUserMenuOpen && (
                <div className="absolute lg:-right-6 right-0 top-full mt-2 w-40 bg-gray-950 shadow-lg py-1 z-20">
                  <Link
                    href="/user"
                    className="block px-4 py-2 text-sm text-gray-light hover:border-l-4 hover:border-primary"
                    onClick={closeUserMenu}
                  >
                    Usuários
                  </Link>
                  <Link
                    href="/users/new"
                    className="block px-4 py-2 text-sm text-gray-light hover:border-l-4 hover:border-primary"
                    onClick={closeUserMenu}
                  >
                    Criar usuário
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-light hover:border-l-2 hover:border-primary"
                    onClick={closeUserMenu}
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
