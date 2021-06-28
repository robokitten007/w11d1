import React  from "react";
import { Link } from "react-router-dom";



// export const PokemonIndexItem = (props)=>{
    class PokemonIndexItem extends React.Component{

    
    render(){
    return (
    
            <li> 
                
                <Link to={`/pokemon/${this.props.poke.id}`}>
                    
                    {this.props.poke.name}
                
                    <img src={this.props.poke.imageUrl}/>
                </Link>
            </li>  
    
    )
    }
}

export default PokemonIndexItem;