import { z } from "zod";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,15}$/;
export const schema = z
  .object({
    firstName: z
      .string({})
      .min(2, { message: "Ism kamida 2 ta harf bo'lishi kerak!" })
      .max(20)
      .nonempty("Ism kiriting!"),
    lastName: z
      .string()
      .min(2, { message: "Familiya kamida 2 ta harf bo'lishi kerak!" })
      .max(20),
    email: z.string().refine(value => emailRegex.test(value), {
      message: "Email xayriya@gmail.com ko'rinishda bo'lishi kerak!"
    }),
    password: z.string().refine(value => passwordRegex.test(value), {
      message:
        "Parol kamida 6 ta belgidan iborat bo'lishi va kamida bitta katta harf, bitta kichik harf, bitta raqam va bitta maxsus belgidan iborat bo'lishi kerak!"
    }),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Takroriy parol mos kelmadi!",
    path: ["confirmPassword"]
  });
