import { useState } from 'react';

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  return [
    formData,
    (event) => {
      setFormData({ ...formData, [event.target.id]: event.target.value });
    },
    () => {
      setFormData(initialState);
    },
  ];
};

export default useForm;
