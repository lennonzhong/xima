import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Config from "react-native-config";

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  return (
    <View >
      <Text
      >
        {Config.API_URL}
      </Text>
    </View>
  );
};

const App = () => {

  return (
    <SafeAreaView>
      <Section title="Step One"></Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
