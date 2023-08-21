import React from 'react';
import PropTypes from 'prop-types';

function Post({ post, likes }) {
    return (
        <>
            <article>
                <strong>{ post.title }</strong>
                <br />
                <small>{ post.subtitle }</small>
            </article>
            Media: { likes / 2 }
            <br />
            <br />
        </>
    );
}

export default Post;

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
};