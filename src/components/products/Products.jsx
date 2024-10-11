import Product1 from '../../assets/images/purchase1.jpg'
import Product2 from '../../assets/images/purchase2.jpg'
import Product3 from '../../assets/images/purchase3.jpg'
import Product4 from '../../assets/images/purchase4.jpg'

const Products = () => {
    return (
        <section id="products" className="section-white">
            <div className="container">
                <div className="section-title">
                    <h2>PURCHASE FROM US</h2>
                    <hr />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis rem quibusdam autem,
                            reprehenderit iusto voluptate <br /> neque repudiandae ad praesentium.</p>
                </div>
                <div className="products">
                    <div className="product-card">
                        <img src={Product1} alt="" />
                            <h3>Kettlebell / 5kg</h3>
                            <p><span>89,99$</span> / 59,99</p>
                            <div className="add-btn">
                                <a><i className="bi bi-cart-fill"></i> <span>Add To Cart</span></a>
                            </div>
                    </div>
                    <div className="product-card">
                        <img src={Product2} alt="" />
                            <h3>Kettlebell / 5kg</h3>
                            <p><span>89,99$</span> / 59,99</p>
                            <div className="add-btn">
                                <a><i className="bi bi-cart-fill"></i> <span>Add To Cart</span></a>
                            </div>
                    </div>
                    <div className="product-card">
                        <img src={Product3} alt="" />
                            <h3>Kettlebell / 5kg</h3>
                            <p><span>89,99$</span> / 59,99</p>
                            <div className="add-btn">
                                <a><i className="bi bi-cart-fill"></i> <span>Add To Cart</span></a>
                            </div>
                    </div>
                    <div className="product-card">
                        <img src={Product4} alt="" />
                            <h3>Kettlebell / 5kg</h3>
                            <p><span>89,99$</span> / 59,99</p>
                            <div className="add-btn">
                                <a><i className="bi bi-cart-fill"></i> <span>Add To Cart</span></a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Products;