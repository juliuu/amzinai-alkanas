import { useState } from 'react';

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  return {
    formData: form,
    setFormData: (event) => {
      return setForm({ ...form, [event.target.id]: event.target.value });
    },
    setFormList: (key, value) => {
      return setForm({ ...form, [key]: [...form[key], value] });
    },
    setFormListData: (key, event, index) => {
      const items = form[key];
      items[index][event.target.id] = event.target.value;
      return setForm({ ...form, [key]: items });
    },
    spliceFormList: (key, index) => {
      const items = form[key];
      if (items.lenght <= 1) return setForm({ ...form, [key]: [] });
      items.splice(index, 1);
      return setForm({ ...form, [key]: items });
    },
    clearFormData: () => {
      return setForm(initialState);
    },
  };
};

export default useForm;
