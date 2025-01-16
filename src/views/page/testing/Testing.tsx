import React, { useEffect, useState } from 'react'

type Props = {}

const Testing = (props: Props) => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10); // Increment time by 10ms
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isRunning]);

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className='flex h-[94vh]  items-center justify-center flex-col'>
    <div className='text-6xl flex  flex-col justify-center items-center border p-4'>
      <h2>{formatTime(time)}</h2>
 
    </div>
    <div>
      <button onClick={handleStartStop} className='p-2 m-2 border hover:bg-gray-600 font-semibold text-xl'>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}  className='p-2 m-2 border hover:bg-gray-600 font-semibold text-xl'>
        Reset
      </button>
      </div>
  
    </div>
  )
}

export default Testing