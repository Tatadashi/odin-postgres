import express from "express";
import { Router } from "express";
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const home = Router();
home.get('/', function (req, res) {
    console.log("usernames will be logged here - wip");
});
home.get('/new', function (req, res) {
    res.render('home');
});
home.post('/new', function (req, res) {
    console.log("username to be saved: ", req.body.username);
});
app.use('/', home);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`now listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map