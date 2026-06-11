import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { 
  Input, 
  InputField, 
  Button, 
  ButtonText 
} from "@gluestack-ui/themed";

import TaskList from '../src/components/TaskList';
import { useTaskStore } from '../src/store/useTaskStore';

export default function HomeScreen() {
  const tasks = useTaskStore((state) => state.tasks);
  const fetchTasks = useTaskStore((state) => state.fetchTasks);
  const addTask = useTaskStore((state) => state.addTask);

  const [text, setText] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = () => {
    if (!text.trim()) return;

    addTask(text, false, null, () => setText(''));
  };

  return (
    <SafeAreaView className="flex-1 p-5 bg-gray-100">
      <Text style={styles.title}>Minhas Tarefas</Text>

      <View className="flex-row gap-2.5">
        <Input className="flex-1">
          <InputField
            value={text}
            onChangeText={setText}
            placeholder="Nova tarefa"
          />
        </Input>

        <Button onPress={handleAdd} action="primary">
          <ButtonText>Adicionar</ButtonText>
        </Button>
      </View>

      <Text style={styles.counter}>
        Total de tarefas: {tasks.length}
      </Text>

      <TaskList filter="all" onUpdate={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    marginTop: 20,
    marginBottom: 10,
  },
});
