import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { VisibilityFilters} from '../actions';
import  MemoEL from './MemoEL';

const Memos=({todos})=>(
    <div>
       {todos.map(todo =>
            <MemoEL                
                {...todo}         
            />
        )}
    </div>
)

Memos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired    
    ).isRequired
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLTED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)     // reducer function
})

export default connect(mapStateToProps, undefined)(Memos);