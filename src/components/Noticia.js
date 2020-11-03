import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {
    // extraer los datos
    const { thumbnail, age, name, description, friends, professions } = noticia;

    const imagen = (thumbnail) ?
        <div className="card-image">
            <img src={thumbnail} alt={name} />
            <span className="card-title">{friends[0]}</span>
        </div>
    : null;

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}

                <div className="card-content">
                    <h3>{name}</h3>
                    <h5>{age}</h5>
                    <p>{description}</p>
                    <p>{professions}</p>
                </div>

                <div className="card-action">
                    <a
                        href={thumbnail}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >See Image</a>
                </div>
            </div>
        </div>
     );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
 
export default Noticia;