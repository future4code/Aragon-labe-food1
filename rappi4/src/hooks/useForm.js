import { useState } from "react"

const useForm = (initialState) => {
    const [form, setForm]= useState(initialState)

    const onChange = (e) => {
        const {name, value} = e.target

        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(initialState)
    }

    return {form, onChange, clear}

}

export default useForm; 