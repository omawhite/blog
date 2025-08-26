import { getPayload } from 'payload'
import config from '../payload.config'

async function run() {
  try {
    const payload = await getPayload({ config })

    console.log('Starting to seed user...')

    // Create admin user
    const user = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@example.com',
        password: 'password123',
      },
    })

    console.log(`Successfully created user: ${user.email}`)
  } catch (error) {
    console.error('Error seeding user:', error)
    process.exit(1)
  }
  process.exit(0)
}

await run()