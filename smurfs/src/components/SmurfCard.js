import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {getSmurfs} from '../store/actions';

import { addSmurfs } from '../store/actions';


class SmurfCard extends React.Component {
    constructor(props){
        super(props)
        console.log('smurf construtor', props)
        this.state = {
            smurfsAdd: []
        };
    }

    //component did Mount
    componentDidMount(){
    console.log(this.props)
    console.log('first render')
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => this.setState ({smurfsAdd: res.data}))
    console.log('comp did mount')
}

    //component did update
    componentDidUpdate(prevProps) {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => this.setState ({smurfsAdd: res.data}))
    // console.log('comp did update')
}

if(fetchingSmurfs){
    return<h2>Fetching your smurfs, hold on...</h2>
}

// handleRemove = e => {
//     let todosRemove = [...recipes];
//     todosRemove.map((ele, i) => {
//       return ele.index === e ? todosRemove.splice(i, 1) : null;
//     });
//     setRecipes(todosRemove);
//   };


handleRemove = index => {
    console.log('delete')
    const RecipeList = [...this.state.smurfsAdd];
    RecipeList.splice(index, 1);
    this.setState({ RecipeList });
  };






render() {
    // console.log('state', this.state)
    return(

        <div >
            <h1>SMURF</h1>


            {this.state.smurfsAdd.map(r => {
                return(
                    <div className='RecipeCard'>
                        <h3 className='text'>Name: {r.name}</h3>
                        <h3 className='text'>AGE: {r.age}  </h3>
                        <h3 className='text'>HEIGHT: {r.height} </h3>

                        <button
                            // value={r.index}
                            // onClick={value => this.state.handleRemove(r.index)}
                            onClick={this.handleRemove}
                            className="BtnDeleteRecipe"
                        >
                        <b>Delete Recipe</b>
                        </button>
                    </div>  
                )
            })}


        </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfCard)