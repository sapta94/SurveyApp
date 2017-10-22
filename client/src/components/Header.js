import React,{Component} from 'react'
import {connect} from 'react-redux'

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return( <div className="preloader-wrapper active">
                <div className="spinner-layer spinner-red-only">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>)
            case false:
                return <li><a href="/auth/google">Click to Login with Google</a></li>
            default:
                return <li><a>Logout</a></li>
        }

    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
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