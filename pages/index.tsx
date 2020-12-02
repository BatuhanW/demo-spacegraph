import { forwardRef } from 'react';
import Link from 'next/link';
import { Layout, Button } from '../src/components';
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className="absolute overflow-hidden right-0 hidden md:block">
        <div className={style.overlay} />
        <div className="h-screen">
          <img className="h-full" src="spaceman.png" alt="astronaut" />
        </div>
      </div>
      <div className="h-full w-full lg:pt-32 px-10 md:px-20 lg:px-40 xl:px-56 z-10">
        <div className="tracking-widest mb-16">
          <div className="md:w-3/5 text-3xl font-bold mb-5">
            Space Exploration Technologies Corporation
          </div>
          <div className="md:w-1/2 text-lg leading-7">
            SpaceX designs, manufactures and launches advanced rockets and
            spacecraft. The company was founded in 2002 to revolutionize space
            technology, with the ultimate goal of enabling people to live on
            other planets.
          </div>
        </div>
        <div className="flex gap-5">
          <Link href="launches" as="launches">
            <a>
              <Button text="LAUNCHES" />
            </a>
          </Link>
          <Link href="history" as="history">
            <a>
              <Button text="HISTORY" />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
