import { createSignal } from "solid-js";
import { currChat } from '../Global';
import { getMessages } from './FetchMessages';
import swal from 'sweetalert';

const [message, setMessage] = createSignal("");
const [chat, setChat] = createSignal("");
const [user, setUser] = createSignal("");
const [sent, setSent] = createSignal("");
const [error, setError] = createSignal("");
const [success, setSuccess] = createSignal("");
const [loading, setLoading] = createSignal(false);

/*
function sendIt(message: string) {
    setMessage(message);
    getMessages();
}
*/

export default function SendMessage() {


    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        setLoading(true);
        if(message() === "") {
            swal("Failed", "Message cannot be empty", "error");
            console.log("Message cannot be empty");
            setLoading(false);
        }
        else {
            
            const res = await fetch('http://127.0.0.1:8080/api/chat/postMessage', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Access-Control-Allow-Credentials': 'true',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chatId: currChat,
                    message: message(),

                }),
            });
            console.log(res);
            setMessage(await res.json());
            getMessages();
            setLoading(false);
        }
    };

    return (
        <div id="send-message">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Message" onInput={e => setMessage(e.currentTarget.value)} />
                <button type="submit" disabled={loading()}>Send</button>
            </form>
        </div>
    );
}
