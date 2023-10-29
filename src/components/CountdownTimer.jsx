import { useState, useEffect } from 'react';
import './CountdownTimer.css'

function CountdownTimer() {
  // Define la fecha objetivo (por ejemplo, 31 de diciembre de 2023).
  const targetDate = new Date('2023-11-04T22:00:00').getTime();

  // Calcula la diferencia de tiempo inicial.
  const calculateTimeRemaining = () => {
    const currentTime = new Date().getTime();
    const timeRemaining = targetDate - currentTime;

    if (timeRemaining <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='bi-temporizador'>
      <h1 className='bi-temporizadorTitulo'>Hora 9:30PM</h1>
      <p>
        {timeRemaining.days} dias {timeRemaining.hours} horas {timeRemaining.minutes} minutos {timeRemaining.seconds} segundos
      </p>
    </div>
  );
}

export default CountdownTimer;
