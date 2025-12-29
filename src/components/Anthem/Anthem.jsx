import './Anthem.css';
import escudo from '../../assets/pictures/escudoBarca.png';
import himno from '../../assets/music/himno_barca.mp3';

const Anthem = () => {
    return (
        <section className="anthem" id="anthem">
            <img className="anthem__escudo" src={escudo} alt="FC Barcelona" />
            <h2 className="anthem__title">Barcelona Anthem</h2>
            <p className="anthem__desc">
                No visit to Barcelona is complete without experiencing the passion of FC Barcelona.
                Listen to the legendary anthem that echoes through Camp Nou, uniting millions of fans worldwide.
            </p>
            <audio className="anthem__audio" controls>
                <source src={himno} type="audio/mpeg" />
                Your browser does not support audio.
            </audio>
        </section>
    );
};

export default Anthem;
