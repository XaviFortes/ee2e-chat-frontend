import { createSignal, onCleanup, createEffect, For } from 'solid-js';import ChatsService from './ChatsService';
import { currChat, setCurrChat } from '../Global';

export default function FetchChats() {
  const [chats, setChats] = createSignal<ChatsService.Chat[]>([]);

  createEffect(async () => {
    const res = await fetch('http://127.0.0.1:8080/api/chat/getChatRooms', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
    console.log("asd");
    setChats(await res.json());
    });
    return (
        <div id="chats" class="chats">
            chats:
            <For each={chats()}>
                {(item) => (
                    <div class="uid-div" onclick={e => setCurrChat(item.chat_id)} id={item.chat_id}>
                        <div class="each-chat">
                            <img class="profile-image" src={item.chat_pic} width="7.5%" alt="chat_pic" />
                            <p class="chat-name">{item.chat_name}</p>
                            <p class="chat-desc">{item.chat_desc}</p>
                        </div>
                    </div>
                )}
            </For>
        </div>
    );
}
