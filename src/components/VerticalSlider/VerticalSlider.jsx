import { useState, useRef } from 'react';
import './VerticalSlider.css';

const VerticalSlider = ({ slides = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [direction, setDirection] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef(null);

    const navigate = (dir) => {
        if (isAnimating || slides.length <= 1) return;

        setIsAnimating(true);
        setDirection(dir);
        setPrevIndex(currentIndex);

        const nextIdx = dir === 'next'
            ? (currentIndex + 1) % slides.length
            : (currentIndex - 1 + slides.length) % slides.length;

        setCurrentIndex(nextIdx);

        setTimeout(() => {
            setIsAnimating(false);
            setPrevIndex(null);
            setDirection(null);
        }, 700);
    };

    const handleClick = (e) => {
        if (isAnimating) return;
        const rect = containerRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX > rect.width / 2) {
            navigate('next');
        } else {
            navigate('prev');
        }
    };

    const getSlideClass = (index) => {
        if (isAnimating) {
            if (index === currentIndex) {
                return direction === 'next' ? 'slide slide--entering-up' : 'slide slide--entering-down';
            }
            if (index === prevIndex) return 'slide slide--prev';
        } else {
            if (index === currentIndex) return 'slide slide--current';
        }
        return 'slide';
    };

    if (!slides.length) return null;

    return (
        <section className="slider" ref={containerRef} onClick={handleClick}>
            {slides.map((img, i) => (
                <div key={i} className={getSlideClass(i)}>
                    <div className="slide__container">
                        <div className="slide__bg" style={{ backgroundImage: `url(${img})` }} />
                    </div>
                </div>
            ))}

            <div className="slider__content">
                <h1 className="slider__title">BARCELONA</h1>
                <p className="slider__subtitle">Discover the magic of Catalonia</p>
            </div>

            <div className="slider__hint slider__hint--left">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M15 19l-7-7 7-7" />
                </svg>
            </div>
            <div className="slider__hint slider__hint--right">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M9 5l7 7-7 7" />
                </svg>
            </div>

            <div className="slider__dots">
                {slides.map((_, i) => (
                    <span key={i} className={`slider__dot ${i === currentIndex ? 'slider__dot--active' : ''}`} />
                ))}
            </div>
        </section>
    );
};

export default VerticalSlider;
