'use client'
import { redirect } from 'next/navigation'

export default function Error() {
    return redirect("/error"); 
}  