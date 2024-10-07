import z from 'zod';

export const RegisterBody = z.object({
    name: z.string().trim().min(2).max(125),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100)
})
    .strict()
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'Mật khẩu không khớp',
                path: ['confirmPassword']
            })
        }
    })
export type RegisterBodyType = z.TypeOf<typeof RegisterBody>

export const LoginBody = z.object({
    phoneNumber: z.string().min(8, 'Số điện thoại không hợp lệ').max(12),
    password: z.string().min(6,'Mật khẩu quá yếu').max(100),
}).strict()

export type LoginBodyType = z.TypeOf<typeof LoginBody>