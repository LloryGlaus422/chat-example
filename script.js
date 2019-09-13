const socket = io('http//localhost:3000');
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

socket.on('chat-message',data => {
    console.log(data)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    socket.emit('sent-chat-message',message)
    messageInput.value = ''
})
  