import { NextResponse } from "next/server";


export async function GET() {
    const data = [
        { id: 1, name: 'Product A', price: 29.99 },
        { id: 2, name: 'Product B', price: 49.99 },
    ];
    return NextResponse.json({ message: 'Products API', data });
}