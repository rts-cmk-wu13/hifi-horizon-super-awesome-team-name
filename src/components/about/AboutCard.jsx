import { useLoaderData } from "react-router";
import "./_AboutCard.scss";

export default function AboutCard() {
    const abouts = useLoaderData();

    return (
        <>
            {abouts.map(about => (
                <div key={about.id} className="about__card">
                    <img src={about.image} alt="" />
                    <section>
                        <h2>{about.title}</h2>
                        <h3>{about.catchfrase}</h3>
                        {Array.isArray(about.text?.paragraphs) ?
                            about.text.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            )) :
                            <p>{about.text?.paragraphs}</p>
                        }
                    </section>
                </div>
            ))}
        </>
    )
}