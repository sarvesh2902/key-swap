import { API } from "@/types/api";

const APIData: API[] = [
  {
    _id: 1,
    price: 100,
    desc: "Get all your general questions answered with simple searches.",
    name: "OPENAI",
    author: "ACDFDFD",
    mainImage: "/images/blog/blog-03.png",
  },
  {
    _id: 2,
    price: 50,
    desc: "Access real-time data from Twitter's public stream API.",
    name: "Twitter Stream",
    author: "Twitter Inc.",
    mainImage: "/images/blog/blog-04.png",
  },
  {
    _id: 3,
    price: 80,
    desc: "Retrieve detailed weather information for any location globally.",
    name: "Weather API",
    author: "Weather Company",
  },

  {
    _id: 4,
    price: 120,
    desc: "Translate text between languages with high accuracy and reliability.",
    name: "Translation API",
    author: "LanguageTech",
  },
  {
    _id: 5,
    price: 75,
    desc: "Access and analyze real-time social media data from various platforms.",
    name: "Social Media Insights",
    author: "SocialAnalytics Inc.",
  },
  {
    _id: 6,
    price: 150,
    desc: "Perform sentiment analysis on text data for deeper insights.",
    name: "Sentiment Analysis",
    author: "NLP Technologies",
  },
];

export default APIData;
