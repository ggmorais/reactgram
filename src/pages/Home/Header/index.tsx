import React, { useState } from 'react';
import { MdSearch, MdAccountCircle } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FiHome, FiCompass, FiHeart } from 'react-icons/fi';

import './styles.css';

export function Header() {
  
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem('auth') || '');

  return (
    <div className="header-container">
      <div className="centered">
        <h2 onClick={() => history.push('/')}>Reactgram</h2>
        <label className="search" htmlFor="search-input">
          <MdSearch size={14} />
          <input id="search-input" type="text" placeholder="Search" />
        </label>
        <div className="icons">
          <FiHome size={24} />
          <FiCompass size={24} />
          <FiHeart size={24} />
          <MdAccountCircle size={24} />
        </div>
      </div>
    </div>
  );

  // return (
  //   <Container className="container">
  //     <div onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>
  //       {/* <MdPhotoCamera size={36} /> */}
  //       <Title>Reactgram</Title>
  //     </div>
  //     <div>
  //       <IconInput 
  //         value={search} 
  //         onChange={e => setSearch(e.target.value)} 
  //         placeholder="Search" 
  //       />
  //     </div>
  //     <Actions>
  //       <MdInvertColors size={36} onClick={() => dispatch({ type: 'SWITCH_THEME' })} />
  //       <MdAccountCircle size={36} onClick={() => history.push('/' + user.username) } />
  //     </Actions>
  //   </Container>
  // );
};