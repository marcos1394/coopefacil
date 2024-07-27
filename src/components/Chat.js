import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Aquí se podría agregar la lógica para enviar el mensaje al servidor o al soporte
    }
  };

  return (
    <Box position="fixed" bottom={16} right={16} zIndex={1000}>
      {chatOpen ? (
        <Paper elevation={3} style={{ width: 300, maxHeight: 400, overflow: 'auto' }}>
          <Box p={2} bgcolor="#3f51b5" color="white">
            <Typography variant="h6">Chat de Soporte</Typography>
          </Box>
          <Box p={2}>
            {messages.map((message, index) => (
              <Box key={index} mb={2} display="flex" justifyContent={message.sender === 'user' ? 'flex-end' : 'flex-start'}>
                <Paper style={{ padding: '8px 16px', backgroundColor: message.sender === 'user' ? '#3f51b5' : '#f0f0f0', color: message.sender === 'user' ? 'white' : 'black' }}>
                  {message.text}
                </Paper>
              </Box>
            ))}
          </Box>
          <Box display="flex" p={2} borderTop="1px solid #f0f0f0">
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <IconButton color="primary" onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      ) : (
        <IconButton color="primary" onClick={() => setChatOpen(true)}>
          <ChatBubbleOutlineIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default Chat;
