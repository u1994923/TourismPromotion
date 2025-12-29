import './PlacesGrid.css';
import introVideo from '../../assets/videos/mustVisitVideo.mp4';

function PlacesGrid({ places, onAddToCart, cart }) {

    function isInCart(id) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
                return true;
            }
        }
        return false;
    }

    return (
        <section className="places" id="places">
            <div className="places__intro">
                <video
                    className="places__video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={introVideo} type="video/mp4" />
                </video>
                <div className="places__overlay">
                    <h2 className="places__title">Must-Visit Places</h2>
                    <p className="places__subtitle">Select your tickets below</p>
                </div>
            </div>

            <div className="places__container">
                {places.map(function (place, index) {
                    let inCart = isInCart(place.id);
                    let className = "place";
                    if (index % 2 === 1) {
                        className = "place place--alt";
                    }

                    return (
                        <article key={place.id} className={className}>
                            <div className="place__image">
                                <img src={place.image} alt={place.name} />
                            </div>
                            <div className="place__content">
                                <span className="place__num">0{index + 1}</span>
                                <h3 className="place__name">{place.name}</h3>
                                <p className="place__desc">{place.description}</p>
                                <div className="place__buy">
                                    <span className="place__price">€{place.price}</span>
                                    <button
                                        className={inCart ? "place__btn place__btn--added" : "place__btn"}
                                        onClick={function () { onAddToCart(place); }}
                                    >
                                        {inCart ? "✓ Added" : "Add Ticket"}
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default PlacesGrid;
