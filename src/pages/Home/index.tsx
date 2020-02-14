import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from './Header';
import Profile from './Profile';
import SelfInformation from './SelfInformation';
import Stories from './Stories';
import { StoryViewer } from './StoryViewer';
import { Container, Fixed, Responsible, RightBlock } from './style';
import Timeline from './Timeline';

export default function Home() {

  const { profile } = useParams();

  return (
    <Container>
      <Header />
      {profile && <Profile username={profile} />}
      {!profile && (
        <Responsible>
          <Timeline />
          <RightBlock>
            <Fixed>
              <SelfInformation  />
              <Stories />
            </Fixed>
          </RightBlock>
          <StoryViewer />
        </Responsible>
      )}
    </Container>
  );
};