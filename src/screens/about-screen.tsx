import React from 'react';
import { ScrollView, Box, Text, VStack, Icon, Image, useColorModeValue } from 'native-base';
import { Feather } from '@expo/vector-icons';
import AnimatedColorBox from '../components/animated-color-box';
import Navbar from '../components/navbar';
import Masthead from '../components/masthead';
import LinkButton from '../components/link-button';


const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w='full'
    >
      <Masthead
        title='About this app'
        image={require('../assets/about-masthead.jpg')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius='20px'
        borderTopRightRadius='20px'
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt='-20px'
        pt='30px'
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems='center'>
            <Image
              source={require('../assets/iammy.jpg')}
              borderRadius='full'
              resizeMode='cover'
              w={120}
              h={120}
              alt='author'
              mb={4}
            />
          </Box>
          <Text fontSize='lg' w='full' textAlign='center'>
            This is an animated Todo app built with React Native and Expo.
          </Text>
          <LinkButton
            colorScheme='muted'
            size='lg'
            borderRadius='full'
            href='https://github.com/nhm204'
            leftIcon={
              <Icon as={Feather} name='github' size='sm' opacity={0.8} />
            }
          >
            Go to my Github profile
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size='lg'
            borderRadius='full'
            href='https://github.com/nhm204/animated-todo-with-native.git'
            leftIcon={
              <Icon as={Feather} name='code' size='sm' opacity={0.8} />
            }
          >
            Animated Todo App
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
};

export default AboutScreen;