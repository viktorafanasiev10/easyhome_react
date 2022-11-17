import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import React from 'react';
import { SignInSide } from './SignIn';

export default {
  title: 'SignIn/Page',
  component: SignInSide,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SignInSide>;

const Template: ComponentStory<typeof SignInSide> = (args) => <SignInSide { ...args } />;

export const SignInPage = Template.bind({});
