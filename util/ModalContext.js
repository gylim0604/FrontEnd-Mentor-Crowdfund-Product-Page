import { useState, useContext, createContext } from 'react';

const ModalContext = createContext();

export function ContextWrapper({ children }) {
    let initialState = {
        selection: false,
        completion: false,
        selected: 0,
    };
    const [state, setState] = useState(initialState);

    return (
        <ModalContext.Provider
            value={{
                state,
                setSelection: (el) => setState({ ...state, selection: el }),
                setCompletion: (el) => setState({ ...state, completion: el }),
                handleChange: (el) => setState(el),
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export function useAppContext() {
    return useContext(ModalContext);
}
