import React from 'react'
import Welcomebanner from '../ui/Welcomebanner'
import { getCurrentUser } from '@/lib/session';
import { User } from '@prisma/client';
import Calendar from './Calendar';
import { Events } from '@prisma/client';
import { getEventData } from '@/lib/Data/getEventData';


const page = async () => {

  const user = await getCurrentUser();
  const Events = await getEventData();

  return (
    <>
    <Welcomebanner user={user as User}/>
    <Calendar events={Events} />
    </>
  )
}

export default page