import React,{Component} from 'react'

class Dashboard extends Component{
    render(){
        return <div>
            <h3>Dashboard</h3>
            <div className="fixed-action-btn">
              <a className="btn-floating btn-large red">
                <i className="large material-icons">add</i>
              </a>
            </div>
          </div>;
    }
}

export default Dashboard;