import { createSignal } from "solid-js";

export default function SendMessage() {
    const [message, setMessage] = createSignal("");
    const [chat, setChat] = createSignal("");
    const [user, setUser] = createSignal("");
    const [sent, setSent] = createSignal("");
    const [error, setError] = createSignal("");
    const [success, setSuccess] = createSignal("");
    const [loading, setLoading] = createSignal(false);
    const [currChat, setCurrChat] = createSignal("");

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch('http://127.0.0.1:8080/api/chat/postMessage', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chatId: currChat,
                msgTxt: message,

            }),
        });
        console.log(res);
        console.log("asd");
        setMessage(await res.json());
        setLoading(false);
    };

    return (
        <div id="send-message">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Message" value={message()} onInput={e => setMessage(e.currentTarget.value)} />
                <button type="submit" disabled={loading()}>Send</button>
            </form>
        </div>
    );
}
