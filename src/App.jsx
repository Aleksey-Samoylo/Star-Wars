import agent from "./api/agent";


function App() {
  agent.Swapi.films()
  return (
    // убрать color white
    <div className="App" style={{color: 'white'}} > 
      hello
    </div>
  );
}

export default App;
