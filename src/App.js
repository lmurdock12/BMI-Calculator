import './App.css';
import GetMeasurements from './components/GetMeasurements';
import {useState} from 'react'
import calculateBMI from './utilities';


function App() {
  const [showResult, setShowResult] = useState(false)
  const [BMI,setBMI] = useState(0.0)
  const [category,setCategory] = useState('')

  const generateBMI = (feet,inches,weight) => {

    const result = calculateBMI(feet,inches,weight)

    setBMI(result)
    setShowResult(true)
    if (result < 18.5) {
      setCategory("underweight")
    } else if (result >= 18.5 && result <= 24.9) {
      setCategory("normal weight")
    } else if (result >= 25 && result <= 29.9) {
      setCategory("overweight")
    } else {
      setCategory("obese")
    }
  }

  return (
    <div className="App">
      <h1>BMI Calculator v.1.1</h1>
      <GetMeasurements calculate={generateBMI} />

      { showResult && <>
        <p className="BMI">Your BMI calcultion is {BMI} </p>
        <p className="Category"> Your bodyweight category is {category} </p>
      </>}
    </div>
  );

}

export default App;
