import { useEffect, useRef, useState } from 'react';
export function useTimer({ duration = 0, countdown = false, onExpire } = {}) {
  const [seconds, setSeconds] = useState(countdown ? duration : 0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds(prev => {
        if (countdown) { if (prev <= 0) { clearInterval(intervalRef.current); onExpire?.(); return 0; } return prev - 1; }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [countdown, onExpire]);
  const h = Math.floor(seconds / 3600), m = Math.floor((seconds % 3600) / 60), s = seconds % 60;
  return { seconds, formatted: `${h<10?'0':''}${h}:${m<10?'0':''}${m}:${s<10?'0':''}${s}` };
}
