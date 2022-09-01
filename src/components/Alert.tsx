import React from 'react'

const Alert = props => {
  const className = props.alert.type === 'remove' ? 'remove alert-danger'
    : props.alert.type === 'add' ? 'add alert-success' : 'warning alert-warning'

  let message = ''

  switch (className) {
    case 'remove alert-danger': message = 'Задача удалена'; break
    case 'add alert-success': message = 'Задача добавлена'; break
    case 'warning alert-warning': message = 'Что-то пошло не так'; break
    default: break
  }

  return (
    <div className={`alert ${className}`}>
      <span>
        {' '}
        <strong>Внимание!</strong>
        {' '}
        {message}
        {' '}
      </span>
      <button
        onClick={() => props.changeAlert({ show: false, type: '' })}
        type="button"
        className="alert__closeBtn close"
      >
        &times;
      </button>
    </div>
  )
}

export default Alert
