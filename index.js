import {reply} from "./reply.js"
 
class Chat extends HTMLElement{
    sendMessage(evt){
        evt.preventDefault();
        var msg = this.input.value;
        this.input.value = ''
        this.writeLine(msg)
     }
     addMessage(e){
        var msg = e.data ? JSON.parse(e.data) : e;
        thiswriteLine(`${msg.FROM}: ${msg.MESSAGE}`)
     }
     writeLine(text){
        this.messages.insertAdjacentHTML("beforeend",`<li class="message-item item-secondary">Miguel says: ${text}</li>`);
        this.messages.insertAdjacentHTML("beforeend",`<li class="message-item item-primary">Bot says: ${reply(text)}</li>`);
        this.messages.scrollTop = this.messages.scrollHeight;
     }
    connectedCallback(){
        this.innerHTML = `
        <style>
ul { list-style: none; } 

h1 {
  text-transform: uppercase;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  color: #3c3c3e;
}

/* chatbox */
.chat {
  max-width: 400px;
  min-height: 400px;
  background-color: #fff; 
  padding-right: 15px;
  padding-left: 15px;button
  border-radius: 1rem;
}

/* messages */
.messages {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
}

.message-list {
  overflow-y: scroll;
  max-height: 500px;
}

.message-item {
  padding: 20px;
  border-radius: 0.75rem;
  margin: 20px 0;
}

.message-item:last-child {
  margin-bottom: 0;
}

.item-primary {
  background-color: #f6f7f8;
  color: #3c3c3e;
}

.item-secondary {
  background-color: #5ccad7;
  color: #fff;
}

/* messages input */
.message-input {
  display: flex;
  padding: 20px 0;
}

.message-input input {
  width: 100%;
  padding: 10px;
  border-radius: 2rem;
  border: 1px solid #a5a5a5;
}

.message-input button {
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}        
        </style>
          <div class="chat">
    <div class="messages">
      <ul class="message-list">
        
        <li class="message-item item-primary">
          Bot says: oi, tudo bom?
        </li>
      </ul>
      <form class="message-input">
        <input type="text" placeholder="Type your message..." />
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
  </div>
        `;
        this.input = this.querySelector("input");
        this.messages = this.querySelector(".message-list");
        this.querySelector("form").addEventListener('submit', this.sendMessage.bind(this));
    }
}

customElements.define("x-chat", Chat);