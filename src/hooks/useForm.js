import { useState, useEffect } from 'react';

const useForm = (initialValues, localStorageKey = null) => {
  // Load from localStorage on mount if key provided
  const getInitialValues = () => {
    if (localStorageKey) {
      const saved = localStorage.getItem(localStorageKey);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return initialValues;
        }
      }
    }
    return initialValues;
  };

  const [values, setValues] = useState(getInitialValues);
  const [isLoading, setIsLoading] = useState(false);

  // Save to localStorage whenever values change (if key provided)
  useEffect(() => {
    if (localStorageKey) {
      localStorage.setItem(localStorageKey, JSON.stringify(values));
    }
  }, [values, localStorageKey]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate async process
    setTimeout(() => {
      if (onSubmit) onSubmit(values);
      setIsLoading(false);
    }, 800);
  };

  const resetForm = () => setValues(initialValues);

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
    resetForm,
    isLoading
  };
};

export default useForm;
