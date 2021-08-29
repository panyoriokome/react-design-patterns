import { useSetRecoilState, useRecoilValue } from 'recoil'
import { toastListState} from '~/recoil/atoms/atom'

export const useToast = () => {
  const toastList = useRecoilValue(toastListState)
  const setStateToastList = useSetRecoilState(toastListState)

  // Todoを追加する
  const addToast = (msg: any) => {
    setStateToastList([...toastList, msg])
  }

  return {
    addToast: addToast
  }
      
   
    // // useSetRecoilStateを用いる場合
    // useAddTodoItem: () => {
    //   const setState = useSetRecoilState(todoState)
   
    //   return React.useCallback(
    //     (label: string) =>
    //       setState((prev) => {
    //         const newItem: TodoItem = {
    //           id: createNewId(),
    //           label
    //         }
    //         return {
    //           ...prev,
    //           todos: [...prev.todos, newItem]
    //         }
    //       }),
    //     [createNewId]
    //   )
    // }
  }