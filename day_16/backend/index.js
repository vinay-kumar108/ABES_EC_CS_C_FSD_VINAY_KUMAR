import express from "express";
import fs from 'fs';

const app = express();
const PORT = 8800;

app.use(express.json());

const readData = ()=> {
   const data=  fs.readFileSync("./data.json","utf-8");
    return JSON.parse(data);
}

app.get("/users", (req,res)=> {
    res.json(readData());
})

app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`);
});
