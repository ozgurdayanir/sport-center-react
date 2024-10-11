import { useState, useEffect } from 'react';
import BmiIndex from '../../assets/images/bmi-index.jpg';


const BmiCalculator = () => {
    
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiValue, setBmiValue] = useState('Your BMI');
    const [category, setCategory] = useState('-');
    const [position, setPosition] = useState(15);
    const [indicatorVisible, setIndicatorVisible] = useState(false);
    const [categoryClass, setCategoryClass] = useState('');

    useEffect(() => {
      calculateBMI();
    }, [height, weight]);

    const calculateBMI = () => {
      const heightInMeters = parseFloat(height) / 100;
      const weightValue = parseFloat(weight);
  
      if (!heightInMeters || !weightValue || weightValue <= 0 || heightInMeters <= 0 ) {
        // Girişler geçerli değilse varsayılan değerleri göster
        setBmiValue('Your BMI');
        setCategory('-');
        setPosition(15);
        setIndicatorVisible(false);
        setCategoryClass('');
        return;
      }
  
      const bmi = weightValue / (heightInMeters * heightInMeters);
      const bmiValueFormatted = bmi.toFixed(2);
  
      let bmiCategory = '';
      let bmiPosition = 0;
      let indicatorDisplay = true;
      let newCategoryClass = '';
  
      if (bmi < 18.5) {
        bmiCategory = 'Underweight';
        bmiPosition = 15;
        newCategoryClass = 'underweight';
      } else if (bmi >= 18.5 && bmi <= 24.99) {
        bmiCategory = 'Normal';
        bmiPosition = 31;
        newCategoryClass = 'normal';
      } else if (bmi >= 25 && bmi <= 29.99) {
        bmiCategory = 'Overweight';
        bmiPosition = 48;
        newCategoryClass = 'overweight';
      } else if (bmi >= 30 && bmi <= 34.99) {
        bmiCategory = 'Obese';
        bmiPosition = 64;
        newCategoryClass = 'obese';
      } else {
        bmiCategory = 'Extremely Obese';
        bmiPosition = 80;
        newCategoryClass = 'extremely-obese';
      }
  
      setBmiValue(bmiValueFormatted);
      setCategory(bmiCategory);
      setPosition(bmiPosition);
      setIndicatorVisible(indicatorDisplay);
      setCategoryClass(newCategoryClass);
      console.log('Height:', height, 'Weight:', weight);
    };

    return (
        <section id="bmi-calculator" className="section-white">
            <div className="container">
                <div className="bmi-container">
                    <div className="content">
                        <h2>BMI Calculator</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quam quae qui veritatis
                            ut enim placeat dolore. Odio officia, dicta error facere voluptatem vel? Nam tempora
                            possimus eum tenetur error?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a dignissimos, quia odio placeat,
                            maxime quo accusamus neque quisquam impedit dicta velit eum eveniet facilis eligendi
                            sapiente nesciunt ex corrupti.</p>
                        <div className="input-group">
                            <div className="input">
                                <input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} onInput={calculateBMI} />cm
                            </div>
                            <div>
                                <input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} onInput={calculateBMI} />kg
                            </div>
                        </div>
                    </div>
                    <div className="bmi-result" id="bmi-result">
                        <div>
                            <h3 id="bmi-value" className={categoryClass}>{bmiValue}</h3><span id="bmi-category" className={categoryClass}>{category}</span>
                        </div>
                        <div className="bmi-ranges">
                            <img src={BmiIndex} alt="bmi index" />
                            <div id="bmi-indicator" style={{left: `${position}%`, display: indicatorVisible ? 'block' : 'none'}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default BmiCalculator;