import { useEffect, useRef } from 'react';
import './WhyVisit.css';

const reasons = [
    {
        icon: '🏛️',
        title: 'Rich History',
        description: 'Over 2,000 years of fascinating history from Roman times to modernist architecture.'
    },
    {
        icon: '🎨',
        title: 'Art & Culture',
        description: 'Home to Gaudí, Picasso, and countless museums showcasing world-class art.'
    },
    {
        icon: '🍷',
        title: 'Gastronomy',
        description: 'Savor tapas, paella, and Mediterranean cuisine in vibrant local markets.'
    },
    {
        icon: '🏖️',
        title: 'Beach Life',
        description: 'Enjoy sunny Mediterranean beaches right in the heart of the city.'
    }
];

const WhyVisit = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('why__item--visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="why" id="why" ref={sectionRef}>
            <h2 className="why__heading">Why Visit Barcelona</h2>
            <p className="why__intro">A city that captivates every traveler</p>

            <div className="why__grid">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemsRef.current[index] = el)}
                        className="why__item"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                        <span className="why__icon">{reason.icon}</span>
                        <h3 className="why__title">{reason.title}</h3>
                        <p className="why__description">{reason.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyVisit;
