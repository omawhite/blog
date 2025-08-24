import { getPayload } from 'payload'
import config from '../payload.config'
import postsData from './seed-data/posts.json'

async function run() {
  try {
    const payload = await getPayload({ config })

    console.log('Starting to seed posts...')

    for (const post of postsData) {
      console.log(`Creating post: ${post.title}`)
      await payload.create({
        collection: 'posts',
        //@ts-ignore that status is a string
        data: post,
      })
    }

    console.log(`Successfully seeded ${postsData.length} posts`)
  } catch (error) {
    console.error('Error seeding posts:', error)
    process.exit(1)
  }
  process.exit(0)
}

await run()