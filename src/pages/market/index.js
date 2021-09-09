import React from 'react';

import Market from "../../components/market";
import qs from 'qs';

const MarketPage = (props) => {
    return <text><br /><Market {...props} /></text>;
};

MarketPage.getInitialProps = async (ctx) => {
    const paths = ctx.asPath.split('/');

    return qs.parse(paths[1].replace('market?', ''));
};

export default MarketPage;
