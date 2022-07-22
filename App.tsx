/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { useState } from 'react';
import React, { type PropsWithChildren } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GoalItem from './componenet/GoalITem';
import GoalInput from './componenet/GoalInput';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [goalList, setGoalList] = useState([]);
  const [goalVisible, setGoalVisible] = useState(false);

  function startAddGoal() {
    setGoalVisible(true);
  }

  function endAddGoal() {
    setGoalVisible(false);
  }

  function addGoalHandler(entredGoalText) {
    setGoalList((currentList) => [...currentList, {
      text: entredGoalText,
      id: Math.random().toString()
    }]);
    setGoalVisible(false);
  }

  function onDeleteHandler(id) {
    setGoalList((currentList) => {
      return currentList.filter((goal) => goal.id !== id)
    }
    );
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#cdeebb' onPress={startAddGoal}  />
      <GoalInput visible={goalVisible} addGoal={addGoalHandler} onCancel={endAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return <GoalItem value={itemData.item.text} onDelete={onDeleteHandler} id={itemData.item.id} />
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  }
});

export default App;
