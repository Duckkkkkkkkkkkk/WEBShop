import React, { useState } from 'react';
import ShoppingCard from '../shopCard/ShopCard';
import card1 from './../../img/categories/product-card1.png';

import card01 from './../../img/categories/cat-3d/card01.png';
import card02 from './../../img/categories/cat-3d/card02.png';
import card03 from './../../img/categories/cat-3d/card03.png';
import card04 from './../../img/categories/cat-3d/card04.png';

import card11 from './../../img/categories/cat-anime/card01.png';
import card12 from './../../img/categories/cat-anime/card02.png';
import card13 from './../../img/categories/cat-anime/card03.png';
import card14 from './../../img/categories/cat-anime/card04.png';

import card21 from './../../img/categories/cat-cristall/card01.png';
import card22 from './../../img/categories/cat-cristall/card02.png';
import card23 from './../../img/categories/cat-cristall/card03.png';
import card24 from './../../img/categories/cat-cristall/card04.png';

import card31 from './../../img/categories/cat-effect/card01.png';
import card32 from './../../img/categories/cat-effect/card02.png';
import card33 from './../../img/categories/cat-effect/card03.png';
import card34 from './../../img/categories/cat-effect/card04.png';

import card41 from './../../img/categories/cat-kids/card01.png';
import card42 from './../../img/categories/cat-kids/card02.png';
import card43 from './../../img/categories/cat-kids/card03.png';
import card44 from './../../img/categories/cat-kids/card04.png';

import card51 from './../../img/categories/cat-winx/card01.png';
import card52 from './../../img/categories/cat-winx/card02.png';
import card53 from './../../img/categories/cat-winx/card03.png';
import card54 from './../../img/categories/cat-winx/card04.png';

import card61 from './../../img/categories/cat-wood/card01.png';
import card62 from './../../img/categories/cat-wood/card02.png';
import card63 from './../../img/categories/cat-wood/card03.png';
import card64 from './../../img/categories/cat-wood/card04.png';

import './products.css';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('priceLowToHigh');

    const products = [
        { title: "Таинственная Япония", category: "Деревянные пазлы", price: "2220 руб.", img1: card1, stars: "4.9" },
        { title: "Таинственная Япония", category: "Деревянные пазлы", price: "2200 руб.", img1: card1, stars: "4.7" },
        { title: "Таинственная Япония", category: "3D-пазлы", price: "1780 руб.", img1: card1, stars: "4.5" },
        { title: "Таинственная Япония", category: "Кристальные пазлы", price: "1000 руб.", img1: card1, stars: "4.9" },
        { title: "Таинственная Япония", category: "Аниме пазлы", price: "1590 руб.", img1: card1, stars: "5.0" },
        { title: "Таинственная Япония", category: "Пазлы WINX", price: "1600 руб.", img1: card1, stars: "4.8" },
        { title: "Таинственная Япония", category: "Пазля для детей", price: "2080 руб.", img1: card1, stars: "4.7" },
        { title: "Таинственная Япония", category: "Effect-пазлы", price: "1200 руб.", img1: card1, stars: "4.9" }
    ];

    const filterProductsByCategory = (product) => {
        if (selectedCategory === 'all') {
            return true;
        } else {
            return product.category === selectedCategory;
        }
    };

    const sortProducts = (products) => {
        return products.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\D/g, ''));
            const priceB = parseFloat(b.price.replace(/\D/g, ''));
    
            if (sortBy === 'priceLowToHigh') {
                return priceA - priceB;
            } else if (sortBy === 'priceHighToLow') {
                return priceB - priceA;
            } else if (sortBy === 'popularity') {
                return b.stars - a.stars;
            }
        });
    };

    const filteredAndSortedProducts = sortProducts(products.filter(filterProductsByCategory));

    return (
        <section className='products'>
            <div className="products__header">
                <h2 className='title-2'>Каталог товаров</h2>
            </div>
            <div className="container">
                <div className="product__container">
                <div className="products__sidebar">
                    <h2 className='menu__title'>Фильтры</h2>
                    <div className="menu__category">
                        <h3>Категории</h3>
                        <ul>
                            <li className={selectedCategory === 'all' ? 'active' : ''} onClick={() => setSelectedCategory('all')}>Все категории</li>
                            <li className={selectedCategory === 'Аниме пазлы' ? 'active' : ''} onClick={() => setSelectedCategory('Аниме пазлы')}>Аниме пазлы</li>
                            <li className={selectedCategory === 'Деревянные пазлы' ? 'active' : ''} onClick={() => setSelectedCategory('Деревянные пазлы')}>Деревянные пазлы</li>
                            <li className={selectedCategory === 'Кристальные пазлы' ? 'active' : ''} onClick={() => setSelectedCategory('Кристальные пазлы')}>Кристальные пазлы</li>
                            <li className={selectedCategory === 'Пазлы WINX' ? 'active' : ''} onClick={() => setSelectedCategory('Пазлы WINX')}>Пазлы WINX</li>
                            <li className={selectedCategory === 'Пазля для детей' ? 'active' : ''} onClick={() => setSelectedCategory('Пазля для детей')}>Пазля для детей</li>
                            <li className={selectedCategory === '3D-пазлы' ? 'active' : ''} onClick={() => setSelectedCategory('3D-пазлы')}>3D-пазлы</li>
                            <li className={selectedCategory === 'Effect-пазлы' ? 'active' : ''} onClick={() => setSelectedCategory('Effect-пазлы')}>Effect-пазлы</li>
                        </ul>
                    </div>
                    <div className="menu__sort">
                        <h3>Сортировка</h3>
                        <ul>
                            <li className={sortBy === 'priceLowToHigh' ? 'active' : ''} onClick={() => setSortBy('priceLowToHigh')}>Цена: по возрастанию</li>
                            <li className={sortBy === 'priceHighToLow' ? 'active' : ''} onClick={() => setSortBy('priceHighToLow')}>Цена: по убыванию</li>
                            <li className={sortBy === 'popularity' ? 'active' : ''} onClick={() => setSortBy('popularity')}>Популярность</li>
                        </ul>
                    </div>
                </div>
                <div className="products__content">
                    <div className="products__cards">
                        {filteredAndSortedProducts.map((product, index) => (
                            <ShoppingCard
                                key={index}
                                title={product.title}
                                category={product.category}
                                price={product.price}
                                img1={product.img1}
                                stars={product.stars}
                            />
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
