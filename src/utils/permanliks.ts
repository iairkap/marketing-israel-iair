const CATEGORY_BASE = "/category";
const TAG_BASE = "/tag";

const createPath = (...args: string[]): string => {
  return args.join("/");
};

const trimSlash = (path: string): string => {
  return path.replace(/^\/|\/$/g, "");
};

const definitivePermalink = (path: string): string => {
  return `/${trimSlash(path)}/`;
};

export const getPermalink = (slug = "", type = "page"): string => {
  let permalink: string;

  switch (type) {
    case "category":
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case "tag":
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;
    case "post":
      permalink = createPath(trimSlash(slug));
      break;
    case "page":
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

export const getHomePermalink = (): string => getPermalink("/");
