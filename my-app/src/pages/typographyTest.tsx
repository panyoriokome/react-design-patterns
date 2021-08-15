import tw, { css } from "twin.macro";
import Typography from "~/components/atoms/Typography";

export const TypographyTest = () => {
  return (
    <div css={container}>
      <Typography text="デフォルトのテキスト" />
      <Typography text="Boldのテキスト" bold />
      <Typography text="h1のテキスト" size="h1" />
      <Typography text="h2のテキスト" size="h2" />
      <Typography text="h3のテキスト" size="h3" />
      <Typography text="primaryのテキスト" color="primary" />
      <Typography text="secondaryのテキスト" color="secondary" />
      <Typography
        text="twを渡したテキスト"
        size="h1"
        bold
        styles={testStyleTw}
      />
      <Typography
        text="cssを渡したテキスト"
        size="h1"
        bold
        styles={testStyleCss}
      />
    </div>
  );
};

const container = css`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const testStyleTw = tw`
  mt-10
`;

const testStyleCss = css`
  ${tw`bg-purple-200`}
`;

export default TypographyTest;
