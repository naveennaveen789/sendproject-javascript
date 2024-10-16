const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");


let userMessage;

const craeteChatLi = (message,className) =>{
    //passed meessage and className
    const chatLi = document.createElement("li")
    chatLi.classList.add("chat", className);
    let chatcontent = className === "outgoing" ? `<p>${message}</p>` : `<span><i class="fa-solid fa-robot"></i> </span><p>${message}</p>`;
    chatLi.innerHTML = chatcontent;
    return chatLi;
}


const handleChate= () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;

      // append user message
    chatbox.appendChild(craeteChatLi(userMessage, "outgoing"));

    setTimeout( () => {
     /// waiting the response
    chatbox.appendChild(craeteChatLi("hello Iam Tesla", "incomming"));
    chatbox.appendChild(craeteChatLi("Have a nice day..what you think", "incomming"));
    chatbox.appendChild(craeteChatLi("Comming soon Next model", "incomming"));
    chatbox.appendChild(craeteChatLi("Thinging....", "incomming"));
    generateResponse();
    }, 600);
}


sendChatBtn.addEventListener("click",handleChate);