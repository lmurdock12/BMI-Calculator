import './App.css';
import GetMeasurements from './components/GetMeasurements';
import {useState} from 'react'
import calculateBMI from './utilities';


function App() {
  const [showResult, setShowResult] = useState(false)
  const [BMI,setBMI] = useState('')
  const [category,setCategory] = useState('')

  const generateBMI = (feet,inches,weight) => {
    const result = calculateBMI(feet,inches,weight)
    setBMI(result)
    setShowResult(true)
    if (BMI < 18.5) {
      setCategory("underweight")
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      setCategory("normal weight")
    } else if (BMI >= 25 && BMI <= 29.9) {
      setCategory("overweight")
    } else {
      setCategory("obese")
    }
  }

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <GetMeasurements calculate={generateBMI} />

      { showResult && <>
        <p>Your BMI calcultion is {BMI} </p>
        <p> Your bodyweight category is {category} </p>
      </>}
    </div>
  );

}

export default App;
