import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainer(props){
    return(
        <div>
            <h2>Number of Cake - {props.numberOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        numberOfCake: state.numberOfCake
    }
} 
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: ()=>dispatch(buyCake())
    }
} 
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)