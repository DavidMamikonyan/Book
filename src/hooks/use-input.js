import React, {useReducer} from 'react';

const initialInputState = {
    value: '',
    isTouched: false,
};

const inputStateReducer = (state, action) => {

    switch (action.type) {
        case 'INPUT' :
            return {value: action.value, isTouched: state.isTouched}
            break;
        case 'BLUR' :
            return {isTouched: true, value: state.value}
            break;
        case 'RESET' :
            return {isTouched: false, value: ''}
            break;
        default :
            return initialInputState;
    }
};


const useInput = (validateValue) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    let timeOutId;

    const valueChangeHandler = (event) => {
        if (timeOutId !== undefined) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(() => {
            dispatch({type: 'INPUT', value: event.target.value});
        }, 400);
    };

    const inputBlurHandler = () => {
        dispatch({type: 'BLUR'});
    };

    const reset = () => {
        dispatch({type: 'RESET'});
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
        isTouched:inputState.isTouched,
    };
};

export default useInput;