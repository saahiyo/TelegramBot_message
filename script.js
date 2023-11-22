var content = document.querySelector(".content");

function sendMessage() {
    const message = document.getElementById('message').value;
    // enter here your bot token
    const botToken = '  ';
    // enter here your chat id
    const chatId = '   ';

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent:', data);
        alert('Message sent successfully!');
        displayMessage('Message sent successfully.');
    })
    .catch(error => {
        console.error('Error sending message:', error);
        alert('Error sending message. Check the console for details.');
        displayMessage('Error sending message.');
    });
}

function displayMessage(message) {
    content.style.display = "block";
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    content.appendChild(messageElement);

    // Add a line break for spacing
    const lineBreak = document.createElement('hr');
    content.appendChild(lineBreak);
}