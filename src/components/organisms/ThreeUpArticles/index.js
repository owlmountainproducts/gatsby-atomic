import React from 'react';

import ArticleListing from '../../molecules/ArticleListing';

/**
 * ATOM: The `<ThreeUpArticles>` creates __.
 *
 */
const ThreeUpArticles = () => (
  <ul className="three-up-articles-ul">
    <li className="three-up-articles-li">
      <ArticleListing
        className="article_listing_vertical"
        slug="/"
        title="Bug Out vs. Get Home Bags"
        imageFiles="https://cdn1.backdoorsurvival.com/app/uploads/2018/04/11050003/Bug-Out-Vs.-Get-Home-Bags-wide.png"
        imageText="Bug Out vs. Get Home Bags"
        authorName="SurvivalWoman"
        lastUpdated="April 23, 2018"
        excerpt="Sometimes it is easy for people to assume that an emergency bag is an emergency bag. The truth is that it is very important to distinguish your purpose when designing a bag. Lets get started by comparing the major difference in a bug out versus a get home bag."
      />
    </li>
    <li className="three-up-articles-li">
      <ArticleListing
        className="article_listing_vertical"
        slug="/"
        title="Bug Out vs. Get Home Bags"
        imageFiles="https://cdn1.backdoorsurvival.com/app/uploads/2018/04/11050003/Bug-Out-Vs.-Get-Home-Bags-wide.png"
        imageText="Bug Out vs. Get Home Bags"
        authorName="SurvivalWoman"
        lastUpdated="April 23, 2018"
        excerpt="Sometimes it is easy for people to assume that an emergency bag is an emergency bag. The truth is that it is very important to distinguish your purpose when designing a bag. Lets get started by comparing the major difference in a bug out versus a get home bag."
      />
    </li>
    <li className="three-up-articles-li">
      <ArticleListing
        className="article_listing_vertical"
        slug="/"
        title="Bug Out vs. Get Home Bags"
        imageFiles="https://cdn1.backdoorsurvival.com/app/uploads/2018/04/11050003/Bug-Out-Vs.-Get-Home-Bags-wide.png"
        imageText="Bug Out vs. Get Home Bags"
        authorName="SurvivalWoman"
        lastUpdated="April 23, 2018"
        excerpt="Sometimes it is easy for people to assume that an emergency bag is an emergency bag. The truth is that it is very important to distinguish your purpose when designing a bag. Lets get started by comparing the major difference in a bug out versus a get home bag."
      />
    </li>
  </ul>
);

export default ThreeUpArticles;