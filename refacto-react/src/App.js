// My refacto
// For this exercise, all the code stays in this file, I don't take out the constants and the data.

const VEGAN = "vegan",
  DESSERT = "dessert",
  HEALTY = "healty";

const Header = () => <h1>Recettes de cuisine !</h1>;

const Recipes = () => {
  const RecipesList = [
    { name: "Flan aux carottes", type: VEGAN },
    { name: "Gateau aux poires", type: DESSERT },
    { name: "Poulet grillé", type: HEALTY },
  ];

  return (
    <div>
      <h2>Liste des recettes :</h2>
      <ul className="list">
        {RecipesList.map((recipes, index) => (
          <li key={index}>
            <span className="tags">{recipes.type}</span>&nbsp;
            {recipes.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ShoppingList = () => {
  const ShoppingListItems = [
    { name: "carottes", unit: 4 },
    { name: "salade", unit: 1 },
    { name: "chocolat", unit: "200gr" },
    { name: "poulet", unit: "1kg" },
    { name: "oeufs", unit: 12 },
  ];

  return (
    <div>
      <h2>Liste des course :</h2>
      <ul className="list">
        {ShoppingListItems.map((listItem, index) => {
          return (
            <li key={index}>
              <input type="checkbox" />
              <span className="unit">{listItem.unit}</span>&nbsp;
              {listItem.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer = () => (
  <footer>
    <p>Create by Refacto_React</p>
  </footer>
);

const App = () => {
  return (
    <div className="container">
      <Header />
      <hr />
      <Recipes />
      <hr />
      <ShoppingList />
      <hr />
      <Footer />
    </div>
  );
};

export default App;

// After refactoring
// const App = () => {
//   return (
//     <div className="container">
//       <header>
//         <h1>Recettes de cuisine !</h1>
//       </header>
//       <hr />
//       <div>
//         <h2>Liste des recettes :</h2>
//         <ul className="list">
//           <li>
//             <span className="tags">vegan</span> Flan aux carottes
//           </li>
//           <li>
//             <span className="tags">dessert</span> Gateau
//           </li>
//           <li>
//             <span className="tags">heathy</span> Poulet grillé
//           </li>
//         </ul>
//       </div>
//       <hr />
//       <div>
//         <h2>Liste des course :</h2>
//         <ul className="list">
//           <li>
//             <input type="checkbox" />
//             <span className="unit">4</span> carottes
//           </li>
//           <li>
//             <input type="checkbox" />
//             <span className="unit">1</span> fruits rouges
//           </li>
//           <li>
//             <input type="checkbox" />
//             <span className="unit">2</span> poireaux
//           </li>
//           <li>
//             <input type="checkbox" />
//             <span className="unit">1kg</span> poulet
//           </li>
//           <li>
//             <input type="checkbox" />
//             <span>
//               <span className="unit">6</span> œufs
//             </span>
//           </li>
//         </ul>
//       </div>
//       <hr />
//       <footer>
//         <p>Create by Refacto_React</p>
//       </footer>
//     </div>
//   );
// };

// export default App;
