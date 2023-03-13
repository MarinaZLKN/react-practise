import React from 'react';
import './App.css';
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";


class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            users : [
                {
                    id: 1,
                    firstname: "Steve",
                    lastname: "Rogers",
                    bio: "Captain Steven Grant Steve Rogers is a World War II veteran, a founding member of the Avengers, and Earth's first known superhero. Rogers grew up suffering from numerous health problems, and upon the United States' entry into World War II, he was rejected from serving in the United States Army despite several attempts to enlist. Rogers ultimately volunteered for Project Rebirth, where he was the only recipient of the Super Soldier Serum developed by Abraham Erskine under the Strategic Scientific Reserve. ",
                    age: 40,
                    isAvenger: true,
                },
                {
                    id: 2,
                    firstname: "Peter",
                    lastname: "Quill",
                    bio: "Peter Jason Quill is a Celestial-Human hybrid who was abducted from Earth in 1988 by the Yondu Ravager Clan, and raised as one of their members, eventually building a reputation as the notorious intergalactic outlaw Star-Lord.",
                    age: 36,
                    isAvenger: false,
                }
            ]
        }
        //указываем, что наш собственный метод может взаимодействовать с состояниями
        this.addUser = this.addUser.bind(this)
    }
    render(){
        return (
            <div className="App">
                <Header title="Список пользователей"/>
                <main>
                    <Users users={this.state.users} />
                </main>
                <aside>
                    <AddUser onAdd={this.addUser}/>
                </aside>
            </div>
        );
    }

    addUser(user){
        //приписываем новому user'у id
        const id = this.state.users.length + 1;
        //суть строки в том, что мы меняем список users
        // и ко всему текущему списку добавляем новый обьект, состоящий из id и всего обьекта
        //передаваемого в качестве обьекта в нашу функцию от пользователя
        this.setState({users: [...this.state.users, {id, ...user}]})

    }
}

export default App;
