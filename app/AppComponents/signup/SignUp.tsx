"use client"
import React from 'react'
import { AppLogo } from '../signin/SignIn'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import EmailInput from '../EmailInput'
import PasswordInput from '../PasswordInput'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { authSchema, signUpSchema } from '../ValidationSchema'
import { useToast } from '@/hooks/use-toast'
import {z} from "zod";

type SignUpFormData = z.infer<typeof signUpSchema>;

function SignUp() {

  const methods = useForm<SignUpFormData>({ 
    resolver: zodResolver(signUpSchema),
  });

  const { toast } = useToast();

  const onSubmit = (data: SignUpFormData) =>{
    console.log("Sign in Data: ",data);
    toast({title: "Sign in successfully!",description: "You have signed in."});

  }

  const handleErrorToast = () =>{
    const {errors} = methods.formState;

    if(errors.email){
      toast({
        title: "Validation Error",
        description: errors.email.message?.toString(),
        variant: "destructive"
      })
    }

    if(errors.password){
      toast({
        title: "Validation Error",
        description: errors.password.message?.toString(),
        variant: "destructive"
      })
    }

    if(errors.confirmPassword){
      toast({
        title: "Validation Error",
        description: errors.confirmPassword.message?.toString(),
        variant: "destructive"
      })
    }
  }

  return (
    <div className="flex flex-col">
        <AppLogo />
      <Card className="w-full max-w-sm py-2">
        <FormProvider {...methods}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">SignUp</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={methods.handleSubmit(onSubmit, handleErrorToast)}>
            <div className="flex flex-col">
              {/* <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div> */}
              <EmailInput name="Email" label="email" />
              <PasswordInput name="password" label="Password" />
              <PasswordInput name="confirmpassword" label="Confirm Password" />
              {/* <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div> */}
              {/* <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div> */}
              <div className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a href="/" className="underline underline-offset-4">
                Sign in
              </a>
            </div>
              <Button type="submit" className="w-full mt-4">
                Create an account
              </Button>
            </div>
            
          </form>
        </CardContent>
        </FormProvider>
      </Card>
    </div>
  )
}

export default SignUp
