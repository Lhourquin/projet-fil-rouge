const express = require('express');
const app = express();
// const port = process.env.PORT || port;
// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);
// app.get('*', (req, res) => {
//     res.sendFile(`index.html`, { root: www });
// });
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));

app.get('/names', (req,res)=> {
    res.send("Telmo");
})

app.listen(5000, ()=> {
    console.log("Server is running on port 5000");
})