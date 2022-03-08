import './App.css';

const Person = () => {
    const name = "Ruhul Amin Parvez";
    const desination = "Software Developer";
    const age = 342;

        return (
            <>
                <h1>Name: {name}</h1>
                <h4>Designation: {desination}</h4>
                <h4>Age: {age}</h4>
            </>

    );
}

const App = () => {

  return (
    <div className="App">
      <Person></Person>
        <Person></Person>
    </div>
  );
}

export default App;
