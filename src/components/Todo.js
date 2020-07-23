import React, { useState, useEffect } from 'react';
import API from '../service/API';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css';
import { Link } from 'react-router-dom';

const Todo = () => {
  const [state, setState] = useState({
    todos: [],
    initialTodo: { title: '', done: false },
    todo: {},
    loading: false,
    error: '',
  });

  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setState({ ...state, todo: { ...state.todo, [name]: value } });
  };

  const addTodo = (e, options) => {
    e.preventDefault();
    setState({ ...state, loading: true });
    API.post('/todos.json', { ...options })
      .then((res) => setSuccess(true))
      .catch((err) => console.error(err))
      .finally(setState({ ...state, todo: state.initialTodo, loading: false }));
  };

  const update = (e, id) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      done: e.target.done.checked,
    };
    setState({ ...state, loading: true });
    API.put(`/todos/${id}.json`, data)
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => console.error(err))
      .finally(setState({ ...state, todo: state.initialTodo, loading: false }));
  };

  const deleteOne = (e, id) => {
    e.preventDefault();
    const newTodos = state.todos.filter((t) => t.id === !parseInt(id));
    setState({ ...state, loading: true });
    API.delete(`/todos/${id}.json`)
      .then((res) => {
        setState({ ...state, todos: newTodos });
        setSuccess(true);
      })
      .catch((err) => console.error(err))
      .finally(setState({ ...state, loading: false }));
  };

  useEffect(() => {
    setState({ ...state, loading: true });
    API.get('/todos.json')
      .then((res) => setState({ ...state, todos: res.data }))
      .catch((err) => console.error(err))
      .finally(setState({ ...state, loading: false }));
    setSuccess(false);
  }, [success]); // eslint-disable-line

  return (
    <div className='todos'>
      <div className='container'>
        <Link to='/'> &#8592; Retour à l'accueil</Link>
        <form onSubmit={(e) => addTodo(e, state.todo)} className='mt-5 mb-5'>
          <div className='form-group'>
            <label htmlFor='title'>Ajouter une todo</label>
            <input
              type='text'
              value={state.todo.title}
              name='title'
              className='form-control mb-1'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='form-group form-check mb-2'>
            <label htmlFor='done' className='form-check-label'>
              done
            </label>
            <input
              type='checkbox'
              checked={state.todo.done}
              name='done'
              className='form-check-input'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className='btn btn-primary' type='submit'>
            Ajouter
          </button>
        </form>
        <hr />
      </div>
      {!state.error && state.loading
        ? 'Chargement ... '
        : state.todos.map((t) => (
            <div key={t.id} className='container mb-2'>
              <form onSubmit={(e) => update(e, t.id)}>
                <div className='form-group'>
                  <label htmlFor={t.title}></label>
                  <input
                    type='text'
                    defaultValue={t.title}
                    name='title'
                    className='form-control mb-1'
                  />
                </div>
                <div className='form-group form-check mb-2'>
                  <label htmlFor={t.id} className='form-check-label'>
                    done
                  </label>
                  <input
                    type='checkbox'
                    defaultChecked={t.done}
                    name='done'
                    className='form-check-input'
                  />
                </div>
                <button className='btn btn-primary mr-3' type='submit'>
                  Éditer
                </button>
                <button
                  className='btn btn-danger'
                  onClick={(e) => deleteOne(e, t.id)}>
                  Supprimer
                </button>
              </form>
            </div>
          ))}
    </div>
  );
};

export default Todo;
