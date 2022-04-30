import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

const App2 = () => {

    /*constructor() {

        super();

        this.state = {
            robots: [],          
            searchfield: ''
        };        
    }
    const {robots, searchfield} = this.state;*/    
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    const onSearchChange = (event) => {             
        /*this.setState({
            searchfield: event.target.value            
        });   */
        setSearchField(event.target.value);                  
    }    

    /*componentDidMount() {             
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((users) => {
                this.setState({robots: users})
            });               
    }*/
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((users) => {
               setRobots(users);
            });         
    }, []);

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    if (!robots.length) {
        return <h1>Loading...</h1>
    };

    return (
        <>                
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <br/>    
                <Scroll>
                    <CardList robots={filteredRobots} />      
                </Scroll>               
                                
            </div>
        </>
    );
    
}

export default App2;