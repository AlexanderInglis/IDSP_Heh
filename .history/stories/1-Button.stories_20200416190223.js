import React from 'react';
import { action } from '@storybook/addon-actions';
import { softButton } from '../comps/Buttons';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <softButton />
);
