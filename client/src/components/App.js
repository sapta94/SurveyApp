import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

const Landing = ()=> <h2>Landing</h2>

const App= function(){
    return(
        <div>
           <BrowserRouter>
                <div>
                    <Route path="/" component={Landing} />
                </div>
           </BrowserRouter>
        </div>
    )
}

export default App;