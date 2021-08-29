import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { toastListState } from "../recoil/atoms/atom";
import { AnimatePresence, motion } from "framer-motion";
import {css} from 'twin.macro'

const toast = css`
  position: absolute;
  bottom: 20px;
  right: 20px;
  align-items: flex-end;
  gap: 10px;
`

const Toast: React.VFC = ({msg}) => {
  // 時間経過 or バツボタンが押された時にToastを閉じるようにする
  const [isShown, setIsShown] = useState(true)
  const duration = 3000

  const timeoutId = setTimeout(() => {
    setIsShown(false)
  }, duration)

  // TODO: clearTimeout
  useEffect(() => {
    console.log('useEffect')
  }, [timeoutId])

  return (
    <AnimatePresence>
      { isShown && (
        <motion.div
        //  key={uniqueId}
        layout
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.5 }}
        // css={toast}
       >
        <div tw="flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2">
          <div tw="text-green-500 rounded-full bg-white mr-3">
            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
            </svg>
          </div>
            <div tw="text-white max-w-xs ">
              {msg}
            </div>       
        </div>
       </motion.div>
      )}
   </AnimatePresence>
  );
};

const ToastList: React.VFC = () => {
  const todoList = useRecoilValue(toastListState);
  console.log('From Toast Component', todoList)

  return (
    <div css={toast} tw="flex flex-col">
      {todoList.map((todoItem, index) => (
        <Toast msg={todoItem} />
      ))}
    </div>
  );
};

export default ToastList;
