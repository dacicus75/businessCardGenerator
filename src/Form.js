import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            firstname: '',
            lastname: '',
            companyname:'',
            email: '',
            phonenumber:''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { firstname, lastname, companyname,email, phonenumber } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="firstname">First Name</label>
                <input 
                    type="text" 
                    name="firstname" 
                    id="firstname"
                    value={firstname} 
                    onChange={this.handleChange} />

                 <label for="lastname">Last Name</label>
                <input 
                    type="text" 
                    name="lastname" 
                    id="lasttname"
                    value={lastname} 
                    onChange={this.handleChange} />
                 <label for="companyname">Company Name</label>
                <input 
                    type="text" 
                    name="companyname" 
                    id="companyname"
                    value={companyname} 
                    onChange={this.handleChange} />

                <label for="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />

                <label for="phonenumber">Phone Number</label>
                <input 
                    type="text" 
                    name="phonenumber" 
                    id="phonenumber"
                    value={phonenumber} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;