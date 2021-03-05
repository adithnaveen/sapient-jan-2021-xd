import React, { useState } from 'react'

import {FaStar} from 'react-icons/fa'; 

const createArray =(length) => [...Array(length)]; 

function Star({selected=false, onSelect}) {
    return <FaStar color={selected?"red":"gray"} onClick={onSelect}  />
}

function StarRating ({totalStars =5}) {
    const [selectedStars, setSelectedStars] = useState(0); 

    return(
        <div>
           {
                createArray(totalStars).map((val, i) => (
                        <Star
                            key={i} 
                            selected={selectedStars>i} 
                            onSelect={() => setSelectedStars(i+1)}
                        />
                    )
                )
            }
            <p>{selectedStars } of {totalStars } </p>
        </div>
        ); 

}

export default function App () {
    return <StarRating totalStars={5} /> 
}
