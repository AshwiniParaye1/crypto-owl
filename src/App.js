import { makeStyles } from "@material-ui/core";
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./Components/Header";
import CoinPage from "./Pages/CoinPage";
import Home from "./Pages/Home";

function App() {
  const useStyles = makeStyles(() => ({
    App:{
      backgroundColor:"black",
      color:"white",
      minHeight:'100vh',
    }

  }))


  const classes = useStyles()


  return (
      
        <Router>
              <div className={classes.App}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/coins/:id" element={<CoinPage/>}exact />
                  </Routes>
              </div>
          </Router>
  );
}

export default App;
