import { Header, Categories, Carousel } from ".";
import state from "../data/state.json";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Categories
          categoryList={state.categoryList}
        />
        <div className="content">
          <Carousel />
        </div>
      </main>
    </div>
  );
}

export default App;
