import "./App.css";

function App() {
  return (
    <>
      <nav>
        <h1>Thierry Vicente</h1>
        <h3>Web Development</h3>
        <div className="links">
          <a className="button" href="mailto:ThierryVicente51800@gmail.com">
            Email
          </a>
          <a className="button" href="https://github.com/StalkerVince">
            GitHub
          </a>
          <a
            className="button"
            target="_blank"
            href="file.pdf"
            download="file.pdf"
          >
            CV
          </a>
        </div>
      </nav>

      <header></header>

      <main>
        <h3 className="catchphrase">
          Code et programme des machines industrielles, des jeux,<br></br> des
          sites Web et des idées depuis 2012.
        </h3>
        <section>
          <div>
            <div className="tech">
              <img className="logo" src="html-5.png"></img>
              <img className="logo" src="css-3.png"></img>
              <img className="logo" src="js.png"></img>
              <img className="logo" src="git.png"></img>
              <img className="logo" src="react js.png"></img>
              <img className="logo" src="express JS.png"></img>
              <img className="logo" src="mysql.png"></img>
            </div>
          </div>
        </section>

        <section className="mainProject">
          <div>
            <a href="https://dragoti.vercel.app/">
              <img className="logo" src="logo_tamagotchi_1.png"></img>
            </a>
            <h2>
              <a href="https://dragoti.vercel.app/">Dragoti</a>
            </h2>
            <p>Projet de Tamagotchi</p>
          </div>

          <div>
            <a href="https://postify-wheat.vercel.app/">
              <img className="logo" src="logo_postify.png"></img>
            </a>
            <h2>
              <a href="https://postify-wheat.vercel.app/">Postify</a>
            </h2>
            <p>Créateur de carte postale virtuelle</p>
          </div>

          <div>
            <a href="https://fate-grand-archive.vercel.app/">
              <img className="logo" src="logo_fga.png"></img>
            </a>
            <h2>
              <a href="https://fate-grand-archive.vercel.app/">
                Fate Grand/Archive
              </a>
            </h2>
            <p>[En Cours]</p>
            <p>Archive des données et statistiques des personnages de FGO</p>
          </div>

          <div>
            <a href="https://doot-halloween-shop.vercel.app/">
              <img className="logo" src="DOOT.jpeg"></img>
            </a>
            <h2>
              <a href="https://doot-halloween-shop.vercel.app/">
                DOOT Halloween Shop
              </a>
            </h2>
            <p>Challenge de création de site en une seule journée</p>
          </div>

          <div>
            <a href="https://store.steampowered.com/app/1848930/Days_Of_Despair/">
              <img className="logo" src="azdazd.png"></img>
            </a>
            <h2>
              <a href="https://store.steampowered.com/app/1848930/Days_Of_Despair/">
                Days Of Despair
              </a>
            </h2>
            <p>[En Cours]</p>
            <p>Mon premier vrai projet de programmation.</p>
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
