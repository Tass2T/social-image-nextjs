import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const supabase = createRouteHandlerClient({
            cookies,
        });

        const response = await supabase;
    } catch (e) {}
};

export const POST = async () => {
    console.log('salut');
};
