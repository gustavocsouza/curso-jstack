import React, { useState } from "react";

import ThemeProvider from "../../context/ThemeContext";

import { Title } from './styles';
import Header from "../Header";
import Post from "../Post";

function App() {
    const [posts , setPosts] = useState([
        { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 10, read: false, removed: true },
        { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 20, read: true, removed: false},
        { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 40, read: false, removed: false },
    ]);

    function handleRefresh() {
        // Boa pratica usar o prevState quando a atualizacao do estade necessita do estado anterior
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(), 
                title: `Title#0${prevState.length + 1}`, 
                subtitle: `Sub#0${prevState.length + 1}`, 
                likes: 20,
                read: false
            }
        ]);
    }

    function handleRemovePost(postId) {
        setPosts((prevState) => prevState.map(post => (
            post.id === postId
                ? {
                    ...post,
                    removed: true
                }
                : post
        )));
    }

    return (
        <ThemeProvider>  
            <Header>
                <Title as='h2' >Posts da semana</Title>
                <button
                    onClick={handleRefresh}
                >
                    Atualizar
                </button>
            </Header>

            <hr />

            {posts.map(post => (
                <Post 
                    key={post.id}
                    onRemove={ handleRemovePost }
                    post={ post }
                />
            ))}
        </ThemeProvider>
    );
}
export default App;