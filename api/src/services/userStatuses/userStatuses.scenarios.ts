import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String9438368',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:32:37.486Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-13T22:32:37.486Z',
            updatedAt: '2023-12-13T22:32:37.486Z',
            sendReminder: true,
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String1184586',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:32:37.486Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-13T22:32:37.486Z',
            updatedAt: '2023-12-13T22:32:37.486Z',
            sendReminder: true,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
