import React from 'react';
import './App.css';
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";

const baseUrl ="https://reqres.in/api/users?page=1"


class App extends React.Component{
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((res) => {
            this.setState({users: res.data.data})
        })

        this.state = {
            users : []
        }
        //указываем, что наш собственный метод может взаимодействовать с состояниями
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }
    render(){
        return (
            <div className="App">
                <Header title="Список пользователей"/>
                <main>
                    <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
                </main>
                <aside>
                    <AddUser onAdd={this.addUser}/>
                </aside>
            </div>
        );
    }

    deleteUser (id){
        this.setState({
            //по сути мы будем добавлять в новый массив все элементы, у которых id не будет совпадать с тем, чтот передеается в эту функцию
            users: this.state.users.filter((el) => el.id !== id)
        })
    }

    editUser(user){
        //получили всех пользователей
        let allUsers = this.state.users
        //нашли нужного пользователя по id и заменили его передаваемым в арги
        allUsers[user.id - 1] = user

        //отчистили список и выполнили ф-ю, в которой мы добавили новый список
        this.setState({users : []}, () =>{
            this.setState({users: [...allUsers]})
        })
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


// {
//     id: 1,
//         firstname: "Steve",
//     lastname: "Rogers",
//     bio: "Captain Steven Grant Steve Rogers is a World War II veteran, a founding member of the Avengers, and Earth's first known superhero. Rogers grew up suffering from numerous health problems, and upon the United States' entry into World War II, he was rejected from serving in the United States Army despite several attempts to enlist. Rogers ultimately volunteered for Project Rebirth, where he was the only recipient of the Super Soldier Serum developed by Abraham Erskine under the Strategic Scientific Reserve. ",
//     age: 40,
//     isAvenger: true,
// },
// {
//     id: 2,
//         firstname: "Peter",
//     lastname: "Quill",
//     bio: "Peter Jason Quill is a Celestial-Human hybrid who was abducted from Earth in 1988 by the Yondu Ravager Clan, and raised as one of their members, eventually building a reputation as the notorious intergalactic outlaw Star-Lord.",
//     age: 36,
//     isAvenger: false,
// }