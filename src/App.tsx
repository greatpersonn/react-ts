import Card from "./components/organism/Card";

const App = () => {
  return (
    <div className="App">
      <main>
        {
          Array.from({ length: 6 }).map((_, id) => (
            <Card key={id} name={'Soho Coat'} price={301.88} />
          ))
        }
      </main>
    </div>
  );
}

export default App;
