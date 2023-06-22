import Express  from "express";
import cors from "cors";

const app = Express();

app.use(cors());


app.get("/api/hello/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.get("/kb",(req,res)=>{
    res.json({data:"God is Great"});
})
app.listen(8000, () => {
    console.log("Server running on port 8000");
})