import React, {useState} from "react";
import './HotelCard.scss';


const HotelCard = (props) => {
    const {hotel} = props;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='hotel-card'>
            <div className='hotel-card-up'>
                <div className='hotel-card-image'
                     style={{backgroundImage: `url(${require("../../assets/images/" + hotel.imageReference)})`}}
                >
                    <div className='hotel-card-expand' onClick={ () => setIsExpanded(!isExpanded) }>
                        <span>Read {isExpanded ? 'less' : 'more'} </span>
                        about this hotel
                        <i className={isExpanded ? 'icon-chevron-down' : 'icon-chevron-right'} />
                    </div>
                </div>
                <div className='hotel-card-infos'>
                    <p className='hotel-card-name'>{hotel.name}</p>
                    <p className='hotel-card-location'>{hotel.location}</p>
                    <div className='hotel-card-rating'>
                        {[...Array(hotel.rating).keys()].map(star => <i key={star} className='icon-star'/>)}
                    </div>
                    <div className='hotel-card-details'>
                        <p>
                            <span className='b'>
                                {hotel.options.adults}
                            </span>
                            <span>
                                {hotel.options.adults > 1 ? 'adults' : 'adult'}
                            </span>
                            {hotel.options.children > 0 && (
                                <>
                                <span>
                                ,
                                </span>
                                    <span className='b'>{hotel.options.children}</span>
                                    <span>{hotel.options.children > 1 ? 'children' : 'child'}</span>
                                </>)}
                            {hotel.options.infants > 0 && (<>
                                <span>&</span>
                                <span className='b'>{hotel.options.infants}</span>
                                <span>{hotel.options.infants > 1 ? 'infants' : 'infant'}</span>
                            </>)}
                        </p>
                        <p>
                            <span className='b'> {hotel.firstDate}</span>
                            <span>for</span>
                            <span className='b'>
                                {hotel.periodLengthDays} {hotel.periodLengthDays > 1 ? 'days' : 'day'}
                            </span>
                        </p>
                        <p>
                            <span>departing from</span>
                            <span className='b'>{hotel.departureCity}</span>
                        </p>
                    </div>
                    <div className='btn'>
                        <p>Book now</p>
                        <p>{parseMoney(hotel.price)}</p>
                    </div>
                </div>
            </div>
            <div className={`hotel-card-down ${isExpanded ? 'expanded' : ''}`}>
                <p>
                    <span>Overview</span>
                    {hotel.description}
                </p>
            </div>
        </div>
    );
};

// utilities

const parseMoney = (money) => {
    const pennies = money % 100;
    const pounds = (money - pennies) / 100;
    return '£ ' + pounds.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '.' + pennies;
}

export default HotelCard;
