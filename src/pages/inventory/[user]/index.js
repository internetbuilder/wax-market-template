import React from 'react';

import qs from 'qs';
import Inventory from "../../../components/inventory";

const InventoryPage = (props) => {
    return <text><br /><Inventory {...props} /></text>
};

InventoryPage.getInitialProps = async (ctx) => {
    const c = ctx.query.user;

    const paths = ctx.asPath.split('/');

    const values = qs.parse(paths[2].replace(c + '?', ''));

    values['user'] = c;

    return values;
};

export default InventoryPage;
