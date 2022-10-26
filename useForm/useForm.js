import { useState } from "react";

export const useForm = (initialFormValue = {}) => {
  const [formState, setFormState] = useState(initialFormValue);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState((currentFormState) => ({
      ...currentFormState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormState(initialFormValue);
  };

  return { formState, ...formState, handleInputChange, handleReset };
};
