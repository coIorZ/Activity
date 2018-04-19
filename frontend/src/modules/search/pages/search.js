import React, { Component } from 'react';
import { connect } from '98k';

import Card from '../../../components/card';
import Menu from '../../../components/menu';
import Header from '../../../components/header';


class Search extends Component {
    componentDidMount() {
        const term = this.props.match.params.term;
        this.props.dispatch({
            type: 'search/searchActivities',
            payload: term,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.term !== nextProps.match.params.term) {
            this.props.dispatch({
                type: 'search/searchActivities',
                payload: nextProps.match.params.term,
            });
        }
    }

    render() {
        const { activities } = this.props;
        return (
            <div className='container-fluid'>
                <Header />
                <Menu />
                {activities ? (
                    <div>
                        {activities.map(activity => (
                            <Card activity={activity} />
                        ))}
                    </div>
                ) : (
                        <div>loading...</div>
                    )}
            </div>
        );
    }
}

export default connect(state => state.search)(Search);
