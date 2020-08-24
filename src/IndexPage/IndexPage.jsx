import React from 'react';
import withRoot from '../css/modules/withRoot';
import ProductCategories from '../css/modules/views/ProductCategories';
import ProductValues from '../css/modules/views/ProductValues';
import ProductHowItWorks from '../css/modules/views/ProductHowItWorks';
import AppAppBar from '../css/modules/views/AppAppBar';
import SearchContainer from './SearchContainer';

function IndexPage() {
  return (
    <React.Fragment>
      <AppAppBar />
      <SearchContainer />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
    </React.Fragment>
  );
}

export default withRoot(IndexPage);