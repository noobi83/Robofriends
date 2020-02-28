import React from 'react';

const Searcbox = ({searchfield, searchChange}) => {
    return (
        <div className = 'pa2'>
        <input
            className= 'pa3 ba b--green bg-lightest-blue'
            type = 'search' 
            placeholder = 'find your robots' 
            onChange={searchChange}
            />
    </div>
    );
}

export default Searcbox;