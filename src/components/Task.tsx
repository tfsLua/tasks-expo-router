import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogText,
  Heading,
  ButtonGroup,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

interface TaskProps {
  text: string;
  updateMode: () => void;
  deleteTask: () => void;
}

const Task: React.FC<TaskProps> = ({ text, updateMode, deleteTask }) => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);

  const handleDelete = () => {
    setShowAlertDialog(false);
    deleteTask();
  };

  return (
    <View className="bg-white p-4 rounded-lg shadow-sm flex-row items-center justify-between mt-4">
      <Text className="text-black text-base flex-1">{text}</Text>
      <View className="flex-row items-center gap-4 ml-4">
        <TouchableOpacity onPress={updateMode}>
          <Feather name="edit" size={20} color="#000" className="p-1" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowAlertDialog(true)}>
          <AntDesign name="delete" size={20} color="#ef4444" className="p-1" />
        </TouchableOpacity>
      </View>

      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="lg">Confirmar exclusão</Heading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <AlertDialogText>
              Tem certeza que deseja excluir esta tarefa?
            </AlertDialogText>
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup space="lg">
              <Button
                variant="outline"
                action="secondary"
                onPress={() => {
                  setShowAlertDialog(false);
                }}
              >
                <ButtonText>Cancelar</ButtonText>
              </Button>
              <Button
                bg="$error600"
                action="negative"
                onPress={handleDelete}
              >
                <ButtonText>Excluir</ButtonText>
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </View>
  );
};

export default Task;
