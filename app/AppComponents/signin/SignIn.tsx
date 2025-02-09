import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaCheckDouble } from "react-icons/fa"
import Link from "next/link"
import EmailInput from "../EmailInput"
import PasswordInput from "../PasswordInput"
import { z } from "zod"
import { authSchema } from "../ValidationSchema"
import {FormProvider, useForm} from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { useToast } from "@/hooks/use-toast"
type AuthFormData = z.infer<typeof authSchema>;

export function AppLogo(){
    return(
    <div className="flex gap-2 items-center mb-5 justify-center">
        <div className="bg-primary p-2 text-white rounded-sm text-lg">
            <FaCheckDouble />
        </div>
        <div className="font-bold text-2xl flex gap-1 justify-center items-center">
            <span className='text-primary'>
                Quick
            </span>
            <span>Task</span>
        </div>
    </div>
    );
};



export default function SignIn() {

  const methods = useForm<AuthFormData>({ resolver: zodResolver(authSchema)});
  const { toast } = useToast();

  const onSubmit = (data: AuthFormData) =>{
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
  }


  return (
    <div className="flex flex-col gap-1">
        <AppLogo />
      <Card className="w-full max-w-sm py-2">
        <FormProvider {...methods}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={methods.handleSubmit(onSubmit, handleErrorToast)}>
            <div className="flex flex-col gap-6">
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
              
              {/* <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div> */}
              <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            
          </form>
        </CardContent>
        </FormProvider>
      </Card>
    </div>
  )
}
