import React from 'react'
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Dashboard from "./dashboard/page";
import Header from './dashboard/_components/Header';

function Home() {
  return (
    <div>
      <Header/>
      <Dashboard/></div>
  )
}

export default Home

