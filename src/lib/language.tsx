import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "gr";

type Dict = Record<string, { en: string; gr: string }>;

export const t: Dict = {
  // Nav
  nav_home: { en: "Home", gr: "Αρχική" },
  nav_experience: { en: "Experience", gr: "Εμπειρία" },
  nav_menu: { en: "Menu", gr: "Μενού" },
  nav_contact: { en: "Contact", gr: "Επικοινωνία" },

  // Hero
  hero1: { en: "Where the earth meets the sea", gr: "Εκεί που η γη συναντά τη θάλασσα" },
  hero2: { en: "Tastes of Crete, crafted with soul", gr: "Γεύσεις Κρήτης με ψυχή" },
  hero3: { en: "Unwind. Breathe. Belong.", gr: "Χαλάρωσε. Ανάσα. Ανήκεις εδώ." },
  hero_cta: { en: "Explore the Experience", gr: "Εξερεύνησε" },

  // Intro
  intro_title: { en: "A bohemian escape by the Cretan sea", gr: "Μια μποέμ απόδραση στην κρητική θάλασσα" },
  intro_body: {
    en: "Nirou Terra is a soulful beachside escape on the shores of Kokkini Hani, Crete. Nestled under thatched canopies and driftwood pergolas, we offer handcrafted cocktails, Mediterranean cuisine, and unforgettable sunsets — right where the sand meets the sea.",
    gr: "Το Nirou Terra είναι μια ψυχωμένη παραθαλάσσια απόδραση στις ακτές της Κόκκινης Χάνης, Κρήτη. Κάτω από ψάθινες σκιάδες και ξύλινες πέργκολες, προσφέρουμε handcrafted κοκτέιλ, μεσογειακή κουζίνα και αξέχαστα ηλιοβασιλέματα.",
  },

  // Gallery
  gallery_title: { en: "A Glimpse of Terra", gr: "Μια Ματιά στο Terra" },
  gallery_sub: { en: "Driftwood, linen, salt and sun", gr: "Ξύλο, λινό, αλάτι και ήλιος" },

  // Reviews
  reviews_title: { en: "Voices from our guests", gr: "Φωνές από τους επισκέπτες μας" },
  reviews_banner: { en: "4.4 ★ on Google · 1,400+ Reviews", gr: "4.4 ★ στο Google · 1.400+ Κριτικές" },

  // Footer
  footer_tag: { en: "Bohemian beachside · Kokkini Hani, Crete", gr: "Μποέμ παραθαλάσσιο · Κόκκινη Χάνη, Κρήτη" },
  footer_address: { en: "Kokkini Hani, Heraklion, Crete, Greece", gr: "Κόκκινη Χάνη, Ηράκλειο, Κρήτη" },
  footer_rights: { en: "All rights reserved", gr: "Όλα τα δικαιώματα κατοχυρωμένα" },

  // Experience
  exp_title: { en: "The Terra Experience", gr: "Η Εμπειρία Terra" },
  exp_sub: { en: "Slow days, golden hours, salt on your skin", gr: "Αργές μέρες, χρυσές ώρες, αλάτι στο δέρμα" },
  exp1_t: { en: "The Space", gr: "Ο Χώρος" },
  exp1_b: {
    en: "Thatched canopies sway in the breeze above woven cushions and driftwood tables. Rope details, hand-stitched textiles, and hammocks strung between palms — every corner of Terra is built to slow you down.",
    gr: "Ψάθινες σκιάδες κυματίζουν πάνω από υφαντά μαξιλάρια και τραπέζια από θαλάσσιο ξύλο. Λεπτομέρειες σχοινιού, χειροποίητα υφάσματα και αιώρες ανάμεσα στους φοίνικες — κάθε γωνιά είναι φτιαγμένη για να σε χαλαρώσει.",
  },
  exp2_t: { en: "Food & Drinks", gr: "Φαγητό & Ποτά" },
  exp2_b: {
    en: "Fresh Cretan produce, slow-cooked mezze and bright Mediterranean plates. Our bar pours handcrafted cocktails, cold-pressed juices and smoothies that taste of the island itself.",
    gr: "Φρέσκα κρητικά προϊόντα, μεζέδες αργής μαγειρικής και φωτεινά μεσογειακά πιάτα. Το μπαρ μας σερβίρει handcrafted κοκτέιλ, φρέσκους χυμούς και smoothies με τη γεύση του νησιού.",
  },
  exp3_t: { en: "The Vibe", gr: "Η Ατμόσφαιρα" },
  exp3_b: {
    en: "Sunset sessions with deep ethnic grooves, barefoot wandering on the sand, slow mornings with coffee and the sound of the waves. Terra is a feeling more than a place.",
    gr: "Sunset sessions με βαθιά ethnic μουσική, ξυπόλυτες βόλτες στην άμμο, αργά πρωινά με καφέ και τον ήχο των κυμάτων. Το Terra είναι μια αίσθηση περισσότερο παρά ένας τόπος.",
  },

  // Menu
  menu_title: { en: "The Menu", gr: "Το Μενού" },
  menu_sub: { en: "Crafted with Cretan soul", gr: "Φτιαγμένο με κρητική ψυχή" },
  cat_salads: { en: "Salads", gr: "Σαλάτες" },
  cat_snacks: { en: "Snacks", gr: "Σνακς" },
  cat_pasta: { en: "Pasta - Rizoto", gr: "Μακαρόνια - Ριζότο" },
  cat_share: { en: "To share", gr: "Στη μέση" },
  cat_meat: { en: "Meat and Fish", gr: "Κρέας και Ψάρι" },
  cat_desserts: { en: "Desserts", gr: "Επιδόρπια" },

  // Contact
  contact_title: { en: "Find us by the sea", gr: "Βρες μας δίπλα στη θάλασσα" },
  contact_sub: { en: "We'd love to host you", gr: "Θα χαρούμε να σε φιλοξενήσουμε" },
  contact_info: { en: "Visit & Contact", gr: "Επίσκεψη & Επικοινωνία" },
  hours: { en: "Open daily · 9:00 — Late", gr: "Ανοιχτά καθημερινά · 9:00 — Αργά" },
  form_name: { en: "Your name", gr: "Όνομα" },
  form_email: { en: "Email", gr: "Email" },
  form_message: { en: "Message", gr: "Μήνυμα" },
  form_send: { en: "Send Message", gr: "Αποστολή" },
  form_success: { en: "Thank you — we'll be in touch soon.", gr: "Ευχαριστούμε — θα επικοινωνήσουμε σύντομα." },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: keyof typeof t) => string;
}

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const tr = (key: keyof typeof t) => t[key]?.[lang] ?? "";
  return (
    <LanguageContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
