

let currChat = "bruh";

function setCurrChat(chatId: string){
    currChat = chatId;
    console.log("Current chat uuid is: " + currChat);
}

export {currChat, setCurrChat};
