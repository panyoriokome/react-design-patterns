import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from "~/components/atoms/Typography"

export default {
  title: 'Example/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "デフォルトスタイル"
};


export const h3 = Template.bind({});
h3.args = {
  text: "デフォルトスタイル",
  size: 'h3'
};

