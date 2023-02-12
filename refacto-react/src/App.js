const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Recettes de cuisine !</h1>
      </header>
      <hr />
      <div>
        <h2>Liste des recettes :</h2>
        <ul className="list">
          <li>
            <span className="tags">vegan</span> Flan aux carottes
          </li>
          <li>
            <span className="tags">dessert</span> Gateau
          </li>
          <li>
            <span className="tags">heathy</span> Poulet grillé
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <h2>Liste des course :</h2>
        <ul className="list">
          <li>
            <input type="checkbox" />
            <span className="unit">4</span> carottes
          </li>
          <li>
            <input type="checkbox" />
            <span className="unit">1</span> fruits rouges
          </li>
          <li>
            <input type="checkbox" />
            <span className="unit">2</span> poireaux
          </li>
          <li>
            <input type="checkbox" />
            <span className="unit">1kg</span> poulet
          </li>
          <li>
            <input type="checkbox" />
            <span>
              <span className="unit">6</span> œufs
            </span>
          </li>
        </ul>
      </div>
      <hr />
      <footer>
        <p>Create by Refacto_React</p>
      </footer>
    </div>
  );
};

export default App;
