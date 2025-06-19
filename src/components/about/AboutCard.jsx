import "./_AboutCard.scss";

export default function AboutCard({ header, subheader, text, img, alt }) {
    return (
        <div className="about__card">
            <img src={img} alt={alt} />
            <section>
                <h2>{header}</h2>
                <h3>{subheader}</h3>
                {Array.isArray(text) ?
                    text.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    )) :
                    <p>{text}</p>
                }
            </section>
        </div>
    )
}