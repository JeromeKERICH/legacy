import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function InactivityHandler({ timeout = 5 * 60 * 1000 }) {
  // Default: 5 minutes (in milliseconds)
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const timerRef = useRef(null);

  // Reset the timer whenever user interacts
  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (user) {
      timerRef.current = setTimeout(() => {
        logout();
        alert("You’ve been logged out due to inactivity.");
        navigate("/login");
      }, timeout);
    }
  };

  useEffect(() => {
    if (!user) return; // Only track if user is logged in

    // Events considered as "activity"
    const events = ["mousemove", "click", "keydown", "scroll", "touchstart"];

    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer(); // start timer initially

    // Cleanup on unmount
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [user]);

  return null; // this component just listens in background
}
