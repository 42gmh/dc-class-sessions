import React from 'react';

import {
    useParams
} from 'react-router-dom';

// eslint-disable-next-line 
export default (props) => {
    // Get the "id" (our Array index) from React Router.
    const z  = useParams();
    console.log("This is useParams:" + JSON.stringify(z));
    const { id } = useParams();

    // Use the id to get a specific post from the Array.
    const post = props.posts[id];
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>

    );
};
