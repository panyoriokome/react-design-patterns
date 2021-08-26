import tw from "twin.macro";
import { TextField } from '~/components/atoms/TextField'
import { Controller, useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

yup.setLocale({
  mixed: {
    default: '入力エラーです',
    required: ({ path }) => `${path}: 必須入力項目です`,
    oneOf: ({ values }) => `次の値のいずれかでなければなりません: ${values}`,
    notOneOf: ({ values }) => `次の値のいずれかであってはなりません: ${values}`,
    notType: ({ path, value, type }) => `${path}: 形式が違います ${type}`,

  },
  string: {
    length: ({ length }) => `${length}文字入力して下さい`,
    min: ({ min }) => `${min}文字以上入力してください`,
    max: ({ max }) => `${max}文字以内で入力して下さい`,
    matches: '形式が違います',
    email: '形式が違います',
    url: '形式が違います',
    trim: '前後にスペースを入れてはいけません',
    lowercase: '小文字でなければなりません',
    uppercase: '大文字でなければなりません',
  },
  number: {
    min: ({ min }) => `${min}以上の値を入力して下さい`,
    max: ({ max }) => `${max}以下の値を入力して下さい`,
    lessThan: ({ lessThan }) => `${lessThan}より小さい値を入力して下さい`,
    moreThan: ({ moreThan }) => `${moreThan}より大きい値を入力して下さい`,
    notEqual: ({ notEqual }) => `${notEqual}と違う値を入力して下さい`,
    positive: '正の数を入力して下さい',
    negative: '負の数を入力して下さい',
    integer: '整数を入力して下さい',
  },
  date: {
    default: '形式が違います',
    min: ({ min }) => `${min}以上の日付を入力して下さい`,
    max: ({ max }) => `${max}以下の日付を入力して下さい`,
  },
  object: {
    noUnknown: '有効なキーを持ったデータを入力して下さい',
  },
  array: {
    min: ({ min }) => `${min}個以上の値を入力して下さい`,
    max: ({ max }) => `${max}個以下の値を入力して下さい`,
  },
});

const schema = yup.object().shape({
  username: yup.string().required().label("サンプル"),
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
});



const defaultValues = {
  username: '初期値',
  firstName: null,
  age: null
}

export const Form = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: defaultValues
  })
  const { handleSubmit, formState: { errors }, register } = methods
  return (
    <div css={tw`w-full max-w-xs mx-auto`}>
      <FormProvider {...methods}>
        <form css={tw`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`} onSubmit={handleSubmit(data => console.log(data))}>
          <div css={tw`mb-4`}>
            <label css={tw`block text-gray-700 text-sm font-bold mb-2`}>
              Username
            </label>
            <Controller
              name="username"
              render={({
                field: { onChange, onBlur, value },
              }) => (
                <TextField
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <p>{errors.username?.message}</p>
          </div>
          <div css={tw`mb-4`}>
            <label css={tw`block text-gray-700 text-sm font-bold mb-2`}>
              FirstName
            </label>
            <input {...register("firstName")} css={tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`} />
            <p>{errors.firstName?.message}</p>
          </div>
          <div css={tw`mb-4`}>
            <label css={tw`block text-gray-700 text-sm font-bold mb-2`}>
              Age
            </label>
            <input {...register("age")} css={tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`} />
            <p>{errors.age?.message}</p>
          </div>
          <button type='submit' css={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-sm`}>Submit</button>
        </form>
      </FormProvider>
    </div>
  );
};


export default Form;
