import React from "react";

import Header from "./Header";
import Post from "./Post";

function App() {
    return (
        <>  
            <Header>
                <h2>Posts da semana</h2>
            </Header>

            <hr />

            <Post
                likes={20}
                post={{
                    title: 'titulo01',
                    subtitle: 'subtitulo01'
                }}
            />
            <Post
                likes={10}
                post={{
                    title: 'titulo02',
                    subtitle: 'subtitulo02'
                }}
            />
            <Post
                likes={42}
                post={{
                    title: 'titulo03',
                    subtitle: 'subtitulo03'
                }}
            />
        </>
    );
}
export default App;