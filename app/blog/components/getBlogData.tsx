import {
  getNewsPosts,
  getEvents,
  getPatientStories,
  getInsightsPosts,
} from "@/app/utils/contentful";

export async function getBlogData() {
  const news = (await getNewsPosts()) as any;
  const patientStories = (await getPatientStories(0)) as any;
  const insights = (await getInsightsPosts(0)) as any;
  const events = (await getEvents(0)) as any;

  return {
    news,
    patientStories,
    insights,
    events,
  };
}