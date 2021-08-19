import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import tw, { css, TwStyle } from "twin.macro";

import Typography from "~/components/atoms/Typography"

export default {
  title: 'Example/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "デフォルトスタイル"
};

export const Bold = Template.bind({});
Bold.args = {
  text: "デフォルトスタイル",
  bold: true
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  text: "デフォルトスタイル",
  color: "secondary"
};


export const h1 = Template.bind({});
h1.args = {
  text: "h1のテキスト",
  size: 'h1'
};

export const h2 = Template.bind({});
h2.args = {
  text: "h2のテキスト",
  size: 'h2'
};



export const h3 = Template.bind({});
h3.args = {
  text: "h3のテキスト",
  size: 'h3'
};

const styles = css`
  border-bottom: 1px solid;
`

// aaaa
export const Original = Template.bind({});
// aaaa
Original.args = {
  text: "h3のテキスト",
  size: 'h3',
  styles: styles
};