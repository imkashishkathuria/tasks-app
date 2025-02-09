import React from 'react'

import { HoverCard, HoverCardContent } from '@/components/ui/hover-card'
import { HoverCardTrigger } from '@/components/ui/hover-card'
import { MdError } from 'react-icons/md'

export function ErrorHoverCard({message} : {message:string | undefined}) {
  return (
    <div className='text-red-500 flex items-center gap-1'>
        <div className="absolute right-2 top-8">
            <HoverCard>
                <HoverCardTrigger className='cursor-pointer'>
                    <MdError />

                </HoverCardTrigger>
                <HoverCardContent className='w-auto p-2 px-3'>
                    <p className='text-[13px] mt-[4px] text-red-500'>
                        {message}
                    </p>
                </HoverCardContent>
            </HoverCard>
        </div>
      
    </div>
  )
}

export default ErrorHoverCard
