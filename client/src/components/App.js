import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import Header from './Header'
import Dashboard from './Dashboard'
const Landing = ()=> <h2>Landing</h2>
//const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>Survey New</h2>

const App= function(){
    return(
        <div className="container">
           <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/survey" component={Dashboard} />
                    <Route exact path="/survey/new" component={SurveyNew} />
                </div>
           </BrowserRouter>
        </div>
    )
}

export default App;