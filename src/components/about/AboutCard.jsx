import "./_AboutCard.scss";

export default function AboutCard({ header, subheader, text, img, alt }) {
    return(
        <article>
            <img src={img} alt={alt} />
            <h2>{header}</h2>
            <h3>{subheader}</h3>
            {Array.isArray(text) ? 
                text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                )) : 
                <p>{text}</p>
            }
        </article>
    )
}