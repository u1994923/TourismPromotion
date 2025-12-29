import { useState } from 'react';
import './Cart.css';
import cartIcon from '../../assets/pictures/shopping_cart.png';

function Cart({ items, onRemove, onUpdateQuantity }) {
    const [isOpen, setIsOpen] = useState(false);

    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total = total + (items[i].price * items[i].quantity);
    }

    let totalTickets = 0;
    for (let i = 0; i < items.length; i++) {
        totalTickets = totalTickets + items[i].quantity;
    }

    if (items.length === 0) {
        return null;
    }

    function toggleCart() {
        setIsOpen(!isOpen);
    }

    function closeCart() {
        setIsOpen(false);
    }

    return (
        <>
            <button className="cart__toggle" onClick={toggleCart}>
                <img src={cartIcon} alt="Cart" />
                <span className="cart__badge">{totalTickets}</span>
            </button>

            <div className={isOpen ? "cart cart--open" : "cart"}>
                <div className="cart__header">
                    <h3>Your Tickets</h3>
                    <button className="cart__close" onClick={closeCart}>×</button>
                </div>

                <div className="cart__items">
                    {items.map(function (item) {
                        return (
                            <div key={item.id} className="cart__item">
                                <div className="cart__item-info">
                                    <span className="cart__item-name">{item.name}</span>
                                    <span className="cart__item-price">€{item.price} each</span>
                                </div>
                                <div className="cart__item-controls">
                                    <div className="cart__quantity">
                                        <button onClick={function () { onUpdateQuantity(item.id, -1); }}>−</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={function () { onUpdateQuantity(item.id, 1); }}>+</button>
                                    </div>
                                    <button
                                        className="cart__item-remove"
                                        onClick={function () { onRemove(item.id); }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="cart__footer">
                    <span>Total:</span>
                    <span className="cart__total">€{total}</span>
                </div>
            </div>
        </>
    );
}

export default Cart;
