import React, { useState } from 'react';
import { MdAccountCircle, MdInvertColors, MdPhotoCamera } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import IconInput from '../../../components/IconInput';
import { Actions, Container, Title } from './style';

export function Header() {
  
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
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
        <MdAccountCircle size={36} />
      </Actions>
    </Container>
  );
};