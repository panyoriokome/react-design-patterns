import tw, { css } from "twin.macro";
import { TextField } from '~/components/atoms/TextField'
import { Controller, useForm, FormProvider, useFormContext } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  firstName: yup.string().required(),
  // age: yup.number().positive().integer().required(),
});

const defaultValues = {
  username: '初期値'
}

export const Form = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    // mode: "onBlur",
    defaultValues: defaultValues
    // 入力欄から離れた（onBlur）タイミングでバリデーションが行われる
  })
  const { handleSubmit, formState: { errors } } = methods
  // const {
  //   formState: { errors },
  //   register,
  // } = useForm({
  //   resolver: yupResolver(schema)
  // })
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
              defaultValue="初期値"
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
          {/* <div css={tw`mb-4`}>
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
          </div> */}
          <button type='submit' css={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-sm`}>Submit</button>
        </form>
      </FormProvider>
    </div>
  );
};


export default Form;
