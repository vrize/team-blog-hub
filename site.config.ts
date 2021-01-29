export const config = {
  siteMeta: {
    title: "α, Inc. Tech Blog Hub",
    teamName: "α, Inc.",
    description: "",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://alpha.inc/",
    },
  ],
};
