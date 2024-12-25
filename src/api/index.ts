import 'dotenv/config';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();
const port = parseInt(process.env.PORT || '8080', 10);

// CORSの設定
app.use('/*', cors({
  origin: [process.env.FRONTEND_URL || 'http://localhost:3000'],
  credentials: true,
}));

app.get('/', (c) => c.text('Hello World'));

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
});
