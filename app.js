const sequelize = require('sequelize');
const config = require('./config/config');
const conexaoDB = new sequelize(config);

conexaoDB.query('SELECT * FROM pets', sequelize.QueryTypes.SELECT)
.then((data) => {
    console.log (data);
    conexaoDB.close();  //Serve para fechar a conexão do banco/ não deixar ele exposto após a consulta.

})

.catch((error) => {
    console.log(error);
});









// const minhaPromise = new promise ((resolve, reject) => {
//     console.log('entrei na promise');
//     resolve('Promise resolvida');

// });

// minhaPromise().then((data) => {
//     console.log(data)
// });



// const promiseComArgs = (argumento) => new promise ((resolve, reject) => {
//     if(argumento) > 1000 {
//         sentTimeout (() => )

//     }
// });



// //-------  THEN
// const promiseComArgs = (argumento) => new Promise((resolve, reject) => {
//     if(argumento > 1000){
//         setTimeout(() => {
//             resolve("O argumento é válido(then)")
//         }, argumento);
//     }else{
//     reject("argumento inválido")}
// }).then(function(data){
//     console.log(data)
// }).catch(function(error){
// console.log(error)
// })
//  promiseComArgs(4000)
// //--------------fim
// //----- função async
// const promiseComArgsfun = (argumento) => new Promise((resolve, reject) => {
//     if(argumento > 1000){
//         setTimeout(() => {
//             resolve("O argumento é válido (Função Async)")
//         }, argumento);
//     }else{
//     reject("argumento inválido")}
// })
// const comawait = async ()=>{
// console.log( await promiseComArgsfun(3000).catch(function(error){console.log(error) }))
// }
// comawait()
// //-----------------Fim



