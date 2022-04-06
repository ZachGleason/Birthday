import './App.css';
import Birthday from './components/Birthday';

const peopleArr = [
  {
    firstName:"Zach",
    lastName: "Gleason",
    age: 22,
    hairColor: "Black",
  },
  {
    firstName:"Kevin",
    lastName: "Net",
    age: 43,
    hairColor: "Brown",
  },
  {
    firstName:"Tom",
    lastName: "Zen",
    age: 62,
    hairColor: "Black",
  },
  {
    firstName:"Hailey",
    lastName: "Jenn",
    age: 12,
    hairColor: "Grey",
  },
];


function App() {
  return (
    <div className='app'>
      {peopleArr.map((personObj, index) => (
      <Birthday 
        key={index}
        firstName = {personObj.firstName}
        lastName = {personObj.lastName}
        age={personObj.age}
        hairColor={personObj.hairColor}
      />
      ))}
    </div>
  );
}

export default App;
