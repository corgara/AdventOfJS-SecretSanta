import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-13T22:34:04.664Z',
            updatedAt: '2023-12-13T22:34:04.664Z',
            sendReminder: true,
          },
        },
        user: {
          create: {
            email: 'String7142988',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:34:04.664Z',
          },
        },
        toUser: {
          create: {
            email: 'String59087',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:34:04.664Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-13T22:34:04.664Z',
            updatedAt: '2023-12-13T22:34:04.664Z',
            sendReminder: true,
          },
        },
        user: {
          create: {
            email: 'String6357162',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:34:04.664Z',
          },
        },
        toUser: {
          create: {
            email: 'String5177666',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:34:04.664Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
