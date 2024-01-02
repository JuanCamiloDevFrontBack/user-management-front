import { FormControl } from "@angular/forms";
import { LoginE } from "./login.enum";

export interface LoginI {
    [LoginE.email]: FormControl<string>;
    [LoginE.password]: FormControl<string>;
}

export interface RegisterI {
}

export interface ForgotPassI {
}