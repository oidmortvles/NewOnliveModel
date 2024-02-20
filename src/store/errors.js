import { create } from 'zustand';

const useErrorsStore = create((set) => ({
    errorsArray:[],
    idError:0,

    addError: (msj, status) =>
    set((state) => ({
      errorsArray: [...state.errorsArray, { id: state.idError++, msj, status}],
    })),

    removeError: (id) =>
    set((state) => ({
        errorsArray: state.errorsArray.filter((error) => error.id !== id),
    })),

  }));

  export default useErrorsStore;