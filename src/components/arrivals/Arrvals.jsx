import Card from '../card/Card';
import './arrivals.css'

import cat01img from './../../img/categories/cat-01.png'
import cat02img from './../../img/categories/cat-02.png'
import cat03img from './../../img/categories/cat-03.png'

const Arrvals = () => {
    return (<section className='arrivals'>
        <div className="container">
            <div className="arrivals__header">
                <h2 className='title-2'>ПОПУЛЯРНЫЕ КАТЕГОРИИ</h2>
            </div>
            <div className="arrivals__cards">
                <Card title="3D-пазлы" img={cat01img} />
                <Card title="Пазлы" img={cat02img} />
                <Card title="Effect-пазлы" img={cat03img} />
            </div>
        </div>
    </section>);
}
 
export default Arrvals;