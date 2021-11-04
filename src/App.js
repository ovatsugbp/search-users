import "./App.css";
import UserProvider from "./context/userData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App() {
    return (
        <Router>
            <UserProvider>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/user">
                        <UserProfile />
                    </Route>
                </Switch>
            </UserProvider>
        </Router>
    );
}

export default App;
