import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Formik } from 'formik';
import { RemoteAlternateIdentifierField } from "./RemoteAlternateIdentifierField";

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
          <RemoteAlternateIdentifierField fieldPath={'fieldPath'} initialSuggestions={initialSuggestions} />
        </Form>
      )}
    </Formik>,
    div
  );
});
