import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  const startAddGoalHandler = () => {
    setModalVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalVisible(false)
  }

  const addGoalHandler = (enteredGoal) => {
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      {
        text: enteredGoal,
        id: Math.random().toString()
      }
    ]);
    endAddGoalHandler()
  }

  const deleteGoalHandler = (id) => {
    setCourseGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  return(
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.appContainer}>
        <Button 
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => {
              return(
                <GoalItem
                  text = {itemData.item.text}
                  id = {itemData.item.id}
                  onDeleteItem = {deleteGoalHandler}
                />
              );
            }}
            keyExtractor= {(item, index) => {
              return item.id
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  )
}

const styles =StyleSheet.create({
  appContainer : {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccccc',
    width: '70%',
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding:8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: 'white'
  }
});