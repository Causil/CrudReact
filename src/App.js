import logo from './logo.svg';
import './App.css';
import { useForm } from './hooks/useForm';

const initialForm = {
  nombre:'',
  email:'',
  password:'',
  comments:'',
};
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{6,250}$/;

  if(!form.nombre.trim()){
    errors.nombre = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = "El campo 'Nombre' solo acepta  letras y espacios en blanco";
  }

  if(!form.email.trim()){
    errors.email = "El campo 'Email' es requerido";
  } else if(!regexEmail.test(form.email.trim())){
    errors.email = "El campo 'Email' es incorrecto";
  }

  if(!form.password.trim()){
    errors.password = "El campo 'Password' es requerido";
  } else if(!regexComments.test(form.password.trim())){
    errors.password = "El campo Password' requiere minimo 6 caracteres";
  }

  if(!form.comments.trim()){
    errors.comments = "El campo 'Comments' es requerido";
  } else if(!regexComments.test(form.comments.trim())){
    errors.comments = "El campo 'Commetns' es incorrecto";
  }

  return errors
};

function App() {
  const {
    form,
    errors,
    loading,
    response,
    handleSubmit,
    handleChange,
    handleBlur,
    handle
  } = useForm(initialForm,validationsForm);

  return (
    <div className="App">
      <h1 > Formulario </h1>
      <form className='Form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='nombre'
          placeholder='Escribe tu nombre'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.nombre}
          required
        />
        {errors.nombre &&  <p> {errors.nombre}  </p>}
        <input
          type='email'
          name='email'
          placeholder='Ingresa tu email'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email &&  <p> {errors.email} </p>}
        <input
          type='password'
          name='password'
          placeholder='Ingresa tu password'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.password}
          required
        />
        {errors.password &&  <p> {errors.password} </p>}
        <textarea
          name='comments'
          cols='50'
          rows='5'
          placeholder='Escribe tus comentarios'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        />
        {errors.comments &&  <p> {errors.comments} </p>}
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default App;
