import { useLoaderData } from "react-router";
import "./_AboutCard.scss";

export default function AboutCard({ alt }) {
    const aboutContent = useLoaderData();

    return (
        <div className="about__card">
            {aboutContent.map(about => (
                <>
                    <img src={about.image} alt={alt} />
                    <section>
                        <h2>{about.title}</h2>
                        <h3>{about.catchfrase}</h3>
                        {Array.isArray(about.text) ?
                            about.text.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            )) :
                            <p>{about.text}</p>
                        }
                    </section>
                </>
            ))}
        </div>
    )
}