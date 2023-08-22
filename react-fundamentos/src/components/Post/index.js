import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import { Container, Rate, Subtitle } from './styles';

function Post({ post, onRemove }) {
    return (
        <Container removed={post.removed}>
            <PostHeader
                onRemove={onRemove}
                post={{
                    id: post.id,
                    title: post.title,
                    read: post.read,
                }}
            />
            <Subtitle>{ post.subtitle }</Subtitle>
            <Rate>Media: { post.likes / 2 }</Rate>
        </Container>
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
        removed: PropTypes.bool.isRequired,
    }).isRequired,
};