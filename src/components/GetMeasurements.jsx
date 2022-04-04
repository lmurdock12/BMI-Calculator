import {useState} from 'react'

const GetMeasurements = ({ calculate }) => {

    const [feet,setFeet] = useState('1')
    const [inches, setInches] = useState('1')
    const [weight, setWeight] = useState('1')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!feet || !inches || !weight) {
            alert("Please fill out all fields")
            return
        }
        calculate(feet,inches,weight)

        console.log(weight)

    }

  return (
    <>
        <div>Please add body measurements</div>
        <form onSubmit={onSubmit}>
            
            <div>
                <label> Height: </label>
                <select id="feet" name="feet" value={feet} onChange={(e) => setFeet(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
                <label> feet </label>
                <select id="inches" name="inches" value={inches} onChange={(e) => setInches(e.target.value)}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
                <label> inches</label>
            </div>

            <div>
                <label> Weight: </label>
                <input type="text" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)}/>
            </div>

            <div>
                <input type="submit" value="Calculate BMI"/>
            </div>
        </form>      
    </>

  )
}

export default GetMeasurements