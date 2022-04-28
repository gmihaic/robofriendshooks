import React, {Component} from 'react';

const Card = ({name, email, id}) => {    
    return (       
        <React.Fragment>
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt="robots" src={`https://robohash.org/${id}?200x200`} width="200" height="200" />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        </div>
        {/* can have multiple elems here */}
        </React.Fragment>
    );
}

export default Card;