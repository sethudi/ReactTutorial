import React from 'react';
import Editicon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from 'react-router-dom';
import './BookTable.css';

function BookTable(props) {

    let books = props.books.map((book) => {
        let date = book.published.toString().substr(0, 4);
        return (
            <tr key={book.id}>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{date}</td>
                <td><Link to={'/edit/' + book.id}><Editicon /></Link></td>
                <td><Link onClick={() => { if (window.confirm('Really delete this book?')) { props.handleDelete(book.id) } }} to='/'><DeleteForeverIcon /></Link></td>
            </tr>
        )
    });

    return (
        <div>
            <table>
                <thead>
                    <tr><th>Author</th><th>Title</th><th>Published</th></tr>
                </thead>
                <tbody>
                    {books}
                </tbody>

            </table>
        </div>
    );
}

export default BookTable;