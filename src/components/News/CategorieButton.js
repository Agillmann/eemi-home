import React from 'react';

const CategorieButton = ({name}) => {
    return (
        <button className="col-5 p-5 m-3 btn whiteBg categorie-button">
            {name}
        </button>
    );
};

export default CategorieButton;