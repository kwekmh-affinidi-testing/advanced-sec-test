import express, { Express, Request, Response } from 'express';
import { exec } from 'child_process';

const app: Express = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!')
})

app.get('/ping/:ip', (req: Request, res: Response) => {
    exec('ping -c 4 ' + req.params['ip'], (err, stdout, stderr) => {
        if (err) {
            res.send(stderr);
        } else {
            res.send(stdout);
        }
    })
})

app.get('/nslookup/:domain', (req: Request, res: Response) => {
    exec('nslookup ' + req.params['domain'], (err, stdout, stderr) => {
        if (err) {
            res.send(stderr);
        } else {
            res.send(stdout);
        }
    })
})

app.listen(port, () => {
    console.log(`[server] Server is running at http://localhost:${port}`)
})
