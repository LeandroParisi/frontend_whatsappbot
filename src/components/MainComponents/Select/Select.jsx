import React from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.scss'

const Select = ({
  options, selected, setOption, placeholder,
}) => {
  const onChange = ({ target }) => {
    const { options: inputOptions, options: { selectedIndex } } = target
    const { value, id } = inputOptions[selectedIndex]
    setOption('selectedBranch', { name: value, id })
  }

  return (
    <select onChange={onChange}>
      <option
        value=""
        selected={!selected.name}
        disabled
        className={styles.placeholder}
      >
        {placeholder}
      </option>
      {options && options.map(({ name, id }) => (
        <option value={name} id={id} key={id} selected={name === selected}>{name}</option>
      ))}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setOption: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  selected: PropTypes.shape({}).isRequired,
}

Select.defaultProps = {
  placeholder: '',
}

export default Select
