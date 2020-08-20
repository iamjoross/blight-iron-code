import React from 'react';
import styled from 'styled-components/macro';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Mapbox = ReactMapboxGl({
  // accessToken: 'aa',
  accessToken:
    'pk.eyJ1IjoiaWFtam9yb3NzIiwiYSI6ImNpaXZhaDY5dTAwM2N0eGtuOHZzanM5ZmYifQ.Lg-K96XS1ExxXmQ1W9BBIw',
});

const config = {
  londonCycle: 'mapbox://styles/mapbox/light-v9',
  light: 'mapbox://styles/mapbox/light-v9',
  dark: 'mapbox://styles/mapbox/dark-v9',
  basic: 'mapbox://styles/mapbox/basic-v9',
  outdoor: 'mapbox://styles/mapbox/outdoors-v10',
};

export const Map: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Mapbox
        style={config.light}
        containerStyle={{
          height: '100vh',
          width: '100vw',
          paddingTop: '80px',
          marginTop: '-80px',
          position: 'sticky',
          top: '0px',
          background: '#ccc',
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Mapbox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100% - 840px) !important;
  bottom: 0px !important;
  left: auto !important;
  position: absolute !important;
  right: 0px !important;
  top: 0px !important;

  div {
    position: sticky;
  }
`;
