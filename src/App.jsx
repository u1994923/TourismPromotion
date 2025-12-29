import { useState } from 'react';
import VerticalSlider from './components/VerticalSlider';
import Header from './components/Header';
import WhyVisit from './components/WhyVisit';
import PlacesGrid from './components/PlacesGrid';
import Anthem from './components/Anthem';
import Transport from './components/Transport';
import Cart from './components/Cart';
import './App.css';

// Slider Images
import img1 from './assets/pictures/logan-armstrong-hVhfqhDYciU-unsplash.jpg';
import img2 from './assets/pictures/enes-f-DvU93UhTs-unsplash.jpg';
import img3 from './assets/pictures/florian-wehde-WBGjg0DsO_g-unsplash.jpg';
import img4 from './assets/pictures/dorian-d1-aX5NLrKgRBc-unsplash.jpg';
import img5 from './assets/pictures/4637.jpg';
import img6 from './assets/pictures/7544.jpg';
import img7 from './assets/pictures/19512.jpg';

// Places Images
import sagradaFamilia from './assets/pictures/SagradaFamilia.jpg';
import parkGuell from './assets/pictures/parkGuell.jpg';
import casaBatllo from './assets/pictures/CasaBatlló.jpg';
import campNou from './assets/pictures/CampNouEstadio.jpg';

const slides = [img1, img2, img3, img4, img5, img6, img7];

const places = [
    {
        id: 1,
        name: 'Sagrada Familia',
        image: sagradaFamilia,
        description: 'Gaudí\'s unfinished masterpiece and Barcelona\'s most iconic landmark.',
        price: 26
    },
    {
        id: 2,
        name: 'Park Güell',
        image: parkGuell,
        description: 'A colorful mosaic wonderland overlooking the city.',
        price: 10
    },
    {
        id: 3,
        name: 'Casa Batlló',
        image: casaBatllo,
        description: 'A stunning modernist building with organic shapes and vibrant colors.',
        price: 35
    },
    {
        id: 4,
        name: 'Camp Nou',
        image: campNou,
        description: 'Home of FC Barcelona, Europe\'s largest football stadium.',
        price: 98
    }
];

function App() {
    const [cart, setCart] = useState([]);

    function addToCart(place) {
        let found = false;
        let newCart = [];

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === place.id) {
                newCart.push({
                    ...cart[i],
                    quantity: cart[i].quantity + 1
                });
                found = true;
            } else {
                newCart.push(cart[i]);
            }
        }
        if (!found) {
            newCart.push({
                ...place,
                quantity: 1
            });
        }

        setCart(newCart);
    }
    function removeFromCart(id) {
        let newCart = [];
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id !== id) {
                newCart.push(cart[i]);
            }
        }
        setCart(newCart);
    }
    function updateQuantity(id, change) {
        let newCart = [];
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
                let newQuantity = cart[i].quantity + change;
                if (newQuantity > 0) {
                    newCart.push({
                        ...cart[i],
                        quantity: newQuantity
                    });
                }
            } else {
                newCart.push(cart[i]);
            }
        }
        setCart(newCart);
    }
    let totalItems = 0;
    for (let i = 0; i < cart.length; i++) {
        totalItems = totalItems + cart[i].quantity;
    }

    return (
        <main className="app">
            <Header cartCount={totalItems} />
            <VerticalSlider slides={slides} />
            <WhyVisit />
            <PlacesGrid places={places} onAddToCart={addToCart} cart={cart} />
            <Anthem />
            <Transport />
            <Cart items={cart} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} />
        </main>
    );
}

export default App;
