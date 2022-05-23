import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Formik } from 'formik';
import { RemoteRelatedWorkField } from "./RemoteRelatedWorkField";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const initialSuggestions = {
      id: 'a',
      title_l10n: 'a',
  };

  ReactDOM.render(
    <Formik>
      {(props) => (
        <Form>
          <RemoteRelatedWorkField fieldPath={'fieldPath'} initialSuggestions={initialSuggestions} />
        </Form>
      )}
    </Formik>,
    div
  );
});
