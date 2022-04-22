import React from "react";
import { Route, Router} from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App8 (){
    return(
        <Navigation>
            <Router>
                
                <Route path='/' element={<Home />} exact={true}/>
                <Route path='/about' element={<About />}/>
                <Route path="/movie-detail" element={<Detail />} />
            </Router>
        </Navigation>
        
    );
}

export default App8;