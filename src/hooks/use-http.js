import {useState, useCallback} from 'react';
import axios from "axios";

const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios({
                method: requestConfig.method ? requestConfig.method : 'GET',
                url:requestConfig.url,
                data: requestConfig.data ? requestConfig.data : null,
                headers: requestConfig.headers ? requestConfig.headers : {},
            });
            applyData(response)
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    }
}

export default useHttp;

// const submitHandler = (event) => {
//     event.preventDefault();
//     if (!formIsValid) {
//         return
//     }
//     sendUserData({
//         method: 'POST',
//         url: 'https://lilies.herokuapp.com/auth/registration',
//         data: {
//             "name": firstNameValue,
//             "email": emailValue,
//             "password": passwordValue,
//         }
//     }, fetchedData);
//
//     firstNameReset();
//     emailReset();
//     passwordReset();
// };

// const {isName, isEmail, isPassword} = useValidation();
// const {error, sendRequest: sendUserData} = useHttp();
//
// const {
//     value: firstNameValue,
//     isValid: firstNameIsValid,
//     hasError: firstNameHasError,
//     valueChangeHandler: firstNameChangeHandler,
//     inputBlurHandler: firstNameBlurHandler,
//     reset: firstNameReset,
// } = useInput(isName);