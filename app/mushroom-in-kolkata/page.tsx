import type { Metadata } from "next";
import LocalLandingPage from "@/components/LocalLandingPage";

export const metadata: Metadata = {
  title: "Fresh Mushroom Delivery in Kolkata",
  description:
    "Order farm-fresh mushrooms online in Kolkata — oyster, button, shiitake, milky, portobello and lion's mane, harvested same-day and delivered by MUCORA.",
};

export default function Page() {
  return (
    <LocalLandingPage
      eyebrow="Mushroom delivery in Kolkata"
      h1="Farm-fresh mushrooms, delivered across Kolkata the same day."
      intro="MUCORA grows six mushroom varieties locally and delivers within our current Kolkata-area zones — order before noon and it's on your counter by evening."
      paragraphs={[
        "Most mushrooms sold in Kolkata pass through a wholesale market and cold storage before they reach a shop shelf — by which point several days have usually gone by. MUCORA skips that chain entirely: we grow, harvest, pack, and deliver directly, so what arrives at your door was often picked that same morning.",
        "We currently serve select zones across Kolkata including City Centre, North Zone, Riverside, and Tech Park Belt areas — see the full list of zones we deliver to below, or message us on WhatsApp to check if your address is covered.",
        "Our shop rotates with the season, but typically includes grey oyster, white button, shiitake, milky mushroom, portobello, and lion's mane — all hand-picked and hand-sorted before packing.",
      ]}
      faq={[
        {
          q: "Do you deliver mushrooms same-day in Kolkata?",
          a: "Yes — orders placed before 12 PM are typically delivered the same evening within our current delivery zones.",
        },
        {
          q: "How do I order mushrooms online from MUCORA in Kolkata?",
          a: "Browse the shop section on this page and message us on WhatsApp with the varieties and quantities you'd like, or call us directly.",
        },
        {
          q: "Is there a minimum order for delivery?",
          a: "For the most current minimum order details for your specific area, message us on WhatsApp — this can vary slightly by zone.",
        },
      ]}
    />
  );
}
