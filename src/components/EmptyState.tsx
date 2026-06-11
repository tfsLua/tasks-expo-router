import React from 'react';
import { View } from 'react-native';
import { Heading, Text } from "@gluestack-ui/themed";

const EmptyState = () => {
  return (
    <View className="flex-1 justify-center items-center p-10 mt-10">
      <Heading size="xl" className="text-gray-800 mb-2">
        Nenhuma tarefa encontrada
      </Heading>
      <Text className="text-gray-500 text-center">
        Você ainda não tem tarefas cadastradas. Adicione uma nova tarefa acima para começar!
      </Text>
    </View>
  );
};

export default EmptyState;
