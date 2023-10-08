import { useState, useEffect } from 'react';

const Changingtext = () => {
    
    const [arr, setArr] = useState([
      'mechanical engineering @ uwaterloo',
      'breaking into the tech industry',
      '📍toronto, ontario, canada',
    ]);
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
       let newIndex = index === (arr.length - 1) ? 0 : index + 1;
        setIndex(newIndex);
      }, 5000)
      return () => clearInterval(interval);
    })

    return (
        <p key={index} id="changingtext">{ arr[index] }</p>
    );
}
 
export default Changingtext;