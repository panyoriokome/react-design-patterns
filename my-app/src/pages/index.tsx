import { css } from "twin.macro";
import Typography from "~/components/atoms/Typography";
import {useToast} from '~/recoil/toast'

export const Home = () => {
  const {addToast} = useToast()
  const onClick = () => {
    addToast('Test Message')
  }

  return (
    <div css={container}>
      <Typography text="デフォルトのテキスト" />
      <Typography text="Boldのテキスト" bold />
      <button onClick={onClick}>Toastを追加</button>
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
