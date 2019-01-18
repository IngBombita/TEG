// Create HTTP & WebSocket servers
const colyseus = require('colyseus');

class ChatRoom extends colyseus.Room {
  onInit() {
    this.setState({
      currentText: '',
      messages: [],
    });
  }

  onJoin(client) {
    console.log(this.state);
    this.state.messages.push(`${client.sessionId} joined.`);
    console.log(client.sessionId + ' :   ' + 'Ha entrado a la buegada');
  }

  onMessage(client, data) {
    this.state.messages.push(data);
    console.log(this.state.messages);
    this.broadcast(this.state.messages);
  }
}

module.exports = ChatRoom;
