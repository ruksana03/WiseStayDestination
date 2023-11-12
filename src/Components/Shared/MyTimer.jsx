import  { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const MyTimer = () => {
  const targetDate = new Date('2023-12-17');

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    return difference > 0 ? difference : 0;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const remainingSeconds = Math.ceil(timeLeft / 1000);

  return (
    <div className="flex gap-5">
      <div >
        <CountdownCircleTimer
          {...timerProps}
          colors={[['#53624E']]}
          duration={remainingSeconds}
          onComplete={() => [true, 0]}
        >
          {({ remainingTime }) => formatTime(Math.floor(remainingTime / 86400))}
        </CountdownCircleTimer>
       <p className='text-lg font-poppins font-semibold'> days</p>
      </div>
      <div>
        <CountdownCircleTimer
          {...timerProps}
          colors={[['#53624E']]}
          duration={remainingSeconds}
          onComplete={() => [true, 0]}
        >
          {({ remainingTime }) => formatTime(Math.floor((remainingTime % 86400) / 3600))}
        </CountdownCircleTimer>
        
        <p className='text-lg font-poppins font-semibold'> hours</p>
      </div>
      <div>
        <CountdownCircleTimer
          {...timerProps}
          colors={[['#53624E']]}
          duration={remainingSeconds}
          onComplete={() => [true, 0]}
        >
          {({ remainingTime }) => formatTime(Math.floor((remainingTime % 3600) / 60))}
        </CountdownCircleTimer>
       
        <p className='text-lg font-poppins font-semibold'>  min</p>
      </div>
      <div>
        <CountdownCircleTimer
          {...timerProps}
          colors={[['#53624E']]}
          duration={remainingSeconds}
          onComplete={() => [true, 0]}
        >
          {({ remainingTime }) => formatTime(remainingTime % 60)}
        </CountdownCircleTimer>
        
        <p className='text-lg font-poppins font-semibold'>  sec</p>
      </div>
    </div>
  );
};

export default MyTimer;
