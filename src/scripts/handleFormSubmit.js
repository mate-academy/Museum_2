import { ANIMATION_DURATION } from './utils/constants';
import { form, formInput, submitButton } from './utils/elements';

export const handleFormSubmit = (e) => {
  e.preventDefault();
  formInput.setAttribute('disabled', 'true');
  submitButton.setAttribute('disabled', 'true');

  setTimeout(() => {
    form.reset();
    formInput.removeAttribute('disabled');
    submitButton.removeAttribute('disabled');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, ANIMATION_DURATION);
};

export const addFormSubmitHandler = () => {
  form.addEventListener('submit', handleFormSubmit);
};
