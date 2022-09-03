import React, { useCallback, useState } from 'react';
import { Icon, VStack, useColorModeValue, Fab } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import shortid from 'shortid';
import ThemeToggle from '../components/theme-toggle';
import TaskList, { TaskItemData } from '../components/task-list';
import AnimatedColorBox from '../components/animated-color-box';


const initialData = [
  {
    id: shortid.generate(),
    subject: 'Learn React',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Make Netflix website',
    done: false
  }
];


const MainScreen = () => {
  const [ data, setData ] = useState(initialData);
  const [ editingItemId, setEditingItemId ] = useState<string | null>(null);


  const handleToggleTaskItem = useCallback((item: TaskItemData) => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        done: !item.done
      };
      return newData;
    })
  }, []);


  const handleChangeTaskItemSubject = useCallback((item: TaskItemData, newSubject: string) => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        subject: newSubject
      };
      return newData;
    })
  }, []);


  const handleFinishEditingTaskItem = useCallback((_item: TaskItemData) => { setEditingItemId(null) }, []);
  const handlePressTaskItemLabel = useCallback((item: TaskItemData) => { setEditingItemId(item.id) }, []);

  const handleRemoveItem = useCallback((item: TaskItemData) => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item);
      return newData;
    })
  }, []);

  
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w='full'
    >
      <VStack space={5} alignItems='center' w='full'>
        <TaskList 
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
        <ThemeToggle />
      </VStack>
      <Fab
        position='absolute'
        renderInPortal={false}
        size='sm'
        icon={<Icon color='white' as={<AntDesign name='plus' />} size='sm' />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate();
          setData([
            {
              id,
              subject: '',
              done: false
            },
            ...data
          ])
          setEditingItemId(id);
        }}
      />
    </AnimatedColorBox>
  )
};

export default MainScreen;