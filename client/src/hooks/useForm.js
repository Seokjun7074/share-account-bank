import { useState } from "react";

function useForm(initialFormValues) {
  const [values, setValues] = useState(initialFormValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return [values, handleChange];
}

export default useForm;
