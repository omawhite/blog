import { getPayload } from "payload";
import config from "../payload.config";
import homePageData from "./seed-data/home-page.json";

async function run() {
  try {
    const payload = await getPayload({ config });

    console.log("Starting to seed home page...");

    await payload.updateGlobal({
      slug: "home-page",
      //@ts-expect-error that strings don't perfectly match the enums
      data: homePageData,
    });

    console.log("Successfully seeded home page data");
  } catch (error) {
    console.error("Error seeding home page:", error);
    process.exit(1);
  }
  process.exit(0);
}

await run();
