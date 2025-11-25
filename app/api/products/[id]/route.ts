// ...existing code...
import { NextResponse, NextRequest } from "next/server";

interface Params {
    id: string;
}

export async function GET(nextRequest: Request, { params }: { params: Params }) {
    const id = params.id;
    return NextResponse.json({
        id,
        name: `product ${id} name`,
    });
}

export async function POST(nextRequest: Request, { params }: { params: Params }) {
    const body = await nextRequest.json();
    return NextResponse.json({
       message: `Product ${params.id} created`,
       data: body
    }, { status: 201 });
}
