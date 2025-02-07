export function reply(message){
    let reply = `${message} to you too`;
    if(message.toLowerCase().includes("nice")){
        reply = "Yes ... I think that's nice too";
    }
    
    else if(message.toLowerCase().includes("bye")){
        reply = "Nice talking to you, have a great rest of your day. Goodbye!"
    }
    return reply;
}