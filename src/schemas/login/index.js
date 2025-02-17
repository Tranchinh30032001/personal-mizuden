import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'メールアドレスを入力してください。' })
    .email({ message: '有効なメールアドレスを入力してください。' }),
  password: z
    .string()
    .min(8, { message: 'パスワードは8文字以上である必要があります。' })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: 'パスワードは文字と数字を含める必要があります。' })
})
