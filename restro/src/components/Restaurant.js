
import React, { Component } from 'react';
import axios from 'axios';
import { Card, } from 'react-bootstrap';
import '../App.css';
import img from '../images/restaurant.jpg'
class Restaurant extends Component {
    state = {
        FirstName: '',
        LastName: '',
        Dates: '',
    }
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            first_name: this.state.FirstName,
            last_name: this.state.LastName,
            dates: this.state.Dates
        };
        // axios.Post('http://localhost:3000/restaurant',user)
        // .then(res=>{
        //     console.log(res);
        //     console.log(res.data);
        // })
    }
    render() {
        return (
            <div styles={{ backgroundImage: `url(${img})` }}>

                <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                    <div><h2>Update your Visits</h2><br></br>
                        <Card id="datatable" style={{ width: '18rem' }}>
                            <form>

                                <div class="form-row" id='fine'>
                                    <div class="col">
                                        <input type="text" class="form-control" id="first_name" placeholder="First name" width="100%" onChange={this.handleChange} />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" id="last_name" placeholder="Last name" onChange={this.handleChange} />
                                    </div>
                                    <br></br><br></br>
                                </div>
                            </form>
                            <div class="col2">
                                <input type="date" class="form-control" id="date" placeholder="Date of Visit" onfocus="(this.type='date')" id="date" onChange={this.handleChange} />
                            </div><br></br>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <select class="custom-select custom-select-sm">
                                <option selected>Select Dishes</option>
                                <option value="1">Shahi Paneer</option>
                                <option value="2">Dal Makhni</option>
                                <option value="3">Baingan Bhaja</option>
                            </select><br></br>
                            <select class="custom-select custom-select-sm">
                                <option selected>Select Dishes</option>
                                <option value="1">Shahi Paneer</option>
                                <option value="2">Dal Makhni</option>
                                <option value="3">Baingan Bhaja</option>
                            </select><br></br>
                            <select class="custom-select custom-select-sm">
                                <option selected>Select Dishes</option>
                                <option value="1">Shahi Paneer</option>
                                <option value="2">Dal Makhni</option>
                                <option value="3">Baingan Bhaja</option>
                            </select><br></br>
                        </Card>
                        <div class="col-sm-10" style={{ display: 'flex', justifyContent: 'center', padding: 10 }}><br></br>
                            <button type="button" onClick="insert1()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.handleSubmit}>Submit</button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Data Submitted Successfully</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            This Was your 1st visit!!!
      </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div></div>
        );
    }
}

export default Restaurant;