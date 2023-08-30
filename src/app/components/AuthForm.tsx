"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import Input from "@/components/Input/Input";
import Butten from "@/components/Butten";
import AuthsocialAction from "./AuthsocialAction";
import { BsGithub, BsGoogle } from "react-icons/bs";
type Variant0 = "LOGIN" | "REGISTER";

export default function AuthForm() {
  const [IsLoding, setIsLoding] = useState(false);
  const [Variant, setVariant] = useState<Variant0>("LOGIN");
  const toggleVariant = useCallback(() => {
    if (Variant == "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [Variant]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoding(true);

    if (Variant === "LOGIN") {
      // NextAuth Sing Up
    }

    if (Variant === "REGISTER") {
      // Axios Register
    }
  };

  const socialAction = (action: string) => {
    setIsLoding(true);
    // NextAuth Social  Sing Up
  };

  return (
    <div className="mt-8  sm:mx-auto sm:w-full sm:max-w-md">
      <div className=" bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {Variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              type="text"
              register={register}
              errors={errors}
              disabled={IsLoding}
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            disabled={IsLoding}
            errors={errors}
          />
          <Input
            id="password"
            label="password"
            type="password"
            register={register}
            disabled={IsLoding}
            errors={errors}
          />
          <div>
            <Butten disabled={IsLoding} fullWidth type="submit">
              {Variant === "REGISTER" ? "Register" : "Sign in"}
            </Butten>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className=" absolute inset-0 flex items-center">
              <div className=" w-full border-t border-gray-500" />
            </div>
            <div className="flex relative justify-center text-sm">
              <span className="bg-white px-2 text-gray-600">
                or continue with
              </span>
            </div>
          </div>
          <div className="flex mt-6 gap-2">
            <AuthsocialAction
              Icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthsocialAction
              Icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        <div className="flex justify-center gap-2 text-sm mt-6 px-2 text-gray-500 ">
          <div>
            {Variant === "LOGIN"
              ? "New to Messenger?"
              : "Aleady have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-default">
            {" "}
            {Variant === "LOGIN" ? "Create a account" : "login"}
          </div>
        </div>
      </div>
    </div>
  );
}
