import Card from '../card/Card';
import './arrivals.css'

import cat01img from './../../img/categories/cat-01.jpg'
import cat02img from './../../img/categories/cat-02.jpg'
import cat03img from './../../img/categories/cat-03.jpg'

const Arrvals = () => {
    return (<section className='arrivals'>
        <div className="container">
            <div className="arrivals__header">
                <h2 className='title-2'>NEW ARRIVALS</h2>
            </div>
            <div className="arrivals__cards">
                <Card title="Hoodies & Sweetshirt" img={cat01img} />
                <Card title="Coats & Parkas" img={cat02img} />
                <Card title="Tees & T-Shirt" img={cat03img} />
            </div>
        </div>
    </section>);
}
 
export default Arrvals;