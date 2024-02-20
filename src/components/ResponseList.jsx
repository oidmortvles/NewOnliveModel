import React from 'react';
import './ResponseList.css'
import AlertToast from './AlertToast';
import useResponseStore from '../store/response';

function ErrorList() {

    const { errorsArray, removeResponse } = useResponseStore();

    return (

        <div className='responseList'>
            {errorsArray.map((error) => (
                <AlertToast key={error.id} msj={error.msj} status={error.status} fn={() => removeResponse(error.id)} />
            ))}
        </div>
  )
}

export default ErrorList