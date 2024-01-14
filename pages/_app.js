import {motion, AnimatePresence} from 'framer-motion';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { AppProvider } from '@/context/context';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <AppProvider>
      <AnimatePresence>
          <motion.div key={router.pathname}>

            <Component {...pageProps} />

            <motion.div
              className={cn('absolute top-0 left-0 w-full h-screen origin-bottom', pathname === "/" ? "bg-white" : 'bg-black')}
              initial={{scaleY: 0}}
              animate={{scaleY: 0}}
              exit={{scaleY: 1}}
              transition={{duration: .5, ease: [0.22, 1, 0.36, 1]}}
            ></motion.div>

            <motion.div
              className='absolute top-0 left-0 w-full h-screen origin-top'
              initial={{scaleY: 1}}
              animate={{scaleY: 0}}
              exit={{scaleY: 0}}
              transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            ></motion.div>

          </motion.div>
      </AnimatePresence>
    </AppProvider>
  );
}
