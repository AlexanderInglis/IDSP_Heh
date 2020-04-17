import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { SoftButton } from '../../IDSP_Heh/comps/Buttons'

export default {
  title: 'Welcome',
  component: Welcome,
};

export const CustomButton = () => (
  <SoftButton />
);


export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
  name: 'to Storybook',
};

