import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            {description: 'Learn React', complete: true,},
            {description: 'Learn Next.js'},
            {description: 'Learn TypeScript'},
            {description: 'Learn Prisma'},
        ]
    })


  return NextResponse.json({ message: 'Seed Executed' })
}