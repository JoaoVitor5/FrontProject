"use client";

import { useRouter } from "next/navigation";

import {
  BellIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";

export default function GestoriaPage() {

     /* constante do modo escuro e diurno */
    const [darkMode, setDarkMode] = useState(false);

    /* constante da data */
    const router = useRouter();

      /* constante da sidebar no mobile */
    const [menuOpen, setMenuOpen] = useState(false);

  return (

<main
  className={`md:flex min-h-screen transition-colors duration-300 ${
    darkMode ? "bg-gray-900" : "bg-gray-300"
  }`}
>

     {/* Sidebar */}
     <aside
  className={`
    fixed md:sticky
    top-0 md:top-4
    left-0
    z-50
    h-screen md:h-[calc(100vh-2rem)]
    w-64
    ml-0 md:ml-4
    rounded-2xl
    flex flex-col justify-between
    transition-all duration-300
    ${
      menuOpen
        ? "translate-x-0"
        : "-translate-x-full md:translate-x-0"
    }
    ${
      darkMode
        ? "bg-gray-800 text-white"
        : "bg-white text-gray-800"
    }
  `}
>

   {/* Parte superior da Sidebar*/}
        <div>

          {/* Logo */}
          <div className="h-16 flex items-center justify-center">
            <img
              src={darkMode ? "/eniac-logo-branca.png" : "/eniac-logo.png"}
              alt="Logo ENIAC"
              className="max-h-12 w-40 object-contain"
            />
          </div>

    {/* Navegação da Sidebar */}
    <nav className="no-underline flex flex-col p-4 gap-2">

      <button className="sidebar-button bg-blue-600 text-white">
         Dashboard
      </button>

      <button 
        onClick={() => router.push("/gestoriaIA")}
        className="sidebar-button">
         GestoriaIA
      </button>

      <button className="sidebar-button hidden md:block"
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        }}
      >
        Fim da página
      </button>

    </nav>

  </div>
 
  {/* Parte inferior da Sidebar */}
  <div className="p-4 flex flex-col gap-2">

    <button className="sidebar-button">
       Configurações
    </button>

    <button 
    onClick={() => router.push("/cadastro")}
    className="sidebar-button text-red-500">
     Sair
    </button>

  </div>

</aside>


{/* Conteúdo do topo */}
<section className="flex-1 w-full p-4">

 {/* Topbar */}
<header className={`relative z-[60] h-20 rounded-2xl shadow-sm px-6 flex items-center justify-between mb-6 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-gray-800"
  }`}
>    
  {/* Lado esquerdo */}
  <div className="flex items-center gap-3 md:gap-6">

{/* botão abrir sidebar para dispositivos móveis */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden"
>
  {menuOpen ? (
    <XMarkIcon className="w-6 h-6" />
  ) : (
    <Bars3Icon className="w-6 h-6" />
  )}
</button>

    {/* Título */}
    <div className="hidden md:block">
      <h1 className="text-2xl font-bold">
        Navegação Gestoria
      </h1>
    </div>

    {/* Barra de pesquisa */}
    <div className="relative">
      <input
        type="text"
        placeholder="Pesquisar registros..."
        className={`w-40 sm:w-60 md:w-72 pl-10 pr-4 py-2 rounded-xl border outline-none focus:border-blue-500 ${
  darkMode
    ? "bg-gray-700 border-gray-600 text-white"
    : "bg-gray-50 border-gray-300 text-gray-800"
}`}
      />

      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <MagnifyingGlassIcon className="w-5 h-5" />
      </span>
    </div>

  </div>

  {/* Lado direito */}
  <div className="flex items-center gap-2 md:gap-5">

{/* Ícones */}

        <button
  onClick={() => setDarkMode(!darkMode)}
  className="px-1 py-1  bg-gray-500 text-xl cursor-pointer rounded-full"
>
  {darkMode ? (
    <SunIcon className="w-5 h-5" />
  ) : (
    <MoonIcon className="w-5 h-5" />
  )}
</button>

    <button className="text-xl cursor-pointer hidden md:block">
      <BellIcon className="w-5 h-5" />
    </button>

    <button className="text-xl cursor-pointer hidden md:block">
      <Cog6ToothIcon className="w-5 h-5" />
    </button>

  </div>

  </header>

  {/* Topo da página */}
  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">

    <div>
    <h1
  className={`text-3xl font-bold ${
    darkMode ? "text-white" : "text-gray-800"
     }`}
    >
  Dashboard Gestoria
    </h1>

<p
  className={`${
    darkMode ? "text-gray-300" : "text-gray-500"
  }`}
>
  Visão geral acadêmica
</p>

    </div>

    {/* Data atual */}
<div
  className={`
    inline-flex w-fit items-center
    px-4 py-2 rounded-xl shadow
    transition-colors duration-300
    ${
      darkMode
        ? "bg-gray-800 text-white"
        : "bg-white text-gray-800"
    }
  `}
>
  📅 {new Date().toLocaleDateString("pt-BR")}
</div>

  </div>

  {/* Cards do topo */}
<div className="mb-4 overflow-x-auto">
<div className="flex gap-4 min-w-max pb-2">

<div
  className={`min-w-[165px] md:min-w-0 md:flex-1 p-6 rounded-2xl shadow transition-colors duration-300 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-gray-800"
  }`}
>
    <p
     className={`text-sm ${
    darkMode ? "text-gray-300" : "text-gray-500"
    }`}
    >
      Total de Alunos
    </p>

    <h2 className="text-4xl font-bold text-blue-700 mt-2 text-center md:text-left">
      12.480
    </h2>
  </div>

  <div
  className={`min-w-[150px] md:min-w-0 md:flex-1 p-6 rounded-2xl shadow transition-colors duration-300 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-gray-800"
    }`}
    >

    <p
  className={`text-sm ${
    darkMode ? "text-gray-300" : "text-gray-500"
    }`}
    >
      Professores
    </p>

    <h2 className="text-4xl font-bold text-green-600 mt-2 text-center md:text-left">
      328
    </h2>
  </div>

  <div
  className={`min-w-[150px] md:min-w-0 md:flex-1 p-6 rounded-2xl shadow transition-colors duration-300 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-gray-800"
    }`}
    >

    <p
  className={`text-sm ${
    darkMode ? "text-gray-300" : "text-gray-500"
    }`}
    >
      Matérias
    </p>

    <h2 className="text-4xl font-bold text-purple-600 mt-2 text-center md:text-left">
      452
    </h2>
  </div>
    
</div>
</div>

{/* Área principal */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

  {/* Quadro de horários do dia*/}
  <div
  className={`col-span-1 lg:col-span-2 rounded-2xl shadow p-6 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-gray-800"
  }`}
>

    <div className="flex items-center justify-between mb-6">

      <h2
  className={`text-xl font-bold ${
    darkMode ? "text-white" : "text-gray-800"
  }`}
>
        Quadro de Horários do Dia
      </h2>

      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
        Operando Normal
      </span>

    </div>

    {/* Horários */}
    <div className="flex flex-col gap-5">

      {/* ativ.1 */}
      <div className="border-l-4 border-blue-500 pl-4">

        <p className="text-sm text-gray-400">
          10:00
        </p>

        <h3
    className={`font-bold ${
    darkMode ? "text-white" : "text-gray-800"
    }`}
    >   
          Reunião Gestoria
        </h3>

        <p
    className={`text-sm ${
    darkMode ? "text-gray-300" : "text-gray-500"
    }`}
    >
            Ecossistema
        </p>

      </div>

      {/* Ativ.2 */}
      <div className="border-l-4 border-green-500 pl-4">

        <p className="text-sm text-gray-400">
          12:15
        </p>

        <h3
    className={`font-bold ${
    darkMode ? "text-white" : "text-gray-800"
    }`}
    >
          Palestra de Inovação
        </h3>

        <p
    className={`text-sm ${
    darkMode ? "text-gray-300" : "text-gray-500"
    }`}
    >
          Auditório
        </p>

      </div>

      {/* Ativ.3 */}
      <div className="border-l-4 border-orange-500 pl-4">

        <p className="text-sm text-gray-400">
          18:00
        </p>

        <h3
    className={`font-bold ${
    darkMode ? "text-white" : "text-gray-800"
    }`}
    >
          Palestra de Marketing
        </h3>

        <p
        className={`text-sm ${
        darkMode ? "text-gray-300" : "text-gray-500"
        }`}
        >
          Auditório
        </p>

      </div>

    </div>

  </div>

  {/* Painel lateral */}
  <div className="flex flex-col gap-4">

    {/* Avaliações docentes */}
    <div
    className={`rounded-2xl shadow p-6 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-gray-800"
    }`}
    >

      <h2 className="text-xl font-bold mb-5">
        Avaliações Docentes
      </h2>

      <div className="flex flex-col gap-4">

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Qualidade Didática</span>
            <span>4.8/5</span>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full">
            <div className="w-[96%] h-3 bg-blue-500 rounded-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Domínio de Conteúdo</span>
            <span>4.9/5</span>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full">
            <div className="w-[98%] h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Engajamento</span>
            <span>4.2/5</span>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full">
            <div className="w-[84%] h-3 bg-orange-400 rounded-full"></div>
          </div>
        </div>

      </div>

    </div>

    {/* Destaque */}
    <div className="bg-blue-600 text-white rounded-2xl shadow p-6">

      <p className="text-sm opacity-80 mb-2">
        Destaque do Mês
      </p>

      <h2 className="text-2xl font-bold mb-3">
        Excelência Acadêmica
      </h2>

      <p className="text-sm opacity-90 mb-5">
        A faculdade atingiu o maior índice de aprovação dos últimos anos.
      </p>

      <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer">
        Baixar Relatório
      </button>

    </div>

  </div>

  

</div>

    {/* Calendário de Eventos */}
<div
    className={`rounded-2xl shadow p-6 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-gray-800"
    }`}
    >

  {/* Cabeçalho */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

    <div>
      <h2
    className={`text-2xl font-bold ${
    darkMode ? "text-white" : "text-gray-800"
    }`}
    >
        Calendário Eventos
      </h2>

      <p
    className={`text-sm ${
    darkMode ? "text-gray-300" : "text-gray-500"
    }`}
    >
        Monitoramento administrativo
      </p>
    </div>

<button
  className={`px-4 py-2 rounded-lg text-sm border transition cursor-pointer ${
    darkMode
      ? "border-gray-600 text-white hover:bg-gray-700"
      : "border-gray-300 text-gray-800 hover:bg-gray-100"
  }`}
>
  Histórico Completo
</button>

  </div>

  {/* Tabela */}
  <div className="overflow-x-auto">

    <table className="min-w-[700px] w-full table-fixed">

      <thead>

        <tr className="text-left text-gray-400 text-sm border-b">

          <th className="pb-4">Evento</th>

          <th className="pb-4">Local</th>

          <th className="pb-4">Data</th>

          <th className="pb-4">Horário</th>

        </tr>

      </thead>

      <tbody
    className={`${
    darkMode ? "text-gray-200" : "text-gray-700"
    }`}
    >

        <tr
    className={`border-b transition ${
    darkMode
      ? "hover:bg-gray-700"
      : "hover:bg-gray-50"
    }`}
    >

          <td className="py-5 font-medium">
            Corpus Christi
          </td>

          <td>
            Feriado
          </td>

          <td>
            04/06
          </td>

          <td>
            <span className="px-3 py-1 rounded-full text-sm font-semibold">
              00:00 - 23:59
            </span>
          </td>

        </tr>

        <tr
    className={`border-b transition ${
    darkMode
      ? "hover:bg-gray-700"
      : "hover:bg-gray-50"
    }`}
    >

          <td className="py-5 font-medium">
            Feirão do emprego Eniac
          </td>

          <td>
            Eniac          
          </td>

          <td>
            11/06 até 12/06
          </td>

          <td>
            <span className="px-3 py-1 rounded-full text-sm font-semibold">
              07:00 - 22:00
            </span>
          </td>

        </tr>

        <tr
    className={`border-b transition ${
    darkMode
      ? "hover:bg-gray-700"
      : "hover:bg-gray-50"
    }`}
    >

          <td className="py-5 font-medium">
            Festa Junina do Eniac
          </td>

          <td>
            Eniac
          </td>

          <td>
            24/06
          </td>

          <td>
            <span className="px-3 py-1 rounded-full text-sm font-semibold">
              12:00 - 20:00
            </span>
          </td>

        </tr>

      </tbody>

    </table>

  </div>

</div>

</section>

    </main>
  );
}