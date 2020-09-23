import React, {useState} from 'react';
import './Navigation.scss';

const Navigation = (props) => {

    const {orderBy, setOrderBy} = props;
    const [sortingCriterion, setSortingCriterion] = useState(orderBy);

    const changeSortingCriterion = (newSortingCriterion) => {
       setSortingCriterion(newSortingCriterion);
       setOrderBy(newSortingCriterion);
    };

    return (
        <div id="navigation">
            <div className={`navigation-tab ${sortingCriterion === 'name' ? "active" : ""}`}
                 onClick={() => changeSortingCriterion('name')}>
                <p>sort <span className='b'>alphabetically</span></p>
                <i className='icon-sort-alpha-asc'/>
            </div>
            <div className={`navigation-tab ${sortingCriterion === 'price' ? "active" : ""}`}
                 onClick={() => changeSortingCriterion('price')}>

                <p>sort by <span className='b'>price</span></p>
                <span className='icon-pounds'>£</span>
            </div>
            <div className={`navigation-tab ${sortingCriterion === 'rating' ? "active" : ""}`}
                 onClick={() => changeSortingCriterion('rating')}>
                <p>sort by <span className='b'>star rating</span></p>
                <i className='icon-star'/>
            </div>
        </div>
    );
}

export default Navigation;
