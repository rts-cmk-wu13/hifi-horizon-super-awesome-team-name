import heroImage from '../../../design/heroImage.png';

export default function Hero() {

    return (
        <section className="hero">
            <div className="hero-content">
                <img src={heroImage} alt="Hero" />
            </div>
        </section>
    );
}