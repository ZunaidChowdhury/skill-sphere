'use client'

import MyCustomSpinner from '@/components/spinner/MyCustomSpinner';
import { authClient } from '@/lib/auth-client';
import { LogOut } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { BiSolidEdit } from 'react-icons/bi';
import { toast } from 'react-toastify';

const UserProfilePage = () => {
  const router = useRouter();
  const { data, isPending } = authClient.useSession()
  const user = data?.user;
  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/log-in");
          toast.success("Logged out!", { autoClose: 3000, });
        },
      },
    });
  }

  return (
    <div className='py-20'>
      {/* container */}
      {
        isPending ? <MyCustomSpinner /> : <div className='max-w-350 mx-auto py-20 bg-foreground rounded-lg border border-zinc-200 shadow-md p-6 flex flex-col justify-center items-center gap-6'>
          {/* image */}
          <div className='shrink-0  w-40 h-40 rounded-full overflow-hidden flex flex-col justify-center items-center'>
            <Image
              src={user?.image || null}
              width={160}
              height={160}
              alt="Instructor image"

            />
          </div>
          {/* info */}
          <div>
            <h4 className='text-4xl font-bold text-center'>
              {user?.name}
            </h4>
            <p className='text-text-secondary text-xl font-medium text-center'>
              {user?.email}
            </p>
            {
              // <p className='flex items-center justify-center gap-2'>
              //   {/* <FaStar className='text-yellow-600 pb-0.5' /> */}
              //   <span className='font-medium'>{instructor.rating}</span>
              //   <span className='text-text-secondary'>({instructor.ratedBy})</span>
              // </p>

            }

          </div>

          {/* buttons */}
          <div className='space-x-4'>
            <Link href='/user/update' className="rounded-lg btn  text-base font-semibold text-text-primary">
              <BiSolidEdit size={24} />Update
            </Link>
            <button onClick={handleLogOut} className="rounded-lg btn  text-base font-semibold text-text-primary">
              <LogOut size={24} />Log out
            </button>
          </div>
        </div>
      }


    </div>
  )
}

export default UserProfilePage