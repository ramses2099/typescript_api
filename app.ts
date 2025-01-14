import createApplication, { type Application, type Request, type Response } from 'express';

const app: Application = createApplication();

// Middleware

app.use((req: Request, res: Response, next: () => void) => {
    req.locale = 'en';
    next();
});


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});