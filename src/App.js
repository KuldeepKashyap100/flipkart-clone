import { Header, Categories } from "./Components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Categories
          categoryList={[
            {
              name: "Top Offers",
              imgUrl:
                "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
            },
            {
              name: "Grocery",
              imgUrl:
                "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
            },
            {
              name: "Mobiles",
              imgUrl:
                "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
            },
            {
              name: "Fashions",
              imgUrl:
                "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
            },
            {
              name: "Electronics",
              imgUrl:
                "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
            },
            {
              name: "Home",
              imgUrl:
                "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
            },
            {
              name: "Appliances",
              imgUrl:
                "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
            },
            {
              name: "Travel",
              imgUrl:
                "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
            },
            {
              name: "Beauty, Toys & More",
              imgUrl:
                "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
            },
          ]}
        ></Categories>
      </main>
    </div>
  );
}

export default App;
