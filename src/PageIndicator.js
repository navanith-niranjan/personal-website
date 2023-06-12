import { useState } from 'react';

const PageIndicator = props => {

    const [activeindicator, setactiveindicator] = useState(1);

    if (activeindicator !== props.pageNum) {
        setactiveindicator(props.pageNum);
    }

    return ( 
        <div className="line">
            <div key = {props.pageNum} className={"indicator" + activeindicator}><p>{activeindicator}</p></div>
        </div>
    );
}
 
export default PageIndicator;