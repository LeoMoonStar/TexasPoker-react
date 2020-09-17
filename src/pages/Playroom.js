import React,{ Component } from "react";
import '../styles/playroom.css'
import { TextField,Button } from "@material-ui/core";
import Game from "../lib/Game";

export default class Playroom extends Component{
    constructor(props){
        super(props)
        this.state = {
            handA:'',
            handB:'',
            result:undefined,
            game: new Game()
        }
    }
    setA = (value)=>{
        this.setState({handA:value})
        this.state.game.setA(value)
    }

    setB = (value)=>{
        this.setState({handB:value})
        this.state.game.setB(value)
    }
    
    render(){
        return(
            <div className="playroom-container">
                <form className="form-container">
                    <TextField id="outlined-basic" label="Hand A" variant="outlined" margin="normal" onChange={e=>this.setA(e.target.value)}/>
                    <TextField id="outlined-basic" label="Hand B" variant="outlined" margin="normal" onChange={e=>this.setB(e.target.value)}/>
                    <Button variant="contained" color="primary" disableElevation onClick={()=>{
                        var result = this.state.game.comparesion()
                        console.log(result)
                        this.setState({
                            result
                        })
                    }}>
                       Compare
                        </Button>
                </form>
                {
                   
                    this.state.result!=undefined?(this.state.result?(<h2>A WIN</h2>):(<h2>B WIN</h2>)):(<h2>No result</h2>)
                }
            </div>
        )
    }
}