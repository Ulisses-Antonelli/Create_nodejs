

const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./model/post")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/consulta", function(req, res){
    post.findAll().then(function(post){
        res.render("consulta", {post})
        //console.log(post)
    }).catch(function(erro){
        console.log("Erro ao carregar dados do banco: " + erro)
    })
})

app.post("/cadastrar", function(req, res){
    post.create({

        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data: req.body.data,
        observacao: req.body.observacao

    }).then(function(){
        res.redirect("/")
        //console.log(req.body)
    }).catch(function(erro){
        res.send("Falha ao cadastrar os dados" + erro)
    })
})

app.get("/excluir/:id", function(req, res){
    post.destroy({
        where: {
          id: req.params.id
        },
        force: true
    }).then(function(){
        res.redirect("/consulta")
        //console.log(req.body)
    }).catch(function(erro){
        res.send("Falha ao excluir dados do sistema" + erro)
    })
});

app.get("/", function(req, res){
    res.render("primeira_pagina")
})

app.listen(8081, function(){
    console.log("O servidor está ativo")
})




