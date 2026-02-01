import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Simulate processing webhook data from external sources
    console.log('Webhook received:', data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Webhook processed successfully',
      data 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Invalid request body' 
    }, { status: 400 });
  }
}
