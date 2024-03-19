import { ComponentProps } from "react";
import type { Meta, StoryFn } from '@storybook/react';
import {OnClickOutside} from "./onClickOutside/OnClickOutside";

const meta = {
  title: 'Playground/OnClickOutside',
  component: OnClickOutside,
  argTypes: {
  },
} satisfies Meta<typeof OnClickOutside>;

export default meta;

export const _OnClickOutside: StoryFn<ComponentProps<typeof OnClickOutside>> = () => {
  return <OnClickOutside />;
};
