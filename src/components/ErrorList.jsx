import React from 'react';
import './ErrorList.css'
import AlertToast from './AlertToast';
import useErrorsStore from '../store/errors';

function ErrorList() {

    const { errorsArray,removeError } = useErrorsStore();

    return (

        <div className='errorList'>
            {errorsArray.map((error) => (
                <AlertToast key={error.id} msj={error.msj} status={error.status} fn={() => removeError(error.id)} />
            ))}
        </div>
  )
}

export default ErrorList