import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './HomePage.scss';
import twitter from './img/twitter.svg';
import linkedin from './img/linkedin.svg';
import medium from './img/medium.svg';
import mainImg from './img/home-img.png';
import cardImg1 from './img/card1.png';
import cardImg2 from './img/card2.png';

const cardData = [
    { id: 1, title: 'This way is wrong about UI Design.', subtitle: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.', date: 'NOV 23 2020', image: cardImg1 },
    { id: 2, title: 'This way is wrong about UI Design.', subtitle: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.', date: 'NOV 23 2020', image: cardImg2 },
    { id: 3, title: 'This way is wrong about UI Design.', subtitle: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.', date: 'NOV 23 2020', image: cardImg1 },
    { id: 4, title: 'This way is wrong about UI Design.', subtitle: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.', date: 'NOV 23 2020', image: cardImg2 },
    { id: 5, title: 'This way is wrong about UI Design.', subtitle: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.', date: 'NOV 23 2020', image: cardImg1 },
    { id: 6, title: 'This way is wrong about UI Design.', subtitle: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.', date: 'NOV 23 2020', image: cardImg2 }
];




const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className='container home__container'>
                <div className='home__img-container'>
                    <div className='main__content'>
                        <div className='main__container'>
                            <div className="home__text">
                                <h1 className='title__item title__color'>{t('BlogPosts')}</h1>
                                <h1 className='home__title'>{t('HomeTitle')}</h1>
                                <p className='home__subtitle'>
                                    {t('HomeSubtitle')}
                                </p>
                            </div>
                            <div className="home__buttons__links">
                                <a href="#" className='home__button__link'>
                                    <img src={twitter} alt="twitter" />
                                    {t('twitter')}
                                </a>
                                <a href="#" className='home__button__link'>
                                    <img src={linkedin} alt="linkedin" />
                                    {t('linkedin')}
                                </a>
                                <a href="#" className='home__button__link'>
                                    <img src={medium} alt="medium" />
                                    {t('medium')}
                                </a>
                            </div>
                        </div>
                        <img className='main__img' src={mainImg} alt="main img" />
                    </div>
                </div>
            </div>
            <section className='main__section'>
                <nav className=''>
                    <ul className='navItemList'>
                        <NavLink className='mainLink' to="/">{t('All')}</NavLink>
                        <NavLink className='mainLink' to="/ui-design">{t('UIdesign')}</NavLink>
                        <NavLink className='mainLink' to="/ux-design">{t('UXdesign')}</NavLink>
                        <NavLink className='mainLink' to="/product-design">{t('Product')}</NavLink>
                        <NavLink className='mainLink' to="/articles">{t('Articles')}</NavLink>
                        <NavLink className='mainLink' to="/tutorials"> {t('Tutorials')}</NavLink>
                        <NavLink className='mainLink' to="/news">{t('News')}</NavLink>
                    </ul>
                </nav>
            </section>
            <section className='cards__section'>
                <div className='cards__container'>
                    {cardData.map(card => (
                        <div className='card' key={card.id}>
                            <img src={card.image} alt={card.title} className='card__image' />
                            <p className='card__date'>{t('Date')}</p>
                            <h2 className='card__title'>{t('CardTitle')}</h2>
                            <p className='card__subtitle'> {t('CardSubtitle')}</p>
                            <a href="#" className='card__link'>{t('ReadMore')}</a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
