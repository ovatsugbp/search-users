import "./App.css";
import UserProvider from "./context/userData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <UserProvider>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>
            </UserProvider>
        </Router>
    );
}

export default App;
