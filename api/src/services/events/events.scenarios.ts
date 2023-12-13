import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2023-12-13T22:32:46.515Z',
        updatedAt: '2023-12-13T22:32:46.515Z',
        sendReminder: true,
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2023-12-13T22:32:46.515Z',
        updatedAt: '2023-12-13T22:32:46.515Z',
        sendReminder: true,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
