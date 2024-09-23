import { z } from 'zod'
import { generalValidation, messageValidation } from '../../regex/regex'

export const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email requerido',
    })
    .regex(generalValidation.matchesEmail, {
      message: messageValidation.msgEmail,
    }),
  password: z.string().min(1, {
    message: 'Contraseña requerida',
  }),
})
