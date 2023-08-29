import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';


export default function Header({ onToggleTheme, selectedTheme }) {
  const history = useHistory();
  console.log(history);

  const handleNavigate = () => {
    history.push('/posts');
  }
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        onClick={onToggleTheme} 
        type="button"
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button
        style={{
          color: '#fff'
        }}  
        onClick={handleNavigate}
      >Posts</button>
    </Container>
  );
}