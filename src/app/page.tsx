'use client'
import LootboxGallery from './LootboxGallery';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='page'>
      <div className='base'>
        <div className='container'>
          <div className='titulo'>
            <div className='buttonBox'>
              <Link href="/instructions">
                <button>Instrucciones</button>
              </Link>
              <button className='volver'>Volver</button>
            </div>
            <h1><Image src="/titulo.png" width={1000} height={200} alt='titulo'></Image></h1>
          </div>
          <div className='sub-container'>
            <LootboxGallery/>
          </div>
        </div>
      </div>
    </main>
  );
}
