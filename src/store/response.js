import { create } from 'zustand';

const useResponseStore = create((set) => ({
    errorsArray:[],
    idError:0,

    addResponse: (msj, status) =>
    set((state) => ({
      errorsArray: [...state.errorsArray, { id: state.idError++, msj, status}],
    })),

    removeResponse: (id) =>
    set((state) => ({
        errorsArray: state.errorsArray.filter((error) => error.id !== id),
    })),

  }));

  export default useResponseStore;