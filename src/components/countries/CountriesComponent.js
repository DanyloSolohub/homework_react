import React, {Component} from 'react';

class CountriesComponent extends Component {
    render() {
        let {countryitem,second} = this.props
        return (
            <div>
                <div className={second}>{countryitem.name}: {countryitem.population},{countryitem.age}</div>
            </div>
        );
    }
}

export default CountriesComponent;
