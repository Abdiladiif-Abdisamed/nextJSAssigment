'use server';

type GreetResponse = {
    message: string;
}

export async function greet(prevState: GreetResponse, formData: FormData): Promise<GreetResponse> {
    const name = formData.get('name');
    if (typeof name !== 'string' || name.trim() === '') {
        return { message: 'Please provide a valid name.' };
    }
    return { message: `Hello, ${name}!` };
}