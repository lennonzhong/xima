import React, { useEffect, type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  Text,
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


  useEffect(() => {
    getTestData();
  }, [])

  const getTestData = () => {
    fetch("http://www.baidu.com").then((res: any) => {
      return res.text()
    }).then(res => {
      console.log(res);

    })
  }

  return (
    <SafeAreaView>
      <Section title="Step One"></Section>
    </SafeAreaView>
  );
};

export default App;
