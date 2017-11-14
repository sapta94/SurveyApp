import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Dashboard extends Component{
    render(){
        return <div>
            <h3>Dashboard</h3>
            <div className="fixed-action-btn">
              <Link to='/survey/new' className="btn-floating btn-large red">
                <i className="large material-icons">add</i>
              </Link>
            </div>
          </div>;
    }
}

export default Dashboard;