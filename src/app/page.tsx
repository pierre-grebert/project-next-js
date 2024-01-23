import Head from 'next/head'
import Image from 'next/image'
import accueil from '../../public/accueil2.jpg'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>  


    <section className="relative w-full h-screen" style={{position: 'relative'}}>
      <Image
          alt="Accueil"
          src={accueil}
          fill
        />
        <div className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <h1 className="text-5xl font-bold">
              JE SUIS PIERRE GREBERT
              </h1>
              <p className="text-xl text-center">Développeur Web en tant qu'apprenti chez Wid'op</p>
        </div>
    </section>


    </Fragment>
  )
}
