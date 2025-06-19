import ChatFunction from "../components/chatFunction/ChatFunction";
import Hero from "../components/hero/Hero";
import Homeinfo from "../components/homeinfo/Homeinfo";
import Nyhed from "../components/nyhedsbrev/Nyhed";

export default function Home() {
    return (
        <>
            <Hero />
            <Homeinfo />
            <Nyhed />
            <ChatFunction />
        </>
    )
}