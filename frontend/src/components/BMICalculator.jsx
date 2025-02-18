import React, { useState } from 'react'
import { toast } from 'react-toastify'

const BMICalculator = () => {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [gender, setGender] = useState("")
  const [bmi, setBmi] = useState("")

  const calculateBMI = (e)=>{
    e.preventDefault()
    if(!height || !weight || !gender){
      toast.warning("please enter valid height weight and gender.")
      return
    }

    const heightInMeters = height/100
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2)
    setBmi(bmiValue)


    if(bmiValue <18.5){
      toast.warning("You are underweight. Consider seeking advide from a heathcare provider.")
    }
    else if(bmiValue >=18.5 && bmiValue <24.9){
      toast.success("You have normal weight. keep maintainig a healthy lifestyle.")
    }else if(bmiValue>=25 && bmiValue <28.9){
      toast.warning("You are overweight. Consider seeking advide from a heathcare provider.")
    }else{
      toast.error("You are obese range. Consider seeking advide from a heathcare specialist...")
    }
  }

  return (
    <section className='bmi' id='bmi'>
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}> 
           <div>
            <label>Height (cm)</label>
            <input type="number" value={height} onChange={(e)=> setHeight(e.target.value)} required/>
           </div>
           <div>
            <label>Weight (kg)</label>
            <input type="number" value={weight} onChange={(e)=> setWeight(e.target.value)} required/>
           </div>
           <div>
            <label>Gender</label>
            <select value={gender} onChange={(e)=> setGender(e.target.value)}>
              <option value="">select Gender</option>
              <option value="Male">Male</option>
              <option value="Femail">Femail</option>
            </select>
           </div>
          <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
        <img src="/bmi.jpg" alt="BMI" />
        </div>
      </div>
    </section>
  )
}

export default BMICalculator