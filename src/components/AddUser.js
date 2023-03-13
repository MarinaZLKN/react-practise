import React from 'react';

class AddUser extends React.Component {

    userAdd = {}
    constructor(props) {
        super(props)
        //изначальное состояние
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            age: 1,
            isAvenger: false
        }
    }
    render () {
        return(
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Name" onChange={(e) => this.setState({first_name: e.target.value})}/>
                <input placeholder="Lastname" onChange={(e) => this.setState({last_name: e.target.value})} />
                <textarea placeholder="Bio" onChange={(e) => this.setState({email: e.target.value})}></textarea>
                <input placeholder="Age" onChange={(e) => this.setState({age: e.target.value})}/>
                <label htmlFor="isAvenger">Is Avanger?</label>
                <input type="checkbox" id="isAvenger" onChange={(e) => this.setState({isAvenger: e.target.checked})} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        age: this.state.age,
                        isAvenger: this.state.isAvenger,
                    }
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)}
                }>Add</button>
            </form>
        )
    }
}
export default AddUser;