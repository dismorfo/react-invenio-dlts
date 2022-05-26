import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FieldLabel, RemoteSelectField } from 'react-invenio-forms';
import { i18next } from '@translations/i18next';

const serializeSuggestions = (suggestions) => suggestions.map((item) => ({
  text: item.title_l10n,
  value: item.id,
  key: item.id,
}));

export class RemoteRelatedWorkField extends Component {

  render() {
    const {
      fieldPath,
      label,
      labelIcon,
      required,
      multiple,
      placeholder,
      clearable,
      suggestionAPIUrl,
      initialSuggestions,
      ...uiProps
    } = this.props;

    const serializeSuggestions = this.props.serializeSuggestions || null;

    return (
      <RemoteSelectField
        fieldPath={fieldPath}
        suggestionAPIUrl={suggestionAPIUrl}
        suggestionAPIHeaders={{
          Accept: 'application/vnd.inveniordm.v1+json',
        }}
        initialSuggestions={[initialSuggestions]}
        placeholder={placeholder}
        required={required}
        clearable={clearable}
        multiple={multiple}
        label={
          <FieldLabel htmlFor={fieldPath} icon={labelIcon} label={label} />
        }
        noQueryMessage={i18next.t('Search for related works...')}
        {...(serializeSuggestions && { serializeSuggestions })}
        {...uiProps}
      />
    );
  }
}

RemoteRelatedWorkField.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelIcon: PropTypes.string,
  labelclassname: PropTypes.string,
  required: PropTypes.bool,
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
  clearable: PropTypes.bool,
  initialSuggestions: PropTypes.shape({
    id: PropTypes.string,
    title_l10n: PropTypes.string,
  }),
  serializeSuggestions: PropTypes.func,
}

RemoteRelatedWorkField.defaultProps = {
  fieldPath: 'metadata.related_work',
  label: i18next.t('Related works'),
  labelIcon: 'tag',
  labelclassname: 'field-label-class',
  required: true,
  multiple: false,
  placeholder: i18next.t(
    'Search for an Related Works (e.g )'
  ),
  clearable: true,
  initialSuggestions: {},
  suggestionAPIUrl: '/api/vocabularies/related_works',
  serializeSuggestions: serializeSuggestions,
};
