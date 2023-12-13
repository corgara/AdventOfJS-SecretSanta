import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2023-12-13T22:32:53.252Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-13T22:32:53.252Z',
            updatedAt: '2023-12-13T22:32:53.252Z',
            sendReminder: true,
          },
        },
        santa: {
          create: {
            email: 'String5115381',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:32:53.252Z',
          },
        },
        person: {
          create: {
            email: 'String1900251',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:32:53.252Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-12-13T22:32:53.252Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-13T22:32:53.252Z',
            updatedAt: '2023-12-13T22:32:53.252Z',
            sendReminder: true,
          },
        },
        santa: {
          create: {
            email: 'String5179567',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:32:53.253Z',
          },
        },
        person: {
          create: {
            email: 'String9126074',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-13T22:32:53.253Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
