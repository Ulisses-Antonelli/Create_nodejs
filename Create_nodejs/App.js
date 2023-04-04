const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./model/post")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/cadastrar", function(req, res){
    post.create({

        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data: req.body.data,
        observacao: req.body.observacao

    }).then(function(){
        res.send("Dados enviados com sucesso!")
    }).catch(function(erro){
        res.send("Falha ao cadastrar os dados" + erro)
    })
})

app.get("/", function(req, res){
    res.render("primeira_pagina")
})

app.listen(8081, function(){
    console.log("O servidor está ativo")
})




