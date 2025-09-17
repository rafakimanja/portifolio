import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <p>Olá, eu sou</p>
        <h1><span>Rafael Lopes Ens</span></h1>
        <h2>Desenvolvedor <i>Full Stack</i></h2>
        <p>Crio sistemas modernos, robustos e interativos usando tecnologias de ponta!</p>
      </div>

      <div>
        <div>
          <p>github</p>
        </div>
        <div>
          <p>linkdin</p>
        </div>
        <div>
          <p>email</p>
        </div>
      </div>

      <div>
        <button>Veja meu trabalho</button>
        <button>Entre em contato</button>
      </div>

      <div>
        <p>flecha</p>
        <p>Scrolle o mouse</p>
      </div>

      <div>
        <div>
          <h1>Meus projetos</h1>
          <p>Uma vitrine do meu trabalho recente, apresentando aplicativos full-stack, soluções inovadoras e tecnologias de ponta.</p>
        </div>
        <div>
          <div>
            <h3>Sistema para delegacia</h3>
            <p>sistema para delegecia de polícia de Osorio</p>
            <div>
              <b>React.js</b>
              <b>Golang</b>
              <b>PostgreSQL</b>
            </div>
          </div>
          <div>
            <h3>Pró-mama</h3>
            <p>aplicativo mobile para gestantes</p>
            <div>
              <b>React Native</b>
              <b>Node.js</b>
              <b>PostgreSQL</b>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>Skills & Tecnologias</h1>
          <p>Um kit de ferramentas abrangente de tecnologias e estruturas modernas que utilizo para criar experiências digitais excepcionais.</p>
        </div>

        <div>
          <h3>Areas de COnhecimento</h3>
          <ul>
            <li>Frontend - 2 skills</li>
            <li>Backend - 2 skills</li>
            <li>Database - 2 skills</li>
            <li>DevOps - 1 skill</li>
            <li>Languages - 5 skills</li>
            <li>Frameworks - 10 skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
