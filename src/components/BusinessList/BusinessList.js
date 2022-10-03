import React from 'react';
import './BusinessList.css'
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        businesses = [<Business />, <Business />, <Business />, <Business />, <Business />, <Business />]
        return (
            <div className="BusinessList" business={businesses}>
            </div>
        )
    }
}
export default BusinessList;