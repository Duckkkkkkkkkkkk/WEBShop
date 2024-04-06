import './promoaction.css'

const Promoaction = () => {
    return (
    <section className="promo">
        <div className="comtainer">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">
                        <span className='highlight'>
                            <span>Учись</span>
                        </span>
                        <span className='highlight highlight--purple'>
                            <span>новому,</span>
                        </span>
                        <span className='highlight'>
                            <span>играя</span>
                        </span>
                        <span className='highlight highlight--purple'>
                            <span>весело!</span>
                        </span>
                    </div>
                    <div className="promo__desc">
                        Открой для себя мир творчества с помощью пазлов!                    
                    </div>
                    <div className="promo__btn-wrapper">
                        <a href='#!' className='promo__btn'>
                            В каталог
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}
 
export default Promoaction;