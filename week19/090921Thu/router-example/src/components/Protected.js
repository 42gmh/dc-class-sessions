import React from 'react';

import { useHistory } from 'react-router';

// eslint-disable-next-line 
export default (props) => {

    const history = useHistory();

    console.log(props);

    if (!props.li) {
        history.push('/');
        return null;
    } else {
        return (
            <>
                {props.children}
            </>
        )
    }    
}