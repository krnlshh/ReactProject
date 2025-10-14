import{BrowserRouter,Routes,Route,Link} from "react-router"
const Router = () => {

    return(
        <div>
            <BrowserRouter>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/journey'>Journey</Link>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>}/>
                    <Route path="/About" element={<h1>About</h1>}/>
                    <Route path="/Contact" element={<h1>Contact</h1>}/>
                    <Route path="/Journey" element={<h1>Journey</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router