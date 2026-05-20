import { Page } from '@/components/layout'
import { Hero } from "@/components/landingPage/Hero";
import { Feature } from "@/components/landingPage/Feature";
import { Testi } from "@/components/landingPage/Testimonial";
import { Help }  from "@/components/landingPage/Help";


export default function Home() {
  return (
    <Page title="Home">
      <Hero />
      <Feature />
      <Testi />
      <Help />
    </Page>
  )
}
