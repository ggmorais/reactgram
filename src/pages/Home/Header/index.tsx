import React, { useState } from 'react';
import { MdAccountCircle, MdInvertColors, MdPhotoCamera } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import IconInput from '../../../components/IconInput';

import { Actions, Container, Title } from './style';

export function Header() {
  
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem('auth') || '');

  return (
    <Container>
      <div onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>
        <MdPhotoCamera size={36} />
        <Title>Reactgram</Title>
      </div>
      <div>
        <IconInput 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
          placeholder="Search" 
        />
      </div>
      <Actions>
        <MdInvertColors size={36} onClick={() => dispatch({ type: 'SWITCH_THEME' })} />
        <MdAccountCircle size={36} onClick={() => history.push('/' + user.username) } />
      </Actions>
    </Container>
  );
};