import './views.css'
import React, {Component} from 'react'
import axios from 'axios'
import Search from './Search'
import List from './List'

const DEFAULT_QUERY = 'dennisschmock'

const PATH_BASE = 'https://api.github.com/users/';
const PARAM_REPO = '/repos'

class FrontPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            result: null,
            searchTerm: DEFAULT_QUERY

        }
        this.fetchUserRepo = this.fetchUserRepo.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this)

    }


    fetchUserRepo(searchTerm) {

        console.log(`${PATH_BASE}${searchTerm}${PARAM_REPO}`)


        axios.get(`${PATH_BASE}${searchTerm}${PARAM_REPO}`)
            .then(json => json.data.map(result => (
                {
                    name: result.name

                })))
            .then(newData => this.setState({result: newData}))
            .catch(error => {
                console.log(error)
                this.setState({result:[]})
            })
    }

    onSearchSubmit(e) {
        e.preventDefault();

        const {searchTerm} = this.state
        this.fetchUserRepo(searchTerm)

    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value })
    }


    render() {
        const {searchTerm, result} = this.state
        return (
            <div className="page">
                <div className="interactions">
                    <Search
                        value={searchTerm}
                        onSubmit={this.onSearchSubmit}
                        onChange={this.onSearchChange}
                    >
                        Search
                    </Search>
                </div>
                {result &&
                <List
                    list={result}
                />
                }

            </div>

        )
    }

}


const Button = ({onClick, className = '', children}) => {


    return (
        <button onClick={onClick} className={className} type="button">
            {children}
        </button>
    )

}



export default FrontPage;