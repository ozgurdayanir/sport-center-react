const Hero = () => {
    return (
        <section id="hero" class="section-blue">
            <div className="container hero-content">
                <p className="badge">POWERFULL</p>
                <h1>Group <br className="line" /> Practice <br /> With Trainer</h1>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam itaque odio nulla incidunt perferendis, placeat eum aliquam? Nam ratione optio maxime quos, eveniet ipsam sunt tempora? Eaque, fuga. Harum cumque obcaecati veniam atque suscipit soluta assumenda eos facere voluptate exercitationem </p>
                <div className="btn-group">
                    <a href="#">Sign Up</a>
                    <a href="#">Details</a>
                </div>
            </div>
            <div className="container stats-div">
                <div className="stat">
                    <h4>325</h4>
                    <p>Course</p>
                </div>
                <div className="stat">
                    <h4>405</h4>
                    <p>Workout</p>
                </div>
                <div className="stat">
                    <h4>305</h4>
                    <p>Working Hour</p>
                </div>
                <div className="stat">
                    <h4>705</h4>
                    <p>Happy Client</p>
                </div>
            </div>
        </section>
    )
}
export default Hero;