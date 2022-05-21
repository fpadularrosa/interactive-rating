import {useState, useEffect} from 'react';
import star from '../utils/icon-star.svg';
import Image from 'next/image';
import thanks from '../utils/illustration-thank-you.svg'
export default function Home() {
  const [active, setActive] = useState(false);
  const [rate, setRate] = useState('');

  return (
    <>
      {!active && <div class="container">
          <div className='flex items-center p-3 bg-gray-700 rounded-full w-9'>
            <Image src={star} width='14' height='13'/>
          </div>

          <h2 class="text-3xl text-gray-100 my-6">How did we do?</h2>
          <p class="text-lg max-w-xl text-gray-400 mb-10">Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!</p>
          <ul className='grid grid-cols-5 gap-3 mb-10'>
            <li><button onClick={()=> setRate(1)} className='w-12 h-12 pt-1 transition-all duration-150 bg-gray-700 rounded-full btn-number focus:text-white hover:text-white focus:bg-gray-400'>1</button></li>
            <li><button onClick={()=> setRate(2)} className='w-12 h-12 pt-1 transition-all duration-150 bg-gray-700 rounded-full btn-number focus:text-white hover:text-white focus:bg-gray-400'>2</button></li>
            <li><button onClick={()=> setRate(3)} className='w-12 h-12 pt-1 transition-all duration-150 bg-gray-700 rounded-full btn-number focus:text-white hover:text-white focus:bg-gray-400'>3</button></li>
            <li><button onClick={()=> setRate(4)} className='w-12 h-12 pt-1 transition-all duration-150 bg-gray-700 rounded-full btn-number focus:text-white hover:text-white focus:bg-gray-400'>4</button></li>
            <li><button onClick={()=> setRate(5)} className='w-12 h-12 pt-1 transition-all duration-150 bg-gray-700 rounded-full btn-number focus:text-white hover:text-white focus:bg-gray-400'>5</button></li>
          </ul>
          <div className='text-center'>
            <button onClick={()=> setActive(true)} class='btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full' type="submit">Submit</button>
          </div>
      </div>}
      {active && <ThanksYou rate={rate} setActive={setActive}/>}
    </>
  )
}

const ThanksYou = ({rate, setActive}) => {
  return(
    <div className='container'>
      <div className='flex justify-center mb-5'>
        <Image src={thanks} alt='ty'/>
      </div>
      <div className='flex items-center justify-center'>
        <p className='p-rating bg-gray-700 rounded-full text-center text-sm px-4 pt-1  '>You selected {rate} out of 5</p>
      </div>
      <h2 className='my-6 text-3xl text-center text-gray-100'>Thank You</h2>
      <p className='mb-10 text-center text-gray-400'>
        We appreciate you taking the time to give a rating.
        If you ever need more support, don`t hesitate to get in touch!
      </p>
      <div className='text-center'>
        <button onClick={()=> setActive(false)} class='btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full' type="submit">Rate Again</button>
      </div>
    </div>
  )
}