import type { Metadata } from "next";
import LocalLandingPage from "@/components/LocalLandingPage";

export const metadata: Metadata = {
  title: "Fresh Mushroom Delivery in Barasat",
  description:
    "MUCORA grows and delivers fresh mushrooms locally in Barasat — same-day delivery, no cold storage, hand-picked every morning.",
};

export default function Page() {
  return (
    <LocalLandingPage
      eyebrow="Mushroom delivery in Barasat"
      h1="Grown near Barasat. On your table the same day."
      intro="As a local farm, Barasat is at the heart of where MUCORA grows and delivers — which means shorter travel time between harvest and your kitchen than mushrooms trucked in from further away."
      paragraphs={[
        "Being based locally means our Barasat deliveries typically have the shortest farm-to-door time of any zone we serve — often just a few hours between picking and delivery.",
        "We grow oyster, button, shiitake, milky, portobello, and lion's mane mushrooms, all hand-harvested each morning and hand-sorted for size and firmness before packing.",
        "If you're unsure whether your specific Barasat locality falls within our delivery radius, the fastest way to check is a quick WhatsApp message — we'll confirm right away.",
      ]}
      faq={[
        {
          q: "Do you deliver fresh mushrooms in Barasat?",
          a: "Yes, Barasat is one of our core local delivery zones. Order before 12 PM for same-day evening delivery.",
        },
        {
          q: "What mushroom varieties are available in Barasat?",
          a: "Typically all six of our varieties — grey oyster, white button, shiitake, milky mushroom, portobello, and lion's mane — subject to seasonal availability.",
        },
        {
          q: "How fresh are the mushrooms when they arrive?",
          a: "Most Barasat orders are picked and packed the same morning, with no cold storage in between.",
        },
      ]}
    />
  );
}
