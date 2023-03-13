import React from 'react';
import './App.css';
import Header from "./components/Header";
import Users from "./components/Users";


class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Header title="Список пользователей"/>
                <main>
                    <Users />
                </main>
                <aside></aside>
            </div>
        );
    }
}

export default App;
