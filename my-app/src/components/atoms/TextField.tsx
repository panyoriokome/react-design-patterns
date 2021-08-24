import {ChangeEvent, useCallback} from 'react'
import tw from 'twin.macro'

type Props = {
    value: string
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void
    onBlur: () => void
}

export const TextField: React.VFC<Props> =({value, onChange, onBlur}) => {
    return <input css={textField} type="text" value={value} onChange={onChange} onBlur={onBlur} />
}

const textField = tw`
shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
`