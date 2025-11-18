import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/services/api/user";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "react-hot-toast";
import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const negative = useNavigate();
  const handleLogin = async (e) => {
    if (!email || !password) return toast.error("Please fill all fields");
    e.preventDefault();
    try {
      setLoading(true);
      const response = await loginUser(email, password);
      console.log(response);
      toast.success(response?.data?.message || "Login successful");
      negative("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  value={password}
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
            onClick={handleLogin}
            type="submit"
            className="w-full bg-blue-700 text-white"
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <Spinner className="w-5 h-5 animate-spin" /> Logging
              </div>
            ) : (
              "Login"
            )}
          </Button>
          <Label className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </Label>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
