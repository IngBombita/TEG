// Create HTTP & WebSocket servers
const colyseus = require('colyseus');

class ChatRoom extends colyseus.Room {
  onInit() {
    this.setState({ messages: [] });
  }

  onJoin(client) {
    this.state.messages.push(`${client.sessionId} joined.`);
  }

  onMessage(client, data) {
    this.state.messages.push(data);
  }
}

module.exports = ChatRoom;
