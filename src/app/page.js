'use client'
import { Provider } from 'react-redux';
import store from '@/Redux/Store'; // Assuming you have already created and configured your Redux store
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useSelector } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

function Home() {
  const theme = useSelector((state) => state.theme.mode);
  return (
      <main className={`w-full h-screen ${ theme ===true? 'bg-zinc-800 text-zinc-100':'bg-zinc-100 text-zinc-800'} `}>
        <Navbar />
        <div>
          <Hero />
        </div>
      </main>
  );
}
