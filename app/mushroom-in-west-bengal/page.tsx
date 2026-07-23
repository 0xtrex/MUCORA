import type { Metadata } from "next";
import LocalLandingPage from "@/components/LocalLandingPage";

export const metadata: Metadata = {
  title: "Fresh Mushroom Delivery Across West Bengal",
  description:
    "MUCORA farms fresh mushrooms locally in West Bengal and delivers same-day within its current zones — oyster, button, shiitake, milky, portobello and lion's mane.",
};

export default function Page() {
  return (
    <LocalLandingPage
      eyebrow="Mushroom delivery in West Bengal"
      h1="A local West Bengal mushroom farm, growing six varieties year-round."
      intro="MUCORA is based and grown locally in West Bengal, currently delivering fresh mushrooms same-day within our Kolkata and Barasat-area zones, with more areas opening as our harvest grows."
      paragraphs={[
        "West Bengal's climate — humid, with a long monsoon stretch — is naturally well suited to mushroom cultivation, which is part of why the state has a strong tradition of both small-scale and commercial mushroom farming.",
        "MUCORA currently grows and delivers six varieties: grey oyster, white button, shiitake, milky mushroom, portobello, and lion's mane — each hand-picked, hand-sorted, and packed within an hour of harvest.",
        "We're a local-first operation today, with delivery currently focused on our Kolkata and Barasat-area zones. If you're elsewhere in West Bengal, message us on WhatsApp — we're expanding zones each season and can let you know when we reach you.",
      ]}
      faq={[
        {
          q: "Does MUCORA deliver across all of West Bengal?",
          a: "Not yet — we currently deliver same-day within our Kolkata and Barasat-area zones, and are expanding gradually. Message us on WhatsApp to check your area.",
        },
        {
          q: "What mushroom varieties does MUCORA grow in West Bengal?",
          a: "Grey oyster, white button, shiitake, milky mushroom, portobello, and lion's mane, subject to seasonal availability.",
        },
        {
          q: "Is MUCORA planning to expand delivery across West Bengal?",
          a: "Yes — we're a local farm expanding our delivery zones each season as our harvest capacity grows.",
        },
      ]}
    />
  );
}
