import React, { useCallback } from 'react';
import { HStack, VStack, Center, Avatar, Heading, IconButton, useColorModeValue } from 'native-base';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import AnimatedColorBox from './animated-color-box';
import ThemeToggle from './theme-toggle';
import { Feather } from '@expo/vector-icons';
import MenuButton from './menu-button';


const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props;
  const currentRoute = state.routeNames[state.index];

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation]);

  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation]);

  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation]);


  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('blue.50', 'darkBlue.800')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent='flex-end'>
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant='outline'
            borderColor={useColorModeValue('blue.400', 'darkBlue.600')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('blue.500', 'darkBlue.600')
            }}
          />
        </HStack>
        <Avatar
          source={require('../assets/profile-image.jpg')}
          size='xl'
          borderRadius={100}
          mb={2}
          borderColor='secondary.400'
          borderWidth={3}
        />
        <Heading mb={8} size='xl'>
          iammy
        </Heading>
        <MenuButton
          active={currentRoute === 'Main'}
          onPress={handlePressMenuMain}
          icon='inbox'
        >
          Tasks
        </MenuButton>
        <MenuButton
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
          icon='info'
        >
          About
        </MenuButton>
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  )
};

export default Sidebar;