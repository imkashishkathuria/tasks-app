import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import ErrorHoverCard from './ErrorHoverCard'
import { useFormContext } from 'react-hook-form'

function PasswordInput({name, label}: {name:string, label:string}) {
  const {
    register,
    formState: {errors},
  } = useFormContext();

  const errorMessage = errors[name]?.message?.toString();
  return (
    <div className='grid gap-2 relative'>
        <Label htmlFor='password'>{label}</Label>
        <Input id={name}
        {...register(name)} 
        type='password'  
        placeholder={`Your ${label}... `}
        required />
        {errorMessage && <ErrorHoverCard message={errorMessage} />}
        
      
    </div>
  )
}

export default PasswordInput
