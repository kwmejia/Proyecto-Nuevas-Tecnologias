const validations = {
  name: {
    validate: {
      required: true,
      minLength: 5,
    },
    message: {
      required: 'Los nombres son requeridos',
      minLength: 'El nombre debe tener al menos 5 caracteres',
    }
  },
  surname: {
    validate: {
      required: true,
      minLength: 5,
    },
    message: {
      required: 'Los apellidos son requeridos',
      minLength: 'El apellido debe tener al menos 5 caracteres',
    }
  },
  phone: {
    validate: {
      required: true,
      minLength: 10,
      maxLength: 10,
      pattern: /^[0-9]{10}$/,
    },
    message: {
      required: 'El telefono es requerido',
      minLength: 'El teléfono debe tener 10 números',
      maxLength: 'El teléfono debe tener 10 números',
      pattern: 'El teléfono solo admite números',
    }
  },
  email: {
    validate: {
      required: true,
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    message: {
      required: 'El correo es requerido',
      pattern: 'Correo no válido. Ej: correo@midominio.com',
    }
  },
  message: {
    validate: {
      required: true,
      minLength: 20,
    },
    message: {
      required: 'El mensaje es requerido',
      minLength: 'El mensaje debe tener al menos 20 caracteres',
    }
  },

}

export default validations