"use client"

// import {ChildProps}
import { ClerkProvider , useAuth } from "@clerk/clerk-react"
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
export const 