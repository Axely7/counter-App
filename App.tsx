import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlexScreen} from './src/screens/FlexScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';

const App = () => {
  // return <HolaMundoScreen />;
  // return <CounterScreen />;
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      <FlexScreen />
    </SafeAreaView>
  );
};

export default App;
