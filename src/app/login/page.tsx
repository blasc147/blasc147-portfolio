'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { signIn } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { Toaster } from '@/components/ui/toaster'

const loginSchema = z.object({
  email: z.string().email({ message: 'Dirección de correo inválida' }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
})

type LoginFormInputs = {
  email: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema)
  })
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const responseNextAuth = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })
    console.log(responseNextAuth)

    if (responseNextAuth?.error) {
      toast({
        title: 'Error',
        description: responseNextAuth.error,
        variant: 'destructive'
      })
      return
    }

    if (responseNextAuth?.ok) {
      toast({
        title: 'Éxito',
        description: `Inicio de sesión exitoso. Bienvenido/a.`,
        variant: 'default'
      })
      router.push('/')
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>Login</h1>
      <form className='w-full max-w-xs' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Email
          </label>
          <Input type='email' id='email' {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Password
          </label>
          <Input type='password' id='password' {...register('password')} />{' '}
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <Button type='submit' variant='primary'>
          Login
        </Button>
      </form>
    </div>
  )
}
