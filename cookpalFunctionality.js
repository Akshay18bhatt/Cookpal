
// functionality to change heart color--


// let hearts=document.getElementsByClassName(".heart");
// console.log(hearts);
function like_recipe_onclick(){
    // console.log(hearts);
    // heart.style.color="red";
    let heart=event.target;
    heart.classList.toggle("change_heart_color");
}
    

let form= document.getElementById("search_input");
let search= document.querySelector("#search_input>input");
console.log(search);

search.addEventListener("input",(event)=>{
    // console.log("change");
    recipe_container.innerHTML="";
    let search_Input_text = search.value.toLowerCase();
    let filtered_recipe = menu_list.filter((recipe)=>{
        return recipe.name.toLowerCase().includes(search_Input_text);
    }); 
    DISPLAY_RECIPE(filtered_recipe);

    // console.log(search_Input_text);
});




//          TO DISPLAY ALL RECIPES---------
let all_recipe_button= document.getElementById("btn-1");
all_recipe_button.addEventListener("click",()=>{
    recipe_container.innerHTML="";
    // display_menu_list=menu_list;
    DISPLAY_RECIPE(menu_list);
    display_menu_list="";
});



//          TO DISPLAY ONLY VEG RECIPES--------
let veg_recipes_only_button= document.getElementById("btn-2");
veg_recipes_only_button.addEventListener("click", ()=>{
    recipe_container.innerHTML="";
    // display_menu_list= veg_menu_List;
    DISPLAY_RECIPE(veg_menu_List);
    display_menu_list="";
});




//           TO DISPLAY NON-VEG RECIPES ONLY---------
let nonveg_recipes_only_button= document.getElementById("btn-3");
nonveg_recipes_only_button.addEventListener("click",()=>{
    recipe_container.innerHTML="";
    // display_menu_list= nonveg_menu_list;
    DISPLAY_RECIPE(nonveg_menu_list);
    display_menu_list="";
});




//              TO DISPLAY 4 AND ABOVE 4 RECIPES ONLY
let above_four_recipes_button= document.getElementById("four");
above_four_recipes_button.addEventListener("change",()=>{
    // console.log("is checked");
    if(above_four_recipes_button.checked){
        recipe_container.innerHTML="";
        // display_menu_list=four_above_four;
        DISPLAY_RECIPE(four_above_four);
        display_menu_list="";
    }else{
        recipe_container.innerHTML="";
    }
});




//             TO DISPLAY BELOW 4 RECIPES ONLY
let below_four_recipes_button= document.getElementById("below_four");
below_four_recipes_button.addEventListener("change",()=>{

    if(below_four_recipes_button.checked){
        recipe_container.innerHTML="";
        // display_menu_list=below_four_food;
        DISPLAY_RECIPE(below_four_food);
        display_menu_list="";
    }else{
        recipe_container.innerHTML="";
        below_four_recipes_button.checked=false;
    }
});



