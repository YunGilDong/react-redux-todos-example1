// contatiner component
// -동작과 관련, (데이터 불러오기, 상태 변경)
// -redux와 연관
// -redux상태 구독
// -redux 액션을 보냄

import React from 'react';
import { connect } from 'react-redux';
import {  addTodo } from '../actions';

const AddTodo = ({dispatch}) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e=>{
                    e.preventDefault()
                    if(!input.value.trim())
                        return;
                    dispatch(addTodo(input.value))
                    input.value = '';
                }}
            >
                <input ref={node=>input = node} />
                <button type='submit'>
                    Add todo
                </button>
            </form>
        </div>
    )    
}

export default connect()(AddTodo);