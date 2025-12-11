import * as zod from "zod"

export const registerSchema = zod.object({
    name: zod.string()
        .nonempty("Name is reqired")
        .min(3, "Name must be 3 chars at least")
        .max(20, "Name must be 20 chars at most"),
    email: zod.string()
        .nonempty("Email is reqired")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email is Invaild"),
    password: zod.string()
        .nonempty("Password is reqired")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Minimum eight characters, at least one letter capital, one number and one special character:"),
    rePassword: zod.string()
        .nonempty("Confirm password is reqired"),
    dateOfBirth: zod.coerce.date().refine((date) => {
        const dateBirth = date.getFullYear();
        const nowDate = new Date().getFullYear();
        const age = nowDate - dateBirth;
        return age >= 18;
    }, { message: 'your age must be at least 18 years old' }),
    gender: zod.string()
        .nonempty("Gender is reuired")
        .regex(/^(male|female)$/, "Gender is vaild"),

}).refine((data) => data.password === data.rePassword, { message: 'Confirmed password and password must be matched', path: ['repassword'] })


