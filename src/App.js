import './App.css';
import GetMeasurements from './components/GetMeasurements';
import {useState} from 'react'

function App() {
  const [showResult, setShowResult] = useState(false)
  const [BMI,setBMI] = useState('')
  const [category,setCategory] = useState('')

  const calculateBMI = (feet,inches,weight) => {

    const tot_inches = parseFloat(feet)*12+parseFloat(inches)
    const meters = tot_inches*.025
    const meters_squared = meters**2

    const weight_KG = weight * .45
    
    const BMI = Math.round((weight_KG / meters_squared)*10) / 10

    categorizeBMI(BMI)
    setBMI(BMI)
    setShowResult(true)
  }

  const categorizeBMI = (BMI) => {
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
      <GetMeasurements calculate={calculateBMI} />

      { showResult && <>
        <p>Your BMI calcultion is {BMI} </p>
        <p> Your bodyweight category is {category} </p>
      </>}
    </div>
  );

}

export default App;
