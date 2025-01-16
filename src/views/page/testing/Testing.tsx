import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const Testing = (props: Props) => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    let animationFrame: number;

    const update = () => {
      if (isRunning) {
        const now = performance.now();
        setTime((prevTime) => prevTime + (now - lastTimeRef.current));
        lastTimeRef.current = now;
        animationFrame = requestAnimationFrame(update);
      }
    };

    if (isRunning) {
      lastTimeRef.current = performance.now();
      animationFrame = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(animationFrame);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isRunning]);

  const formatTime = (time: number) => {
    const milliseconds = Math.floor(time % 1000);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(
      milliseconds
    ).padStart(3, '0')}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className='flex h-[94vh] items-center justify-center flex-col'>
      <div className='text-6xl flex flex-col justify-center items-center border p-4'>
        <h2>{formatTime(time)}</h2>
      </div>
      <div>
        <button
          onClick={handleStartStop}
          className='p-2 m-2 border hover:bg-gray-600 font-semibold text-xl'
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button
          onClick={handleReset}
          className='p-2 m-2 border hover:bg-gray-600 font-semibold text-xl'
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Testing;
