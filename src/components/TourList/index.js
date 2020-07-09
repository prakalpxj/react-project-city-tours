import React, { Component } from 'react'
import Tour from '../Tour'
import './tourlist.scss'
import { tourData } from '../../tourData';


export default class TourList extends Component {
    state = {
        tours: tourData
    };

    removeTour = id => {
        const { tours } = this.state;
        const sortedCities = tours.filter(city => city.id !== id)
        this.setState({
            tours: sortedCities
        })
    };

    render() {
        const { tours } = this.state;

        return (
            <section className="tourlist" >
                {
                    tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>))
                }
            </section>
        );
    }
}
