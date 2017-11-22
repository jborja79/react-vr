import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Video,
  VideoPano,
  VideoControl,
  MediaPlayerState,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
      };
  }

  render() {
    return (
      <View>
          <VideoPano
              playerState={this.state.playerState}
              loop
              source={[
                  asset('video.mp4', {format: 'mp4', layout: 'SPHERE'}),
              ]}
              style={{
                  transform: [{translateY: -400}, {rotateY:  140 }] //translateZ: -500
              }}

          />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
