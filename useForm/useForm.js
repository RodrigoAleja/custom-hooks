import { useState } from "react";

export const usarContador = ( inicialForm = {} ) => {

    const [ formState, setformSate ] =  useState(inicialForm);

    const { username, email, contraseña } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;

        setformSate({
            ...formState,
            [name]: value
    })
    }

    const OnBorrarForm = () => {
        
        const valoresIniciales = {
            username: '',
            email: '',
            contraseña: ''
        }

        setformSate(inicialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        OnBorrarForm
    }

}