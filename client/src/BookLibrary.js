import React from 'react';
import axios from 'axios';
import './BookLibrary.css';
import BookTable from './BookTable';
import FlashMessage from './FlashMessage';

class BookLibrary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Count: 1,
            books: [],
            loading: false,
            internalMessage: false,
            warning: '',

        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.refresh();
    }

    refresh() {
        this.setState({ loading: true });
        axios(process.env.REACT_APP_SERVER_URL)
            .then(result => this.setState({ loading: false, books: result.data }))
            .catch(error => {
                this.setState({ internalMessage: true, loading: false });
                console.log(error);
            });
    }

    handleDelete(id) {
        axios.delete(process.env.REACT_APP_SERVER_URL + '/' + id)
            .then(result => {
                this.refresh();
            })
            .catch(error => {
                this.setState({
                    Count :this.state.Count +1,
                    warning: 'Delete failed',
                });
            })
    }


    render() {
        let content = '';

        if (this.state.loading) {
            content = <div className="library-message">Loading ...</div>
        } else if (this.state.internalMessage) {
            content = <div className="library-message">An error occurred. Please try later.</div>
        }
        else {
            content = (
                <div className="book-library">
                    <FlashMessage key={this.state.Count} message={this.state.warning} duration='3000' />
                    <BookTable books={this.state.books} handleDelete={this.handleDelete} />
                </div>
            );
        }
        return content
    }
}

export default BookLibrary;