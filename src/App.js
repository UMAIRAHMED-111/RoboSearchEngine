import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import SCroll from "./SCroll";



class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>{this.setState({robots:users})})
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value })
    }
    render(){
        const {robots,searchfield} = this.state;
        const filterRobots = robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(!robots.length){
            return <h1 className="tc">"Loading"</h1>
        }
        else
        return(
        <div className="tc">
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <SCroll><CardList robots = {filterRobots}/></SCroll>
        </div>
    );
}
}

export default App;