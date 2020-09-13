import React, {useState, Component } from "react";


// import "./styles.css";
import './Recipe.css';



const recipeList = [
    {
      title:'Cookies',
      body: '1 cup water 1 tsp sugar',
      index:0,
      purchased: false
    },
  
    {
      title:'soup',
      body: '1 cup water',
      index:1,
      purchased: false
    },
  
    {
      title:'salad',
      body: 'chopped greens',
      index:2,
      purchased: false
    }

]


const TodoApp = () => {
  const [inputValue, setInput] = useState();
  const [index, setIndex] = useState(0);
  // const [recipes, setRecipes] = useState([]);
  const [recipes, setRecipes] = useState(recipeList);
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  // SEARCH BAR FILTER
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIndex(index + 1);
    setRecipes([...recipes, { title: inputValue, index, isToggled: false }]);
    setInput("");
  };

  const handleRemove = e => {
    let todosRemove = [...recipes];
    todosRemove.map((ele, i) => {
      return ele.index === e ? todosRemove.splice(i, 1) : null;
    });
    setRecipes(todosRemove);
  };

  const toggleItem = e => {
    let todoToggle = [...recipes];
    todoToggle.map((ele, i) => {
      return ele.index === e ? (ele.isToggled = !ele.isToggled) : null;
    });
    setRecipes(todoToggle);
  };



  const filteredRecipes = recipes.filter(r => {
    // return r.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    return r.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });


  return (
    <div  className="App2">
      <div className="mainBox2">

        {/* //////////////////////SEARCH BAR///////////////////////*/}
      <div className="Searchbar" >
          <form>
            <input 
              className="Input"
              type="text"
              onChange={handleInputChange}
              value={query}
              name="title"
              placeholder="Search Recipes"
              autoComplete="off"
            />
          </form>   
            
      </div>


      {/* //////////////////////FORM/////////////////////// */}
      <form onSubmit={e => handleSubmit(e)}>
        <input 
          required
          name="title"
          className='Input'
          // value={recipes.title} 
          // value={inputValue}
          placeholder="Add Recipe"
          onChange={e => handleChange(e)}
        />

          <button className='BtnAddRecipe'>
            <b>Add Recipe</b>
          </button>
      </form>
    </div>

      <div  className="RecipeHolder"> 

        {filteredRecipes.map((e, i) => {
        // {recipes.map((e, i) => {
          return (
            
            <div key={i} className="RecipeCard">
              
              {e.isToggled ? (
                <div>
                  <div
                    className="checkBox-checked"
                    value={e.index}
                    onClick={value => toggleItem(e.index)}
                  />
                </div>

              ) : (
                <div>
                  <div
                    className="checkBox"
                    value={e.index}
                    onClick={value => toggleItem(e.index)}
                  />
                  
                </div>
              )}
              <div>
                {/* {" "} */}
                <h2>{e.title}</h2>
                <p>{e.body}</p>
                <button
                  value={e.index}
                  onClick={value => handleRemove(e.index)}
                  className="BtnDeleteRecipe"
                >
                  <b>Delete Recipe</b>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
    
  );
};


export default TodoApp;