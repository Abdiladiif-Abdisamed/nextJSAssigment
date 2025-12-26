// ### 1. Basic FormSubmition

import { useFormState } from "react-dom";
import { greet } from "./form";

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

const FormSubmition = () => {
    const [state, formState] = useFormState(greet, initialMessage);
  return (
    <div>
    <form action={formState}>
        <input type="text" name="email" placeholder="Enter your email" />
        <input type="password" name="password" placeholder="Enter your password" />
        <button type="submit">Submit</button>
        {
            state.message && <p>{state.message}</p>




        }
    </form>     
    </div>
  )
}

export default FormSubmition