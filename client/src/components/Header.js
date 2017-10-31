import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Payments from './Payments'

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return (
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                );
            case false:
                return <li><a href="/auth/google">Click to Login with Google</a></li>
            default:
                return [
                <li key="1"><Payments /></li>,
                <li key="3" style={{"margin":"0 10px"}}>Credits : {this.props.auth.credits}</li>,
                <li key="2"><a href="/auth/logout">Logout</a></li>
            ]
        }

    } 
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth?'/survey':'/'}
                        className="left brand-logo">
                        Emaily
                    </Link>
                    <ul className="right">
                       {this.renderContent()}
                    </ul>
                </div>
            </nav> 
        )
    }
}

function mapStateToProps({ auth }) {   
      return { auth };   
    }
    
export default connect(mapStateToProps)(Header); 