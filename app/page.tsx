import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="hero">
        <h2>Epic Legernds</h2>
        <p>
        Epic Legends - Discover a world of heroic tales, mythical adventures, and legendary stories. Explore captivating sagas, timeless myths, and epic journeys that inspire and ignite the imagination. Your gateway to legendary storytelling awaits!
        </p>
        <Link href="/legends" className="btn">
          Legends
        </Link>
      </div>
    </section>
  );
}
