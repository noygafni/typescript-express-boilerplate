import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import env from './config/env';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes
app.use('/api', routes);

app.listen(env.port, () => {
    console.log(`🚀 Server running on http://localhost:${env.port}`);
});

export default app;
