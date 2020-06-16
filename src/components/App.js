import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer';
import Memos from './Memos'

const App = () => (
    <div>
        <AddTodo></AddTodo>
        <VisibleTodoList/>
        <Footer />
        <Memos />
    </div>
)

export default App;