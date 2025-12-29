import './Transport.css';
import mapImage from '../../assets/pictures/map.png';

const Transport = () => {
    return (
        <section className="transport" id="transport">
            <h2 className="transport__title">How To Get There</h2>
            <div className="transport__map">
                <img src={mapImage} alt="Barcelona transport map" />
            </div>
        </section>
    );
};

export default Transport;
