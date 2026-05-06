import Image from "next/image";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      
      {/* Parte principal */}
      <div style={styles.container}>

        {/* Coluna 1 - Logo + texto */}
        <div style={styles.col}>
          <Image
            src="/eniac-logo-branca.png"
            alt="Logo ENIAC"
            width={160}
            height={50}
            style={{ objectFit: "contain" }}
          />

          <p style={styles.text}>
            Centro Universitário de Excelência comprometido com a formação de
            profissionais preparados para os desafios do mercado.
          </p>
        </div>

        {/* Coluna 2 - Institucional */}
        <div style={styles.col}>
          <h3 style={styles.title}>Institucional</h3> 
        <a href="https://www.eniac.edu.br/" target="_blank" rel="noopener noreferrer" style={styles.link}>Sobre o Eniac</a>
        <a href="https://www.eniac.edu.br/blog" target="_blank" rel="noopener noreferrer" style={styles.link}>Blog</a>
        <a href="https://www.eniac.edu.br/emprego?__hstc=175528573.f4b229831cfa67ca86bd36608b287bd1.1737390813298.1778097125032.1778099772127.19&__hssc=175528573.1.1778099772127&__hsfp=377421817721a7059997084bc972b5ba" target="_blank" rel="noopener noreferrer" style={styles.link}>Portal de Empregos</a>
        <a href="https://www.eniac.edu.br/" target="_blank" rel="noopener noreferrer" style={styles.link}>Contato</a>
        </div>

        {/* Coluna 3 - Contato */}
        <div style={styles.col}>
          <h3 style={styles.title}>Contato</h3>
          <p>📍 Rua Força Pública, 89 - Centro, Guarulhos - SP</p>

          <br />

          <p>✉️ informacoes@eniac.edu.br</p>
        </div>

      </div>

      {/* Linha de baixo */}
      <div style={styles.bottom}>

        © 2026 Centro Universitário Eniac. Todos os direitos reservados.
      </div>

    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "auto",
    background: "linear-gradient(to right, #1e3a8a, #3b82f6)",
    color: "#000000",
    paddingTop: "15px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 60px",
    flexWrap: "wrap",
  },
  col: {
    maxWidth: "300px",
  },
  title: {
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  text: {
    marginTop: "15px",
    lineHeight: "1.6",
  },
  bottom: {
    textAlign: "center",
    padding: "10px",
    fontSize: "14px",
    width: "60%",
    margin: "20px auto 0 auto",
  },
  link: {
  display: "block",
  marginBottom: "10px",
  textDecoration: "none",
},
} as const;