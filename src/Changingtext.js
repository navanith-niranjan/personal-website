import { useState, useEffect } from 'react';

const Changingtext = () => {
    
    const [arr, setArr] = useState(['third year student @ uwaterloo', 'studying mechanical engineering', 'breaking into the tech industry']);
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
       let newIndex = index === (arr.length - 1) ? 0 : index + 1;
        setIndex(newIndex);
      }, 3000)
      return () => clearInterval(interval);
    })

    return (
        <p key={index} id="changingtext">{ arr[index] }</p>
    );
}
 
export default Changingtext;