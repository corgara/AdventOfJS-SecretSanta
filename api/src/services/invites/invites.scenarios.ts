import type { Prisma, Invite } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InviteCreateArgs>({
  invite: {
    one: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-18T20:29:59.572Z',
            updatedAt: '2023-12-18T20:29:59.572Z',
            sendReminder: true,
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-18T20:29:59.572Z',
            updatedAt: '2023-12-18T20:29:59.572Z',
            sendReminder: true,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invite, 'invite'>
