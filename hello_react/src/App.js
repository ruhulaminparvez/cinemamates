import './App.css';

const Person = (props) => {

        return (
            <>
                <h1>Name: {props.name}</h1>
                <h4>Designation: {props.designation}</h4>
                <h4>Age: {props.age}</h4>
            </>

    );
}

const App = () => {

  return (
    <div className="App">
      <Person
         name="Ruhul Amin Parvez"
         designation="Software Developer"
         age="22"

      />
        <Person
            name="Sakib Arnob"
            designation="Senior Intern"
            age="26"

        />
    </div>
  );
}

export default App;
