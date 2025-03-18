const express = require(`express`);
const cors = require("cors");
const fileupload = require('express-fileupload');
const app = express();
const port = 8000;

app.use(cors());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        allowedHeaders: "Content-Type,Authorization",
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());
const basePath = `/portfolio`;
const baseController = require(`./Main/router/router`);

app.use(basePath, baseController);

app.get(`/testapideploy`, (req, res) => {
    console.log('whhhh');
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