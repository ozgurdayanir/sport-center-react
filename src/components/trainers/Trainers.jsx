import Trainer1 from '../../assets/images/trainer1.jpg'
import Trainer2 from '../../assets/images/trainer2.jpg'
import Trainer3 from '../../assets/images/trainer3.jpg'

const Trainers = () => {
    return (
<section id="trainers" className="section-blue">
            <div className="container">
                <div className="section-title">
                    <h2>OUR BEST TRAINERS</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis rem quibusdam autem,
                        reprehenderit iusto voluptate <br /> neque repudiandae ad praesentium.</p>
                </div>
                <div className="images">
                    <div className="img-container">
                        <img src={Trainer1} alt="" />
                        <div className="outer-frame">
                            <div className="side left"></div>
                            <div className="side right"></div>
                        </div>
                        <div className="img-content">
                            <h4>Jannie Bird</h4>
                            <p>Yoga Trainer</p>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={Trainer2} alt="" />
                        <div className="outer-frame">
                            <div className="side left"></div>
                            <div className="side right"></div>
                        </div>
                        <div className="img-content">
                            <h4>Jhon Doe</h4>
                            <p>Strength Trainer</p>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={Trainer3} alt="" />
                        <div className="outer-frame">
                            <div className="side left"></div>
                            <div className="side right"></div>
                        </div>
                        <div className="img-content">
                            <h4>Lena Doe</h4>
                            <p>Cardio Trainer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trainers;