export default function Coordenacao() {
  return (
    <main className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">

  {/* Logo */}
  <div className="p-6 border-b">
    <img
      src="/eniac-logo.jpg"
      alt="Logo ENIAC"
      className="w-40"
    />
  </div>

  {/* Menu */}
  <nav className="flex flex-col p-4 gap-2">

    <button className="sidebar-button">
      Dashboard
    </button>

    <button className="sidebar-button">
      Horários
    </button>

    <button className="sidebar-button">
      Corpo Docente
    </button>

    <button className="sidebar-button">
      Alunos
    </button>

    <button className="sidebar-button">
      Avaliações
    </button>

  </nav>

</aside>


      {/* Conteúdo */}
      <section className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Coordenação
        </h1>

      </section>

    </main>
  );
}