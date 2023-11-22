import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const searchbarSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, 'Name too short!')
    .max(24, 'Name too long!')
    .required('Required'),
});

export const Searchbar = props => {
  return (
    <Formik
      initialValues={{ text: '' }}
      validationSchema={searchbarSchema}
      onSubmit={(values, actions) => {
        props.onSubmit(values);
        actions.resetForm();
      }}
    >
      <form className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <ErrorMessage name="input" component="span" />
      </form>
    </Formik>
  );
};
