const express = require ("express");

const cors = require ("cors");

const server = express ();
server.use(cors());

const port = 5000;
server.listen (port, ()=>{
    console.log(`el servidor se ejecuta con ${port}`);
});

// endpoints

server.get("/api/libros",(req,resp)=>{
    const libros = [
        {name:''},{autor:''},{paginas:''}];
        resp.json(libros);
});

