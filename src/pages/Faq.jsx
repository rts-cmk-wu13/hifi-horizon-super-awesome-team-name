import FaqCard from "../components/FaqCard/FaqCard"
import "../components/FaqCard/_FaqCard.scss";
import ChatFunction from "../components/chatFunction/ChatFunction";

export default function FaQ() {
    return (
        <>
            <section className="wrapper">
                <h1 className="margin-block">FAQ</h1>
                <FaqCard />
            </section>
            <ChatFunction />
        </>
    )
}