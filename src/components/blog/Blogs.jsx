import React from 'react';
import { useTranslation } from 'react-i18next';
import './Blogs.scss';
import BlogImgMain from './img/blog-main-img.png';

const Blogs = () => {
    const { t } = useTranslation();

    return (
        <div className='container'>
            <div className="blog__container">
                <img className='blog__img' src={BlogImgMain} alt="main" />
            </div>
            <div className="blog__content">
                <h1 className='blogs__title'>{t('BlogDetailsH1')}</h1>
                <p className='blogs__subtitle'>{t('BlogSubtitle')}</p>
            </div>
            <div className="blog__content">
                <h2 className='blogs__title2'>{t('BlogDetailsH2')}</h2>
                <p className='blogs__subtitle'>{t('BlogSubtitle')}</p>
            </div>
            <div className="blog__content">
                <h3 className='blogs__title3'>{t('BlogDetailsH3')}</h3>
                <p className='blogs__subtitle'>{t('BlogSubtitle')}</p>
            </div>
        </div>
    );
};

export default Blogs;
