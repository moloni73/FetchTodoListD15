import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../../styles/TodoList.css";


export class ControlledImput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {},
            position: {},
            ldata: []
        };

        this.Submit = this.Submit.bind(this);
        this._remove = this._remove.bind(this);
    }

        componentDidMount()
        {
            fetch('https://assets.breatheco.de/apis/fake/todos/user/molina73', {

                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(resp => {
                    return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
                })
                .then(resp => {

                    this.setState({ ldata })

                })
        };

    Change() {// obtengo la cadena

        fetch('https://assets.breatheco.de/apis/fake/todos/user/molina73', {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => {
                console.log(resp.ok); // will be true if the response is successfull
                console.log(resp.status); // the status code = 200 or code = 400 etc.
                console.log(resp.text()); // will try return the exact result as string
                return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
            })
            .then(jvalue => {

                if (resp.ok){

                this.setState({ value: jvalue});

                }

            })
            .catch(error => {
                //error handling
                console.log(error);
            });

    };

    Submit = s => { // enviando la lista
        s.preventDefault();

         fetch('https://assets.breatheco.de/apis/fake/todos/user/molina73', {
            method: "PUT",
            body: JSON.stringify(ldata),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => {
                console.log(resp.ok); // will be true if the response is successfull
                console.log(resp.status); // the status code = 200 or code = 400 etc.
                console.log(resp.text()); // will try return the exact result as string
                return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
            })
            .then(ldata => {

                let auxdata = this.state.ldata;
                this.setState({ ldata: auxdata.concat(this.state.value) });

            })
            .catch(error => {
                //error handling
                console.log(error);
            });
    }

    _remove() {
        // fetch para obtener la posicion
        fetch('https://assets.breatheco.de/apis/fake/todos/user/molina73', {
                 headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => {
                console.log(resp.ok); // will be true if the response is successfull
                console.log(resp.status); // the status code = 200 or code = 400 etc.
                console.log(resp.text()); // will try return the exact result as string
                return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
            })
            .then(jpos => {

                if (resp.ok){

                this.setState({ posicion: jpos});

                }
            })
            .catch(error => {
                //error handling
                console.log(error);
            });

            // fetch actualizar la lista
            fetch('https://assets.breatheco.de/apis/fake/todos/user/molina73', {
            method: "PUT",
            body: JSON.stringify(ldata),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => {
                console.log(resp.ok); // will be true if the response is successfull
                console.log(resp.status); // the status code = 200 or code = 400 etc.
                console.log(resp.text()); // will try return the exact result as string
                return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
            })
            .then(ldata => {

            let data = this.state.ldata;

            let newData = [...data.slice(0, position), ...data.slice(position + 1)];

            this.setState({ ldata: newData });

            })
            .catch(error => {
                //error handling
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar justify-content-center">
                    <h3>{"todos"}</h3>
                </nav>
                <div className="input-group mb-3  justify-content-center">
                    <form onSubmit={this.Submit}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="No tasks, add a task"
                            onChange={this.Change}
                            value={this.state.value}
                        />
                    </form>
                </div>
                <br />
                <ul className="list-group">
                    {this.state.ldata.map((item, index) => (
                        <li
                            className="list-group-item  justify-content-center"
                            key={index}>
                            <div className="name">
                                <span className="item-name">{item}</span>
                            </div>
                            <button
                                className="close"
                                onClick={() => this._remove}
                                data-dismiss="alert"
                                aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}