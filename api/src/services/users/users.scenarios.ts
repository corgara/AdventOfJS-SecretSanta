import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String1133192',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-13T22:32:02.660Z',
      },
    },
    two: {
      data: {
        email: 'String2796783',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-13T22:32:02.660Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
