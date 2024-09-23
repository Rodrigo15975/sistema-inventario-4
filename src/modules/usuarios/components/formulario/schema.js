import {
  generalValidation,
  messageValidation,
} from '@/modules/login/regex/regex'
import { z } from 'zod'

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

  username: z.string().min(1, {
    message: 'Contraseña requerida',
  }),

  role: z.string(),
})
