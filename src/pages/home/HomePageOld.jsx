import React from 'react';
import Banner from './components/Banner';
import ProductSlider from './components/ProductSlider';
import WorldBanner from './components/WorldBanner';
import DXBanner from './components/DXBanner';
import PlatformBanner from './components/PlatformBanner';
import SecurityBanner from './components/SecurityBanner';
import { TopSellingProducts } from './components/TopSellingProducts';
import UserCount from './components/UserCount';
import { CustomerFeedback } from './components/CustomerFeedback';
import TrustedPartners from './components/TrustedPartners';
import Faq from './components/Faq';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import HeaderOld from '../../components/HeaderOld';
import FooterOld from '../../components/FooterOld';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* <Typography>{t('welcome')}</Typography> */}
      <HeaderOld />
      <Banner />
      <ProductSlider />
      <WorldBanner />
      <DXBanner />
      <PlatformBanner />
      <SecurityBanner />
      <TopSellingProducts />
      <UserCount />
      <CustomerFeedback />
      <TrustedPartners />
      <Faq />
      <FooterOld />
    </>
  );
};

export default HomePage;
