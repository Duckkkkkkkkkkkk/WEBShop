import ShoppingCard from '../shopCard/ShopCard';
import './products.css'

import card1 from './../../img/categories/product-card1.png'
import cat02img from './../../img/categories/cat-02.png'
import cat03img from './../../img/categories/cat-03.png'

const Products = () => {
    return (<section className='products'>
        <div className="container">
            <div className="products__header">
                <h2 className='title-2'>Каталог товаров</h2>
            </div>
            <div className="products__cards">
                <ShoppingCard title="Таинственная Япония" category="Деревянные пазлы" price="2220 руб." img1={card1} stars="4.9" />
                <ShoppingCard title="Таинственная Япония" category="Деревянные пазлы" price="2220 руб." img1={card1} stars="4.9" />
                <ShoppingCard title="Таинственная Япония" category="Деревянные пазлы" price="2220 руб." img1={card1} stars="4.9" />
                <ShoppingCard title="Таинственная Япония" category="Деревянные пазлы" price="2220 руб." img1={card1} stars="4.9" />
                <ShoppingCard title="Таинственная Япония" category="Деревянные пазлы" price="2220 руб." img1={card1} stars="4.9" />
                <ShoppingCard title="Таинственная Япония" category="Деревянные пазлы" price="2220 руб." img1={card1} stars="4.9" />
                <ShoppingCard title="Таинственная Япония" category="Деревянные пазлы" price="2220 руб." img1={card1} stars="4.9" />
                <ShoppingCard title="Таинственная Япония" category="Деревянные пазлы" price="2220 руб." img1={card1} stars="4.9" />
            </div>
        </div>
    </section>);
}
 
export default Products;