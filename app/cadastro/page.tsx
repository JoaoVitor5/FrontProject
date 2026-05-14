export default function Cadastro() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-gray-300 px-5 py-10">
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

        {/* Formulário */}
        <div className="w-full flex flex-col gap-5">

          <input
            type="text"
            placeholder="RA / Matrícula"
            className="p-4 rounded-[10px] border border-gray-300 text-base outline-none bg-gray-50"
          />

          <input
            type="password"
            placeholder="Senha"
            className="p-4 rounded-[10px] border border-gray-300 text-base outline-none bg-gray-50"
          />

          <button className="shine-button">
            Entrar no Sistema
          </button>

        </div>
      </div>
    </main>
  );
}