'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from "next/navigation";
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const UpdateUserInfoPage = () => {
    const { data } = authClient.useSession()
    const user = data?.user;
    const router = useRouter();
    const [error, setError] = useState(null);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let { name, photoUrl } = Object.fromEntries(formData);
        if (name.trim().length === 0) {
            name = user.name
        }
        if (photoUrl.trim().length === 0) {
            photoUrl = user.image
        }
        const { data, error } = await authClient.updateUser({
            name,
            image: photoUrl,
        });

        if (data) {
            toast.success("Profile updated successfully!");
            router.push('/user/profile');
        }
        if (error) {
            setError(error);
        }
    }

    return (
        <div className=" flex items-center justify-center bg-base-200 py-20">
            <div className="card w-full max-w-md bg-foreground shadow-lg p-8">
                <h1 className="text-2xl font-bold text-base-content">Update info</h1>



                {/* Registration Form using Server Action */}
                <form onSubmit={handleUpdate} className="mt-10 space-y-4">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                        />
                    </div>

                    {/* image url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input
                            name="photoUrl"
                            type="text"
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <button type="submit" className="btn bg-blue-600 text-white hover:bg-blue-700 w-full mt-2">
                        Update
                    </button>
                    {
                        error && <p className='text-red-500 font-medium text-center'>
                            {error?.message}
                        </p>
                    }
                </form>

            </div>
        </div>
    )
}

export default UpdateUserInfoPage