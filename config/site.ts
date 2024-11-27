export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Epic Legends",
  description: "Epic Legends - Discover a world of heroic tales, mythical adventures, and legendary stories. Explore captivating sagas, timeless myths, and epic journeys that inspire and ignite the imagination. Your gateway to legendary storytelling awaits!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    youtube: "https://www.youtube.com/@EpicLegends-r6w/featured",
    docs: "https://nextui.org",
    fb: "#",
    sponsor: "https://www.paypal.com/donate/?hosted_button_id=Y76YWYJTWH6W6",
  },
};
