import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-lGLL0Zb0.png";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import { createRegister } from "@/services/api/user";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "react-hot-toast";
import { useState } from "react";
export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignup = async (e) => {
    if (!email || !password || !username)
      return toast.error("Please fill all fields");
    e.preventDefault();
    try {
      setLoading(true);
      const response = await createRegister({ email, password, username });
      console.log(response);
      setLoading(false);
      toast.success("Signup successful");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Signup failed");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#020024] via-[#5044e5] to-[#00d4ff]">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex justify-center items-center">
          <Link to="/">
            <img src={logo} className="w-15 h-15" alt="" />
          </Link>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  type="text"
                  placeholder="Enter Your Username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="Enter Your Password"
                  type="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button
            onClick={handleSignup}
            type="submit"
            className="w-full bg-blue-700 text-white"
          >
            Signup
          </Button>
          <Label className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </Label>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Signup;
