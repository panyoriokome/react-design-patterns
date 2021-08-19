import tw, { css, TwStyle } from "twin.macro";
import { SerializedStyles } from "@emotion/react";

const SizePattern = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
} as const;
type SizePattern = typeof SizePattern[keyof typeof SizePattern];

const ColorPattern = {
  primary: "primary",
  secondary: "secondary",
} as const;
type ColorPattern = typeof ColorPattern[keyof typeof ColorPattern];

export type TypographyProps = {
  /**
  * 表示する文字
  */
  text: string;
  /**
  * 太字で表示するか
  */
  bold?: boolean;
  /**
  * 文字の大きさを指定
  */
  size?: SizePattern;
  /**
  * 
  */
  color?: ColorPattern;
  /**
  * twもしくはcssで適用するスタイルを指定
  */
  styles?: TwStyle | SerializedStyles;
};

/**
 * 汎用的に使用できるテキストのComponent
 *
 * @component
 * @example
 * const text = 'サンプルテキスト'
 * return (
 *   <Typography text={text} />
 * )
 */
const Typography = ({ text, bold, size, color, styles }: TypographyProps) => {
  // sizeのPropsによって適用するスタイルを変更する
  const sizeStyle =
    size === SizePattern.h1
      ? h1
      : size === SizePattern.h2
        ? h2
        : size === SizePattern.h3
          ? h3
          : "";

  // colorのPropsによって適用するスタイルを変更する
  const colorStyle =
    color === ColorPattern.primary
      ? primary
      : color === ColorPattern.secondary
        ? secondary
        : "";

  return (
    <div
      css={[typo, bold && boldStyle, sizeStyle, colorStyle, styles && styles]}
    >
      {text}
    </div>
  );
};

export default Typography;

const color = "#d04221";

const typo = css`
  color: ${color};
`;

const boldStyle = tw`
  font-bold
`;

const h1 = tw`
  text-4xl
`;

const h2 = tw`
  text-3xl
`;

const h3 = tw`
  text-2xl
`;

const primary = tw`
  text-blue-700
`;

const secondary = tw`
  text-gray-800
`;
