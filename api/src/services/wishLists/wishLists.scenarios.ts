import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-13T22:33:01.550Z',
        user: {
          create: {
            email: 'String4938946',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:33:01.550Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-13T22:33:01.550Z',
            updatedAt: '2023-12-13T22:33:01.550Z',
            sendReminder: true,
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-13T22:33:01.550Z',
        user: {
          create: {
            email: 'String3487290',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:33:01.550Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-13T22:33:01.550Z',
            updatedAt: '2023-12-13T22:33:01.550Z',
            sendReminder: true,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
