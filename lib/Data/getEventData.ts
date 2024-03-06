import { getCurrentUser } from "../session";
import prisma from "../prisma";


export async function getEventData() {
    const loggedInUser = await getCurrentUser();
    if (!loggedInUser) {
        return []
    }

    try {
        const eventsData = await prisma.events.findMany({});

        return [...eventsData]
    } catch(error) {
        console.error("Error fetching user info:", error);
        throw new Error("Error fetching user info")
    }
}