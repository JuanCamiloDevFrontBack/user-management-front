import { LoginE } from "./login.enum";

export interface LoginI<T> {
    [LoginE.email]: T;
    [LoginE.password]: T;
}

export interface RegisterI {
}

export interface ForgotPassI {
}