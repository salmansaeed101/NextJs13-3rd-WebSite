"use client"

import Cta from "./components/cta/Cta";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import Highlights from "./components/highlights/Highlights";
import Topcontainer from "./components/topcontainer/Topcontainer";



export default function Home() {
  return (
    <>
      <Header/>
      <Topcontainer/>
      <Features/>
      <Cta/>
      <Highlights/>
      </> 
  )
}
