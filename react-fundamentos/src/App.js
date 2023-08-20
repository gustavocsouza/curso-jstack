import React from "react";

import Post from "./Post";

function App() {
    return (
        <>
            <h1>Component App</h1>
            <h2>Posts da semana</h2>

            <hr />

            <Post
                post={{
                    title: 'titulo01',
                    subtitle: 'subtitulo01'
                }}
            />
            <Post
                post={{
                    title: 'titulo02',
                    subtitle: 'subtitulo02'
                }}
            />
            <Post
                post={{
                    title: 'titulo03',
                    subtitle: 'subtitulo03'
                }}
            />
        </>
    );
}
export default App;