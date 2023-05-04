const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = [
    {
        "id": 1,
        "picture":"https://i.ibb.co/r5F7mWP/Smiling-female-chef-with-white-hat-and-uniform-in-a-kitchen-e1611773135718.jpg",
        "name":"Julia Child",
        "experience": "9+years",
        "recipes": [
            {
                "ingredients":[
                    "Potato Leek Soup",
                    "Beef Bourguignon",
                    "French Crepes",
                    "Julia Child's Coq au Vin",
                    "Julia Child's Roast Chicken",
                    "Dauphinoise Potatoes",
                    "Hibachi Shrimp",
                    "Hibachi Vegetables",
                    "Hibachi Zucchini",
                    "Ginger Sauce"
                ],
                "method":[
                    "Julia Child revolutionized American cuisine through her French cooking school, award-winning cookbooks, and world-renowned television programs by presenting an approachable version of sophisticated French cooking to her eager audience for four decades."
                ]
            }
        ],
        "likes": 800,
        "recipesNumber": 10
    },
    {
        "id": 2,
        "picture":"https://images.indianexpress.com/2022/07/Chef-Sashi-Cheliah-1200.jpg?w=640",
        "experience": "16+years",
        "name":"Jorge Noriega",
        "recipes": [
            {
                "ingredients":[
                    "Ginger Sauce",
                    "Banana Appam",
                    "Paneer Cutlet",
                    "Vadapoo cutlet",
                    "Dauphinoise Potatoes",
                    "chana Dal vada",
                    "Hibachi Zucchini"
                   
                ],
                "method":[
                    "National conference. The NACUFS Culinary Challenge recognizes the exceptional talent and skills necessary for chefs to bring their creations together. Noriega prepared a twice-cooked turkey breast with sautéed greens, rice, peas and a red pepper romesco sauce. He believes this dish gives an impression of everywhere he has traveled to cook"
                ]
            }
        ],
        "likes": 700,
        "recipesNumber": 7
    },
    {
        "id": 3,
        "picture":"https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/lader_chef.jpg",
        "experience": "6+years",
        "name":"N Gopi",
        "recipes": [
            {
                "ingredients":[
                    "Elumbu Rasam",
                    "Beef Bourguignon",
                    "Mascarpone and Mixed Berry",
                    "Ancient Cirinuma",
                    "Dauphinoise Potatoes",
                    "Masala Tometoo upma"
                ],
                "method":[
                    "Chefs are all about creation, skills, and personality. These skills shall never come to an end and creativity shall always be existing. The pride in the chef’s coat and the confident when we meet the guests. Guests engagement and creating experiences and meeting so many various people, ensuring the taste buds are being satisfied."
                ]
            }
        ],
        "likes": 400,
        "recipesNumber": 6
    },
    {
        "id": 4,
        "picture":"https://a.foxdcg.com/dpp-uploaded/images/hells-kitchen/keyart_s23.jpg?fit=inside%7C*:575",
        "experience": " 15+years",
        "name":"Chef Arun Mohanraj",
        "recipes": [
            {
                "ingredients":[
                    "Pneer Bnatura",
                    "Beef Bourguignon",
                    "French Crepes",
                    "chilli Idli",
                    "Roast Chicken",
                    " Potatoes salan",
                    "Hibachi Shrimp",
                    "Aloo Do Payaza",
                    "Nalika Salan",
                    "Ginger Sauce"
                ],
                "method":[
                    "We have just started a Tea Garden within our hotel premises, which used to be a redundant patch. While it is “work in progress” stage, we have planned to give a guest experience in the midst of the tea bushes. The multiple course menu will be paired with some exquisite homegrown Nilgiri Teas. We have done extensive research to harmonise the flavour profile of a particular dish with the most compatible tea. "
                ]
            }
        ],
        "likes": 300,
        "recipesNumber": 10
    },
    {
        "id": 5,
        "picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8wy1NBeeScWQSz0xYcTJmz_NFnPpADyD3AyooYTYGHNSG8wi_ZEYeM-98cG2CE5bzLo&usqp=CAU",
        "experience": "9+years",
        "name":"de Cuisine",
        "recipes": [
            {
                "ingredients":[
                    "Potato Leek Soup",
                    "Aloo Do Payaza",
                    "French Crepes",
                    "Mascarpone and Mixed Berry",
                    "Banana Appam",
                    "Dauphinoise Potatoes",
                    "Hibachi Shrimp",
                    "Dahi Somosa",
                    "Hibachi Zucchini"
                ],
                "method":[
                    "JThe chef de cuisine has the challenging task of leading and managing all kitchen staff. Ideally, chefs should know how to do everyone’s job in order to offer guidance and direction. In addition to training and instructing apprentices, chefs must supervise different stations to ensure that orders are executed perfectly."
                ]
                
            }
        ],
        "likes": 600,
        "recipesNumber": 9
    },
    {
        "id": 6,
        "picture":"https://foodiesfestival.com/wp-content/uploads/2022/02/jon-watts-square.png",
        "experience": "19+years",
        "name":"Mario Perera",
        "recipes": [
            {
                "ingredients":[
                    "Payyoli chicken fry",
                    "Aloo Do Payaza",
                    "French Crepes",
                    "Mascarpone and Mixed Berry",
                    "Banana Appam",
                    "Dahi Somosa",
                    "Aloo Do Payaza"
                ],
                "method":[
                    "I created our popular Norfolk Black chicken and chestnut mushroom pie, served with heritage carrots, truffle mash and New Forest mushrooms.It’s a wonderful example of showcasing outstanding British produce and it’s so satisfying when our guests tell us how much they enjoy it."
                ]
            }
        ],
        "likes": 500,
        "recipesNumber": 7
    }
    
];

app.use(cors());

app.get("/", (req, res) =>{
    res.send("Food is running")
});

app.get("/chefs", (req, res) =>{
    res.json(chefs);
});

app.get("/chefs/:id", (req, res) =>{
    const id = req.params.id;
    const selectedChefs = chefs.find(c => c.id == id);
    res.send(selectedChefs)
});

app.listen(port, () => {
    console.log(`food point API is running on port: ${port}`);
})