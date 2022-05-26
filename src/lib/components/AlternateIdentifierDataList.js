import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { FieldLabel, TextField } from 'react-invenio-forms';
import { i18next } from '@translations/i18next';

export class AlternateIdentifierDataList extends Component {

  // Use to generate id used to associate datalist with input field.
  uuid = uuidv4();

  /**
   * Generate label value
   *
   * @param {object} option - back-end option
   * @returns {string} label
   */
   _label = (option) => {
    return (
      `${option.type_name}${(option.subtype_name ? ' / ' + option.subtype_name : '')}`
    );
  };

  render() {
    const {
      fieldPath,
      label,
      labelIcon,
      required,
      placeholder,
      options,
    } = this.props;
    return (
      <>
        <TextField
          optimized={true}
          list={`alternate-identifier-list-${this.uuid}`}
          placeholder={placeholder}
          fieldPath={fieldPath}
          required={required}
          label={
            <FieldLabel htmlFor={fieldPath} icon={labelIcon} label={label} />
          }
        />
        <datalist id={`alternate-identifier-list-${this.uuid}`}>
          {options.map((option) => (
            <option key={option.id} value={this._label(option)}>{this._label(option)}</option>
          ))}
        </datalist>
      </>
    );
  }
}

AlternateIdentifierDataList.propTypes = {
  fieldPath: PropTypes.string,
  label: PropTypes.string,
  labelIcon: PropTypes.string,
  labelclassname: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      type_name: PropTypes.string,
      subtype_name: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
}

AlternateIdentifierDataList.defaultProps = {
  fieldPath: 'metadata.alternate_identifier',
  label: i18next.t('Alternate identifiers'),
  labelIcon: 'tag',
  labelclassname: 'field-label-class',
  placeholder: i18next.t(
    'Search for an Alternate Identifier (e.g )'
  ),
  required: false,
};

export default AlternateIdentifierDataList;
