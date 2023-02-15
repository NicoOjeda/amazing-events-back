let events = [
    {
        "image":"https://muchosnegociosrentables.com/wp-content/uploads/2018/04/las-comidas-m%C3%A1s-vendidas-en-las-ferias-1.jpg",
        "name":"Collectivities Party",
        "date":new Date("2021-12-12"),
        "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
      },
      {
        "image":"https://www.lacademie.com/wp-content/uploads/2022/03/fantastic-korean-street-food.jpg",
        "name":"Korean style",
        "date":new Date("2021-08-12"),
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":10
      },
      {
        "image":"https://www.fortraveladvicelovers.com/images/posts/244e9895e6474f8888c235f22127eece-0.jpg",
        "name":"Jurassic Park",
        "date":new Date("2021-11-02"),
        "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category":"Museum",
        "place":"Field",
        "capacity":82000,
        "assistance":65892,
        "price":15
      },
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
        "image":"https://media.vandalsports.com/i/640x360/3-2021/202132122146_1.jpg",
        "name":"Comicon",
        "date":new Date("2021-02-12"),
        "description":"For comic lovers, all your favourite characters gathered in one place.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":120000,
        "assistance":110000,
        "price":54
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
        "image":"https://www.electronic-festivals.com/sites/default/files/tomorrowland_4.jpg",
        "name":"Electronic Fest",
        "date":new Date("2021-01-22"),
        "description":"The best national and international DJs gathered in one place.",
        "category":"Music Concert",
        "place":"Room A",
        "capacity":138000,
        "assistance":110300,
        "price":250
        },
      {
          "image":"https://runningmagazine.ca/wp-content/uploads/2019/03/SL10K_TO_3k-ALCORN-1024x682.jpg",
          "name":"10K for life",
          "date":new Date("2021-03-01"),
          "description":"Come and exercise, improve your health and lifestyle.",
          "category":"Race",
          "place":"Campo de Futból",
          "capacity":30000,
          "assistance":25698,
          "price":3
      },
      {
        "image":"https://calendario.soymaratonista.com/wp-content/uploads/2016/12/New-york-marathon.png",
        "name":"15K NY",
        "date":new Date("2021-03-01"),
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "assistance":2569800,
        "price":3
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
        "image":"https://st.hzcdn.com/simgs/e5c1fbab09400a49_4-3279/home-design.jpg",
        "name":"Just for your kitchen",
        "date":new Date("2021-11-09"),
        "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category":"Book Exchange",
        "place":"Room D6",
        "capacity":130000,
        "assistance":90000,
        "price":100
       },
       {
        "image":"https://images.pagina12.com.ar/styles/focal_3_2_470x313/public/2022-03/378741-bat.jpeg?itok=BgHkb_P2",
        "name":"Batman",
        "date":new Date("2021-3-11"),
        "description":"Come see Batman fight crime in Gotham City.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":11000,
        "assistance":9300,
        "price":225
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
const Event = require('../Event')

events.forEach(elemento=>{
    Event.create({
        image: elemento.image,
        name: elemento.name,
        date: elemento.date,
        description: elemento.description,
        category: elemento.category,
        place: elemento.place,
        capacity: elemento.capacity,
        assistance: elemento.assistance,
        price: elemento.price
    })
})