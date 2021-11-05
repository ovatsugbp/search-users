import "./App.css";
import UserProvider from "./context/userData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Header />
            <UserProvider>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/:id">
                        <UserProfile />
                    </Route>
                </Switch>
            </UserProvider>
        </Router>
    );
}

export default App;
