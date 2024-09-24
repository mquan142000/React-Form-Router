import React, { useState } from 'react';
import { Formik } from 'formik';
import './App.css';

export default function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({});
  const [indexSelected, setIndexSelected] = useState('-1');

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleValidate() {
    const errors = {};
    if (!form.title) {
      errors.title = "Required";
    }
    if (!form.number) {
      errors.number = "Required";
    }
    return errors; // Trả về errors để Formik xử lý
  }

  function handleSelect(book, index) {
    setForm(book);
    setIndexSelected(index);
  }

  function handleDelete(index) {
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks.splice(index, 1);
    setBooks(newBooks);
  }

  function handleSubmit() {
    const newBooks = JSON.parse(JSON.stringify(books));
    if (indexSelected > -1) {
      newBooks.splice(indexSelected, 1, form);
    } else {
      newBooks.push(form);
    }

    setBooks(newBooks);
    setForm({});
    setIndexSelected('-1');
  }

  return (
    <div className="container">
      <h1>Book Form</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
              <label>Title</label>
              <input
                type='text'
                name='title'
                value={form.title || ""}
                onChange={handleChange}
              />
              {errors.title && <p className='error'>{errors.title}</p>}
            </div>

            <div className={`custom-input ${errors.number ? "custom-input-error" : ""}`}>
              <label>Number</label>
              <input
                type='number'
                name='number'
                value={form.number || ""}
                onChange={handleChange}
              />
              {errors.number && <p className='error'>{errors.number}</p>}
            </div>

            <button type='submit'>
              {indexSelected > -1 ? "Update Book" : "Add Book"}
            </button>
          </form>
        )}
      </Formik>

      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.number}</td>
              <td>
                <button onClick={() => handleSelect(book, index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
