import React from 'react';

class Users extends React.Component {
    users = [
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
    render () {
        if(this.users.length > 0)
            return(
                <div>
                    {this.users.map((user) => (<div className="user" key={user.id}>
                        <h3> {user.firstname} {user.lastname} </h3>
                        <p> {user.bio} </p>
                        <b>{user.isAvenger ? 'Avenger' : 'Not Avanger'}</b>
                        </div>))}
                </div>
            )
        else
            return (<div className="user">
                <h3>Пользователей нет</h3>
            </div>)
    }
}
export default Users;