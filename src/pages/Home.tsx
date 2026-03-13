import PageWrapper from '@components/layout/PageWrapper/PageWrapper'
import Hero from '@components/sections/Hero/Hero'
import Origem from '@components/sections/Origem/Origem'
import Umoya from '@components/sections/Umoya/Umoya'
import BussolaDBV from '@components/sections/BussolaDBV/BussolaDBV'
import CIER from '@components/sections/CIER/CIER'
import FragmentosPreview from '@components/sections/FragmentosPreview/FragmentosPreview'
import Contato from '@components/sections/Contato/Contato'

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Origem />
      <Umoya />
      <BussolaDBV />
      <CIER />
      <FragmentosPreview />
      <Contato />
    </PageWrapper>
  )
}
