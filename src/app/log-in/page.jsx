"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from "next/navigation";
import { authClient } from '@/lib/auth-client';

const LogInPage = () => {
    console.log('Rendered LogIn page.');
  const router = useRouter();
  const [isHiddenPass, setIsHiddenPass] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    console.log('handleLogin 1');
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });
    console.log('LogIn data: ', data, 'LogIn error: ', error);
    if (data) {
      router.push('/');
    }
  }
  return (
    <div className=" flex items-center justify-center bg-base-200 py-20">
      <div className="card w-full max-w-md bg-foreground shadow-lg p-8">
        <h1 className="text-2xl font-bold text-base-content">Log in</h1>
        <p className="text-sm text-base-content/60 mb-6">to continue to SkillSphere</p>

        {/* Social Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button className="btn btn-outline border-zinc-200 hover:bg-zinc-100 w-full normal-case">
            {/* <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" /> */}
            <FcGoogle size={24} />

            Continue with Google
          </button>
          <button className="btn btn-outline border-zinc-200 hover:bg-zinc-100 w-full normal-case">
            {/* <img src="/github-icon.svg" alt="GitHub" className="w-5 h-5 mr-2" /> */}
            <FaGithub size={24} />
            Continue with GitHub
          </button>
        </div>

        <div className="divider text-xs text-base-content/40 uppercase">or</div>

        {/* Registration Form using Server Action */}
        <form onSubmit={handleLogin} className="space-y-4">

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={isHiddenPass ? 'password' : 'text'}
                className="input input-bordered w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button type="button" onClick={() => setIsHiddenPass(!isHiddenPass)} className="cursor-pointer absolute right-3 top-3 opacity-50">
                {isHiddenPass ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn bg-blue-600 text-white hover:bg-blue-700 w-full mt-2">
            Continue
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-base-content/70">
          No account? <Link href="/register" className="text-primary hover:underline">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default LogInPage