// ### 1. Basic FormSubmition

// - Add a field for email
// - Log the email on the server
// - Show “Thanks for submitting!” on success

// ### 2. Required Field

// - Add password field (type="password")
// - Show error if length < 6

// ### 3. Full Name Greeting

// - Ask for `firstName` and `lastName`
// - Show: `Hello, First Last!`


const initialMessage ={
  message: ''
}   


export async function greet(prevState: {message: string}, formData: FormData): Promise<{message: string}> {
    const email = formData.get('email');
    const password = formData.get('password');
    let message = '';

    if (typeof email === 'string' && email.trim() !== '') {
        console.log(`Email submitted: ${email}`);
        message += 'Thanks for submitting! ';
    } else {
        message += 'Please provide a valid email. ';
    }
    if (typeof password === 'string' && password.length < 6) {
        message += 'Password must be at least 6 characters long.';
    }
    return { message };
}