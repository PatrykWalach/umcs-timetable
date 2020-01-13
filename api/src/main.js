const puppeteer = require("puppeteer");
const useElement = require("./useElement.js");

const useBrowser = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  return page;
};

const usePage = async (page, url) => {
  await page.goto(url);

  return page;
};

const Activity = require("./Activity.js");

const activities = async ({ studentsId, ...rawFilters }) => {
  const browser = await useBrowser();
  const page = await usePage(
    browser,
    `http://moria.umcs.lublin.pl/students/${studentsId}`
  );
  const elements = await useElement(page, ".activity_block");

  const activities = elements.map(el => new Activity(el));

  const filters = Object.entries(rawFilters).map(([key, filter]) => [
    key,
    filter instanceof Array ? filter : [filter]
  ]);

  return await filters.reduce(async (acc, [key, filter]) => {
    const activities = await acc;

    return await Promise.all(
      activities.map(activity => activity[key]())
    ).then(results =>
      activities.filter((activity, i) => filter.includes(results[i]))
    );
  }, activities);

  // return filters.reduce((acc, [key, filter]) =>
  //    acc.filter(activity => filter.includes(await activity[key]()))
  // , activities);
};

const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
enum Type {
  SEMINAR
  LECTURE
  LAB
}
enum Weekday{
  MONDAY
  TUESDAY
  WEDNESDAY
  THURSDAY
  FRIDAY
}
type Activity {
  group: Int
  room: String
  subject: String
  teacher: String
  weekday: Weekday
  startTime: Int
  endTime: Int
  type: Type
}
type Query {
  activities(studentsId: Int!, weekday: [Weekday!], group: [Int!], type: [Type!]): [Activity!]!
}
`);

const root = { activities };

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    rootValue: root,
    schema: schema
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");