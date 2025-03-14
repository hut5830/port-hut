const express = require(`express`);
const app = express();
const port = 8000;

app.get(`/testapideploy`, (req, res) => {
    res.send(
        {
            status: 200,
            message: 'hello world Hut',
            Name: [
                {
                    firstname: 'Tatchakorn',
                    lastname: 'Chomyong',
                    nickname: 'Hut',
                }
            ],
        }
    );
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});