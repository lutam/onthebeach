import React, {useCallback, useState} from 'react';
import './App.scss';
import Navigation from "../navigation/Navigation";
import HotelCard from "../hotel-card/HotelCard";
import hotels from '../../data/hotels.json';

function App() {
    const [orderBy, setOrderBy] = useState('price');

    const orderedHotels = useCallback(() => {
        switch (orderBy) {
            case 'rating':
                return hotels.sort((a, b) => a.rating < b.rating);
            case 'name':
                return hotels.sort((a, b) => a.name > b.name);
            default:
                return hotels.sort((a, b) => a.price > b.price);
        }
    }, [orderBy]);

    return (
        <div id="app">
            <main>
                <Navigation
                    setOrderBy={setOrderBy}
                    orderBy={orderBy}/>
                <div id='hotels'>
                    {orderedHotels().map((hotel, i) =>
                        <HotelCard
                            key={hotel.id}
                            hotel={hotel}/>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
