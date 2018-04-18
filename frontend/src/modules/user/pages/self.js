import React, { Component } from 'react';
import { connect } from '98k';

import Header from '../../../components/header';
import Menu from '../../../components/menu';

class Self extends Component {
    state = {}


    render() {
        return (
            <div className='container-fluid'>
                <Header />
                <Menu />
                <img
                    src='/Activity/assets/p2.jpg'
                    alt='Image'
                />
            </div>
        );

    }
}
export default connect()(Self);