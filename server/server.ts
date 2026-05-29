import app from './app';
import { createServer } from 'http';

const PORT = process.env.PORT || 5000;

const server = createServer(app);

// Example Socket.io initialization can go here later
// import { initSocket } from './socket';
// initSocket(server);

server.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
