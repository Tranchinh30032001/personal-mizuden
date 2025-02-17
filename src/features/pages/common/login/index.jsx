import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button/Button'
import Input from '@/components/ui/Input/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/schemas/login'
import { APP_URL } from '@/constants/appRoutes'
import LayoutContainer from '@/components/containers/LayoutContainer'

export default function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = form.handleSubmit((data) => {
    if (data) {
      localStorage.setItem('token', 'token')
      navigate(APP_URL.PORTAL)
    }
  })

  return (
    <LayoutContainer className='bg-gray-container'>
      <div className='w-full max-w-xl space-y-8 card p-10 bg-white'>
        {/* Logo Section */}
        <div className='flex flex-col items-center'>
          {/* <img
            src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0hFGzzfKB0naSCRfyOU4B3ZQTSRZZD.png'
            alt='Mizden Logo'
            width={200}
            height={50}
            className='mb-2'
          /> */}
          <div className='w-full space-y-1'>
            {[...Array(4)].map((_, i) => (
              <div key={i} className='h-1 bg-[#FFD700]/60 w-full' />
            ))}
          </div>
          <h1 className='mt-6 title'>ハウス案件管理システム</h1>
        </div>

        {/* Login Form */}
        <FormProvider {...form}>
          <form onSubmit={onSubmit} className='mt-8 space-y-6'>
            <div className='space-y-4'>
              <Input
                label='メールアドレス'
                name='email'
                type='text'
                placeholder='taro.eigyou@mizuden.co.jp'
              />

              <div className='relative'>
                <Input
                  label='パスワード'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-[38px] text-gray-500'
                >
                  {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                </button>
              </div>
            </div>

            <Button type='submit' label='ログイン' />
          </form>
        </FormProvider>
      </div>
    </LayoutContainer>
  )
}
