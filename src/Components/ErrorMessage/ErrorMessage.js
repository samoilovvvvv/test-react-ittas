import React from 'react'
import './ErrorMessage.scss'

const ErrorMessage = props => {
  return (
    <div className={'ErrorMessage'}>
      <p>
        Не удалось найти данный город,
        приносим свои извинения
      </p>
    </div>
  )
}

export default ErrorMessage