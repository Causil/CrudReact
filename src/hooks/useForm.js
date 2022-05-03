import { useState } from 'react';
export  const useForm = (initialForm,validationsForm) => {
    const [ form, setForm ] = useState(initialForm);
    const [ errors, setErrors ] = useState({});
    const [ loading,setLoading ] = useState(false);
    const [ response, setResponse ] = useState(null);

    const handleSubmit = () => {

    };

    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
            })
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validationsForm(form));
    };

    const handle = (e) => {};

return {
    form,
    errors,
    loading,
    response,
    handleSubmit,
    handleChange,
    handleBlur,
    handle
};
};