import React, { Component } from 'react';
import { connect } from '98k';
import { Link } from 'react-router-dom';
import Card from '../../../components/card';

export default class Project extends Component {
    render() {
        const { label, activities, more } = this.props;

        return (
            <div className="container">
                <div className='row mt-2'>
                    <h6 className='col-9' >{label}</h6>
                    <Link to={more}>More</Link>
                </div>
                <div>
                    {activities.map(activity => (
                        <Card activity={activity} />
                    ))}
                </div>
            </div>
        )
    }
}
