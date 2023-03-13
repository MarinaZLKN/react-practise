import React from 'react';
import User from './User';

class Users extends React.Component {

    render () {
        if(this.props.users.length > 0)
            return(
                <div>
                    {this.props.users.map((user) => (
                        //передаем ключ для итерации по списку и пользователя(props)
                        //передаем метод для удаления и редактирования user'а из App в User
                        <User onDelete={this.props.onDelete} onEdit={this.props.onEdit} key={user.id} user={user}/>
                    ))}
                </div>
            )
        else
            return (<div className="user">
                <h3>Пользователей нет</h3>
            </div>)
    }
}
export default Users;

