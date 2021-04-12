const {Usuario, Post, Comentario, sequelize } = require ('./models');
const {Op} = require("sequelize");
const usuario = require('./models/usuario');

// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll()
// .then((result) => {
//     console.table(result.map(user => user.toJSON()))
// });

// Post.findByPk(1)
// .then((result) => {
//     console.table(result.toJSON());
// });

// Post.findOne({
//     where : {
//         texto : 'Como foi o fim de semana?'
//     }
// })
// .then((result) => {
//     console.table(result.toJSON());
// });


// Comentario.findAll()
// .then((result) => {
//     console.table(result.map(user => user.toJSON()))
// });

// Comentario.findByPk(1)
// .then((result) => {
//     console.table(result.toJSON());
// });

// Comentario.findOne({
//     where : {
//         texto : 'Oi gente é o !@#!$%! Meu nome agora é Zé Pequeno!'
//     }
// })
// .then((result) => {
//     console.table(result.toJSON());
// });


// Usuario.findAll({
//     where:{
//        nome:{[Op.like]: '%a%'}  
//     }
// })
// .then((result) => {
//     console.table(result.map(usuario => usuario.toJSON()))
// });


// Usuario.findAll({
//     where:{
//         nome:{[Op.notLike]: '%a%'}  
//     }
// })
// .then((result) => {
//     console.table(result.map(usuario => usuario.toJSON()))
// });



// Comentario.findAll({
//         order: [['id','ASC']],
//         Limit:2  
// })
// .then((result) => {
//     console.table(result.map(coment => coment.toJSON()))
// });

// p inserir um novo cadastro
// Usuario.create({
//     nome: 'leticia',
//     email: 'leticia@digitalhouse.com',
//     senha: 'dev123'

// }).then((resultado) => {
//     console.log(resultado.toJSON());
// })

// p trocar uma informação (ex: Senha)
// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id:5
//     }
// }).then((resultado) => {
//     console.log(resultado)
// })


// p excluir alguma informação
Usuario.destroy({
    where: {
        id: 3
    }
});
// Usuario.create({
//     nome: 'mylena',
//     email: 'mylena@digitalhouse.com',
//     senha: 'dev1245'
    
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// })

// Usuario.update({

//     email: 'sergio@digitalhouse.com',
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });



// Post.create({
//     texto:'Dormir é a oitava maravilha do mundo',
//     img:'tudodebom.png',
//     n_likes:100,
//     usuarios_id:8
// });
