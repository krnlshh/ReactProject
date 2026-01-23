// Type definition for the sign up form fields
// This describes the shape of the object expected by the mockSignUpApi function
export type SignUpForm = {
    name: string,           // User's name
    email: string,          // User's email address
    password: string,       // User's chosen password
    confirmPassword: string // User's confirmation of the password
}
// Type definition for the login form fields
export type LoginForm = {
    email: string,
    password: string
}


// This function simulates a backend API call for user sign up.
// It takes a SignUpForm object and returns a Promise that resolves after 1 second.
// If the email is 'taken@example.com', it simulates a failure (email already taken).
// Otherwise, it simulates a successful sign up.
export const mockSignUpApi = (form: SignUpForm) => {
    return new Promise<{ success: boolean; message: string }>((resolve) => {
        setTimeout(() => {
            // Simulate an email already taken error
            if (form.email === "taken@example.com") {
                resolve({ success: false, message: "Email already taken" });
            } else {
                // Simulate a successful sign up
                resolve({ success: true, message: "Sign up successful" });
            }
        }, 1000); // Simulate 1 second network delay
    });
}


// This function simulates a backend API call for user login.
// It takes a LoginForm object and returns a Promise that resolves after 1 second.
// If the email and password match the hardcoded user, it simulates a successful login.
// Otherwise, it simulates a login failure.
export const mockLoginApi = (form: LoginForm) => {
    return new Promise<{ success: boolean; message: string }>((resolve) => {
        setTimeout(() => {
            if (form.email === "test@example.com" && form.password === "123456") {
                resolve({ success: true, message: "Login successful" });
            } else {
                resolve({ success: false, message: "Invalid email or password" });
            }
        }, 1000);
    });
}