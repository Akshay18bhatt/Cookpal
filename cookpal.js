let menu_list=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]


//          PRE-FILTERED LIST -------
let veg_menu_List= menu_list.filter(veg_food=>{
    if(veg_food.type==="veg"){
        return veg_food;
    }
});
// console.log(veg_menu_List);

let nonveg_menu_list= menu_list.filter(nonveg_food=>{
    if(nonveg_food.type==="non-veg"){
        return nonveg_food;
    }
});
// console.log(nonveg_menu_list);

let four_above_four= menu_list.filter(food_rating=>{
    if(food_rating.rating>=4){
        return food_rating;
    }
});
// console.log(four_above_four);



let below_four_food= menu_list.filter(food_rating=>{
    if(food_rating.rating<4){
        return food_rating;
    }
});
// console.log(below_four_food);




//              PRE-FILTERED LIST END------









// let display_menu_list=menu_list;



let recipe_container= document.getElementById("all-recipes");


// No filter -
DISPLAY_RECIPE(menu_list);
function DISPLAY_RECIPE(display_menu_list){


display_menu_list.forEach(food=>{
    // console.log(food.name);
    let card_div= document.createElement("div");
    card_div.id="cardd";



    // img thing--
    let img_div= document.createElement("div");
    img_div.className="img_div";
    let img = document.createElement("img");
    img.src=food.imageSrc;
    img.alt=food.name;
    img_div.appendChild(img);
    // console.log(img);




    // veg/non-veg
    let VN_span= document.createElement("span");
    VN_span.className="veg_non_span"
    VN_span.innerText= food.type;
    // console.log(VN_span.innerText);





    // name and rating div
    let NR_div = document.createElement("div");
    NR_div.className="name_rating_div";
    const h1= document.createElement("h1");
    h1.innerText=food.name;
    
    let NR_span_div=document.createElement("div");
    NR_span_div.className="nr_span_div";
    let star_span= document.createElement("span");
    star_span.className="material-icons star";
    star_span.innerText="kid_star";
    // NR_span_div.appendChild(star_span);
    let rating_is= document.createElement("span");
    rating_is.innerText=food.rating;

    NR_span_div.append(star_span,rating_is);

    NR_div.append(h1,NR_span_div);
    // console.log(NR_div);







    // Time and like div
    let TL_div= document.createElement("div");
    TL_div.className="time_like_div";
    let h3= document.createElement("h3");
    h3.innerText=food.time;

    let heart_comment_div= document.createElement("div");
    heart_comment_div.className="heart_comment_div";
    let like_button= document.createElement("button");
    like_button.setAttribute("onclick","like_recipe_onclick()");
    like_button.className="material-icons heart"
    like_button.innerText= "favorite";
    let TL_span= document.createElement("span");
    TL_span.className="material-icons comment"
    TL_span.innerText= "mode_comment";

    heart_comment_div.append(like_button,TL_span);
    TL_div.append(h3,heart_comment_div);
    // console.log(TL_div);






    // Now appending all elements into the card div

    card_div.append(img_div,VN_span,NR_div,TL_div);
    // console.log(card_div); 
    recipe_container.append(card_div);
});
}