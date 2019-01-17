// Create HTTP & WebSocket servers
const colyseus = require('colyseus');

class ChatRoom extends colyseus.Room {
  onInit() {
    this.setState({ messages: [] });
  }

  onJoin(client) {
    this.state.messages.push(`${client.sessionId} joined.`);
    console.log(client.sessionId + ' :   ' + 'Ha entrado a la buegada');
  }

  onMessage(client, data) {
    this.state.messages.push(data);
    console.log(this.state.messages);
  }
}

module.exports = ChatRoom;
