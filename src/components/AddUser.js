import React from 'react';

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        //изначальное состояние
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isAvenger: false
        }
    }
    render () {
        return(
            <form>
                <input placeholder="Name" onChange={(e) => this.setState({firstname: e.target.value})}/>
                <input placeholder="Lastname" onChange={(e) => this.setState({lastname: e.target.value})} />
                <textarea placeholder="Bio" onChange={(e) => this.setState({bio: e.target.value})}></textarea>
                <input placeholder="Age" onChange={(e) => this.setState({age: e.target.value})}/>
                <label htmlFor="isAvenger">Is Avanger?</label>
                <input type="checkbox" id="isAvenger" onChange={(e) => this.setState({isAvenger: e.target.checked})} />
                <button type="button" onClick={() => this.props.onAdd({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    bio: this.state.bio,
                    age: this.state.age,
                    isAvenger: this.state.isAvenger,
                })}>Add</button>
            </form>
        )
    }
}
export default AddUser;