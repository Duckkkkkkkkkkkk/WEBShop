import React, { useState } from 'react';
import ShoppingCard from '../shopCard/ShopCard';

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
        { title: "\"Чарующая сова\" 101 деталей Size S", category: "Деревянные пазлы", price: "1400 руб.", img1: card61, stars: "4.9" },
        { title: "\"Таинственная Япония\" 200 деталей", category: "Деревянные пазлы", price: "1300 руб.", img1: card62, stars: "4.6" },
        { title: "\"Таинственный лес\" 192 деталей Size M", category: "Деревянные пазлы", price: "1990 руб.", img1: card63, stars: "4.3" },
        { title: "\"Жираф и небо\" 200 деталей", category: "Деревянные пазлы", price: "1850 руб.", img1: card64, stars: "4.7" },

        { title: "\"Winx! My fairy friend\" пазлы 80 деталей", category: "Пазлы WINX", price: "739 руб.", img1: card51, stars: "5.0" },
        { title: "\"Winx! My fairy friend\" пазлы 260 деталей", category: "Пазлы WINX", price: "990 руб.", img1: card52, stars: "4.9" },
        { title: "\"World Winx\" пазлы 560 деталей", category: "Пазлы WINX", price: "1250 руб.", img1: card53, stars: "4.9" },
        { title: "\"Winx! My fairy friend\"  jewels пазлы 104 деталей", category: "Пазлы WINX", price: "1020 руб.", img1: card54, stars: "4.8" },

        { title: "\"Five Roses\" crystall puzzle 41 деталей", category: "Кристальные пазлы", price: "780 руб.", img1: card21, stars: "4.5" },
        { title: "\"Dolphine\" crystall puzzle 41 деталей", category: "Кристальные пазлы", price: "590 руб.", img1: card22, stars: "4.9" },
        { title: "\"Музыкальный замок со светом\" crystall puzzle 105 деталей", category: "Кристальные пазлы", price: "1580 руб.", img1: card23, stars: "5.0" },
        { title: "\"Flying Horse\" crystall puzzle 42 деталей", category: "Кристальные пазлы", price: "739 руб.", img1: card24, stars: "4.3" },

        { title: "\"Большой Лебовски\" 3D-пазлы картонные", category: "3D-пазлы", price: "849 руб.", img1: card01, stars: "5.0" },
        { title: "\"Мастер Йода\" 3D-пазлы картонные", category: "3D-пазлы", price: "789 руб.", img1: card02, stars: "4.9" },
        { title: "\"Batman\" 3D-пазлы картонные", category: "3D-пазлы", price: "1019 руб.", img1: card03, stars: "4.4" },
        { title: "\"Статуя Давида\" 3D-пазлы картонные", category: "3D-пазлы", price: "995 руб.", img1: card04, stars: "4.8" },

        { title: "Anime puzzle \"One Piece\" Weter World 1000 деталей", category: "Аниме пазлы", price: "4790 руб.", img1: card11, stars: "5.0" },
        { title: "Anime puzzle \"Клинок, рассекающий демонов\" 1000 деталей", category: "Аниме пазлы", price: "2780 руб.", img1: card12, stars: "5.0" },
        { title: "Anime puzzle \"Наруто. Путь ниндзя\" 160 деталей", category: "Аниме пазлы", price: "1590 руб.", img1: card13, stars: "4.9" },
        { title: "Anime puzzle \"Dragon Ball Super Universe 7 Warriors\" 1000 деталей", category: "Аниме пазлы", price: "2590 руб.", img1: card14, stars: "5.0" },

        { title: "Напольный пазл-мозаика \"На ферме\" (малые)", category: "Пазля для детей", price: "650 руб.", img1: card41, stars: "4.7" },
        { title: "\"Зоопарк\" развивающий набор пазлов детский", category: "Пазля для детей", price: "990 руб.", img1: card42, stars: "4.7" },
        { title: "Пазл \"Animal World\" 26 деталей ", category: "Пазля для детей", price: "550 руб.", img1: card43, stars: "4.9" },
        { title: "Деревянная трехмерная головоломка \"Монтессори\"", category: "Пазля для детей", price: "1180 руб.", img1: card44, stars: "4.3" },

        { title: "\"Мир динозавров\" пазлы с эффектом трехмерного изображения", category: "Effect-пазлы", price: "1250 руб.", img1: card31, stars: "4.9" },
        { title: "\"Волшебство леса\" пазлы с эффектом трехмерного изображения", category: "Effect-пазлы", price: "1250 руб.", img1: card32, stars: "4.9" },
        { title: "\"Эйфелева башня\" 3D-пазлы светящиеся", category: "Effect-пазлы", price: "1780 руб.", img1: card33, stars: "4.9" },
        { title: "\"Биг Бен\" 3D-пазлы светящиеся", category: "Effect-пазлы", price: "1780 руб.", img1: card34, stars: "4.9" },
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
