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

export function AppLogo(){
    return(
    <div className="flex gap-2 items-center mb-11 justify-center">
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
}

export default function SignIn() {
  return (
    <div className="flex flex-col">
        <AppLogo />
      <Card className="w-full max-w-sm py-2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
