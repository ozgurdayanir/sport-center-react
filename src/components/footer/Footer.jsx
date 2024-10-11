import Logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
    <footer id="footer">
        <div className="container">
            <a href="#hero">
                <img src={Logo} alt="logo" />
            </a>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam laudantium natus adipisci cupiditate libero id, tenetur doloremque omnis perferendis ipsam molestias eos quod modi, voluptatum dignissimos! Non error beatae veritatis deserunt necessitatibus ducimus dolores.</p>
            <div className="footer-content">
                <div className="footer-items">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#classes">Classes</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-items">
                    <h4>Helpful Links</h4>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="">Supports</a></li>
                        <li><a href="">Terms & Condition</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer;