import { css } from "twin.macro";
import Typography from "~/components/atoms/Typography";

export const Home = () => {
  return (
    <div css={container}>
      <Typography text="デフォルトのテキスト" />
      <Typography text="Boldのテキスト" bold />
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

export default Home;
