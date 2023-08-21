import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

function Post({ post, onRemove }) {
    return (
        <>
            <article>
                <PostHeader
                    onRemove={onRemove}
                    post={{
                        id: post.id,
                        title: post.title,
                        read: post.read,
                    }}
                />
                <br />
                <small>{ post.subtitle }</small>
                <br />
                Media: { post.likes / 2 }
            </article>
            <br />
        </>
    );
}

export default Post;

Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired,
    }).isRequired,
};