// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage'

export const useForm = (initialValue) => {

  const [values, setValues] = useLocalStorage("form", initialValue)

  const handleChanges = evt => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.values
    });
  };

  const resetForm = evt => {
    evt.preventDefault();
    setValues(initialValue);
  };

  return([values, handleChanges, resetForm])

}