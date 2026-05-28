"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  EyeIcon,
  EyeSlashIcon
} from "@heroicons/react/24/outline";

export default function CadastroPage() {

  const [perfil, setPerfil] = useState("professor");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [senha, setSenha] = useState("");

  const router = useRouter();

  function entrarSistema() {

  if (senha === "gg") {
    router.push("/gestoria");
  }

  else {
    alert("Senha incorreta");
  }
}

return (
    <main className="h-screen flex items-center justify-center bg-gray-500 px-5 py-10">
      <div className="w-full max-w-md bg-white rounded-[20px] p-10 shadow-2xl flex flex-col items-center">

        {/* Logo */}
        <img
          src="/eniac-logo.png"
          alt="Logo ENIAC"
          className="w-44 mb-5"
        />

        {/* Título */}
        <h1 className="text-[28px] text-blue-900 mb-8 font-bold">
          Acesso
        </h1>

        <div className="w-full mb-6">


{/* seletor de perfil de acesso */}
  <p className="text-sm font-semibold text-gray-500 mb-3">
    PERFIL DE ACESSO
  </p>

  <div className="bg-gray-300 rounded-xl p-1 flex">

    <button
      onClick={() => setPerfil("professor")}
      className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
        perfil === "professor"
          ? "bg-blue-600 text-white shadow-md"
          : "text-gray-700"
      }`}
    >
      🎓 Professor
    </button>

    <button
      onClick={() => setPerfil("gestor")}
      className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
        perfil === "gestor"
          ? "bg-blue-600 text-white shadow-md"
          : "text-gray-700"
      }`}
    >
      🗂️ Gestor
    </button>

  </div>
</div>

        {/* Formulário */}
        <div className="w-full flex flex-col gap-5">

          <input
            type="text"
            placeholder="RA / Matrícula"
            className="p-4 rounded-[10px] border border-gray-300 text-base outline-none bg-gray-50"
          />

         <div className="relative">

  <input
    type={mostrarSenha ? "text" : "password"}
    placeholder="Senha"
    maxLength={5}
    value={senha}
    onChange={(e) => setSenha(e.target.value)}
    className="w-full p-4 rounded-[10px] border border-gray-300 text-base outline-none bg-gray-50"
  />

  <button
    type="button"
    onClick={() => setMostrarSenha(!mostrarSenha)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
  >
   {mostrarSenha ? (
  <EyeSlashIcon className="w-5 h-5" />
) : (
  <EyeIcon className="w-5 h-5" />
)}
  </button>

</div>

          <button onClick={entrarSistema} className="shine-button">
            Entrar no Sistema
          </button>

        </div>
      </div>
    </main>
  );
}