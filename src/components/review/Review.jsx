import Client1 from '../../assets/images/client1.jpg'
import Client2 from '../../assets/images/client2.jpg'

const Review = () => {
    return (
<section id="review" className="section-blue">
            <div className="container">
                <div className="section-title">
                    <h2>REVIEW CLIENT</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis rem quibusdam autem,
                        reprehenderit iusto voluptate <br /> neque repudiandae ad praesentium.</p>
                </div>
                <div className="reviews">
                    <div className="review">
                        <div className="client-container">
                            <img src={Client1} alt="" />
                            <div className="client-details">
                                <p>Diet Expert</p>
                                <p>CFO</p>
                            </div>
                        </div>
                        <div className="comment">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, eos a velit, nulla
                                saepe, expedita provident quisquam neque fuga laboriosam facere ipsam! Quam quia dolores
                                veniam fuga, soluta ipsum magni.</p>
                            <div className="triangle-1"></div>
                            <div className="triangle-2"></div>
                        </div>
                    </div>
                    <div className="review">
                        <div className="client-container">
                            <img src={Client2} alt="" />
                            <div className="client-details">
                                <p>Cardio Trainer</p>
                                <p>CEO</p>
                            </div>
                        </div>
                        <div className="comment">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptatum aliquid
                                quidem quaerat asperiores architecto ratione. Magni cum praesentium fuga voluptatem eius
                                sunt quibusdam tenetur! Labore eveniet nobis illum.</p>
                            <div className="triangle-1"></div>
                            <div className="triangle-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Review;