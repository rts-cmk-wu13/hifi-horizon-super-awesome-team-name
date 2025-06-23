import ChatFunction from "../components/chatFunction/ChatFunction";
import Hero from "../components/hero/Hero";
import Homeinfo from "../components/homeinfo/Homeinfo";
import Nyhed from "../components/nyhedsbrev/Nyhed";
import Popular from "../components/popular/Popular";

export default function Home() {
    return (
        <div className="home-container">
            <Hero />
            {/* <Popular /> */}
            <Homeinfo />
            <Nyhed />
            <ChatFunction />
        </div>
    )
}