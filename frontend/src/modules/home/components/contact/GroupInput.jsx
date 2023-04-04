import validations from './validations'

export default function GroupInput({ nameRegister, type = 'text', placeholder, register, errors, label, textArea }) {

  const error = errors[nameRegister]
  const validation = validations[nameRegister]
  
  return (
    <div className='group-inputs'>
      {textArea
        ? <textarea id='name' {...register(nameRegister, validation.validate)} className={error && 'error'} placeholder={placeholder}></textarea>
        : <input type={type} id='name' {...register(nameRegister, validation.validate)} className={error && 'error'} placeholder={placeholder} />
      }
      <label htmlFor="name">{label}</label>
      {error && <p>{validation.message[error.type]}</p>}
    </div>
  )
}
