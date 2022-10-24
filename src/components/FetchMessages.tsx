import { createSignal, onCleanup, createEffect, For } from 'solid-js';
import ChatsService from './ChatsService';
import MessagesService from './MessagesService';
import { currChat } from '../Global';


const [message, setMessage] = createSignal<MessagesService.Msg[]>([]);
let oCurrChat = "";
export async function getMessages() {
    const res = await fetch('http://127.0.0.1:8080/api/chat/getMessages', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chatId: currChat,
        }),
    });
    setMessage(await res.json());
    oCurrChat = currChat;
}

export default function FetchChats() {

  // auto update messages when a new chat is selected from the list
  
    setInterval(async () => {
        await getMessages();
    }, 10000);
    return (
        <div id="msgs">
            Messages:
            <For each={message()}>
                {(item) => (
                    <div class="uid-div">
                        <div class="each-message">
                            <p>{item.msg_txt}</p>
                            <p>{item.sent_datetime}</p>
                        </div>
                    </div>
                )}
            </For>
        </div>
    );


  createEffect(async () => {
    const res = await fetch('http://127.0.0.1:8080/api/chat/getMessages', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chatId: currChat,
        }),
    });
    console.log(res);
    console.log("asd");
    setMessage(await res.json());
    });
    return (
        <div id="chats">
            Messages:
            <For each={message()}>
                {(item) => (
                    <div class="uid-div">
                        <p>{item.msg_txt}</p>
                    </div>
                )}
            </For>
        </div>
    );
}
 