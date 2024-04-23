import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import { LeftLine, RightLine } from './design/Pricing'
import { ScrollParallax } from 'react-just-parallax'

const Pricing = () => {
  return (
    <Section id='pricing' className='overflow-hidden'>
      <div className='container relative z-2'>
        <div className='hidden relative lg:flex justify-center mb-[6.5rem]'>
          <img
            src={smallSphere}
            className='relative z-1'
            width={255}
            height={255}
            alt='Sphere'
            loading='lazy'
          />

          <ScrollParallax isAbsolutelyPositioned>
            <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
              <img
                src={stars}
                className='w-full'
                width={950}
                height={400}
                alt='Stars'
                loading='lazy'
              />
            </div>
          </ScrollParallax>
        </div>

        <Heading
          tag='Get started with Brainwave'
          title='Pay once, use forever'
        />

        <div className='relative'>
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className='flex justify-center mt-10'>
          <a
            className='text-xs font-code font-bold tracking-wider uppercase'
            href='#'
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Pricing
