import React, { useEffect, useState } from 'react';

const Counter = ({ icon, number, label, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = number / (2000 / delay);
    let current = 0;
    const counter = setInterval(() => {
      current += increment;
      setCount(Math.min(Math.floor(current), number));
      if (current >= number) clearInterval(counter);
    }, delay);
    return () => clearInterval(counter);
  }, [number, delay]);

  return (
    <div className="col-sm-4">
      <div className="border rounded p-1">
        <div className="border rounded text-center p-4">
          <i className={`fa ${icon} fa-2x fontColor mb-2`}></i>
          <h2 className="mb-1">{count}</h2>
          <p className="mb-0">{label}</p>
        </div>
      </div>
    </div>
  );
};

const Counters = () => (
  <div className="row g-3 pb-4">
    <Counter icon="fa-hotel" number={1234} label="Rooms" delay={10} />
    <Counter icon="fa-users-cog" number={1234} label="Staffs" delay={30} />
    <Counter icon="fa-users" number={1234} label="Clients" delay={50} />
  </div>
);

export default Counters;
