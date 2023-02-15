let events = [
      {
        "image":"https://imagenes.heraldo.es/files/image_654_v1/uploads/imagenes/2020/03/26/museo-del-louvre-en-paris.jpeg",
        "name":"Parisian Museum",
        "date":new Date("2022-11-02"),
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
       },
       {
          "image":"https://tokyofashion.com/wp-content/uploads/2011/11/Kaila-Harajuku-Fashion-Walk-Halloween-Party-2011-004.jpg",
          "name":"Halloween Night",
          "date":new Date("2022-02-12"),
          "description":"Come with your scariest costume and win incredible prizes.",
          "category":"Costume Party",
          "place":"Room C",
          "capacity":12000,
          "estimate":9000,
          "price":12
      },
      {
          "image":"https://blog.siriusxm.com/wp-content/uploads/2020/08/16by9-Blog-Metallica.jpg",
          "name":"Metallica in concert",
          "date":new Date("2022-01-22"),
          "description":"The only concert of the most emblematic band in the world.",
          "category":"Music Concert",
          "place":"Room A"
          ,"capacity":138000,
          "estimate":138000,
          "price":150
      },
      {
          "image":"https://www.hmjds.org/uploaded/personal/2849/Heilicher_Blog/2017_Book_Fair.jpg",
          "name":"School's book fair",
          "date":new Date("2022-10-15"),
          "description":"Bring your unused school book and take the one you need.",
          "category":"Book Exchange",
          "place":"Room D1",
          "capacity":150000,
          "estimate":123286,
          "price":1
      },
      {
          "image":"https://filmschoolrejects.com/wp-content/uploads/2017/04/10e93ZRtUvrAoW39UH4oYUg.jpeg",
          "name":"Avengers",
          "date":new Date("2022-10-15"),
          "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
          "category":"Cinema",
          "place":"Room D1",
          "capacity":9000,
          "estimate":9000,
          "price":250
      }
]

require('dotenv').config()
require('../../config/database')
const Estimate = require('../Estimate')

events.forEach(elemento=>{
    Estimate.create({
        image: elemento.image,
        name: elemento.name,
        date: elemento.date,
        description: elemento.description,
        category: elemento.category,
        place: elemento.place,
        capacity: elemento.capacity,
        estimate: elemento.estimate,
        price: elemento.price
    })
})