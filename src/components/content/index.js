import React from 'react';
import NavigateBar from '../navigateBar';
import SearchForm from '../searchForm';
import FindOutMore from '../findOutMore';
import Multicard from '../multicard';
import AdvantagesBlock from '../advantagesBlock';
import './content.css';

const Content = () => (
  <>
    <NavigateBar />
    <div className="content_form">
      <SearchForm />
      <FindOutMore />
    </div>
    <Multicard />
    <AdvantagesBlock />
  </>
  
);

export default Content;