import ChatFunction from "../components/chatFunction/ChatFunction";
import AboutCard from "../components/about/AboutCard"
import "../style/_About.scss";

export default function About() {

    return (
        <>
            <section className="about">
                <h1 className="about__header">our history</h1>
                <div className="about__content">
                    <AboutCard />
                </div>
            </section>
            <ChatFunction />
        </>
    )
}
