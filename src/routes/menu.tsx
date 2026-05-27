import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLang, type Lang } from "@/lib/language";
import slider8 from "@/assets/slider-8.jpg";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
});

type Item = { en: string; gr: string; desc_en: string; desc_gr: string; price: string };
type Cat = {
  key: "cat_salads" | "cat_snacks" | "cat_pasta" | "cat_share" | "cat_meat" | "cat_desserts";
  icon: string;
  items: Item[];
};

const menu: Cat[] = [
  {
    key: "cat_salads",
    icon: "🥗",
    items: [
      {
        en: "Nirou Terra",
        gr: "Nirou Terra",
        desc_en: "Three different types of quinoa, salmon gravlax, poached prawns, Japan-style wok-fried vegetables with lime, ginger & pine-honey vinaigrette",
        desc_gr: "Τρείς διαφορετικές ποικιλίες κινόα, σολομός Gravlax, γαρίδες ποσέ, Japan-Style λαχανικά στο Wok με Vinaigrette λάιμ, τζίντζερ & μέλι από πεύκο",
        price: "€11.00",
      },
      {
        en: "Cretan L & Greek Salad",
        gr: "Κρήσσα Γη",
        desc_en: "The classic subconscious distinctions from Crete with cherry tomato, cucumber, spring onion, caper, locust bean nut, feta cheese Seliani, olive pasta & green olive oil",
        desc_gr: "Ο κλασικός συνδυασμός φρέσκων λαχανικών από την Κρήτη με τοματίνια αγγουράκι φρέσκο κρεμμυδάκι, κάππαρη, παξιμάδι χαρουπιού, φέτα Σελιανή Κρήτης, χούμα ελιάς & αγουρέλαιο",
        price: "€7.50",
      },
    ],
  },
  {
    key: "cat_snacks",
    icon: "🥪",
    items: [
      {
        en: "Wholemeal Baguette",
        gr: "Μπαγκέτα Ολικής Αλέσης",
        desc_en: "With smoked salmon, cream cheese infused with lime, horseradish, cucumber, rocket leaves & cracked pepper",
        desc_gr: "Με καπνιστό σολομό, κρέμα τυριού αρωματισμένη με λάιμ, αγριοράπανο, αγγούρι, τριμμένο μαύρο πιπέρι & ρόκα",
        price: "€5.50",
      },
      {
        en: "White Baguette",
        gr: "Λευκή Μπαγκέτα",
        desc_en: "With roasted eggplant, tomato, Katiki Domokou soft cheese & baby spinach leaves",
        desc_gr: "Με μελιτζάνα, ντομάτα, κατίκι Δομοκού & baby σπανάκι",
        price: "€5.00",
      },
      {
        en: "Toasted",
        gr: "Τοστ",
        desc_en: "White bread with gouda cheese, ham, cherry tomato & green salad",
        desc_gr: "Σε λευκό ψωμί με τυρί γκούντα, ζαμπόν, τοματίνι βελανίδι & πράσινη σαλάτα",
        price: "€3.00",
      },
      {
        en: "Wholemeal Toasted",
        gr: "Τοστ Ολικής",
        desc_en: "Wholemeal bread low fat turkey, cream cheese, cherry tomato & green salad",
        desc_gr: "Σε ψωμί ολικής με γαλοπούλα χαμηλών λιπαρών, τυρί κρέμα, τοματίνι βελανίδι & πράσινη σαλάτα",
        price: "€4.50",
      },
      {
        en: "Chicken Burger",
        gr: "Burger Κοτόπουλο",
        desc_en: "Organic Breaded Chicken Marinated in Beer, Milner Cheese, Smoked Low Fat Fountain Turkey, Tomato, Lettuce & Mustard Sauce with Honey",
        desc_gr: "Ψωμάκι με βιολογικό φιλέτο κοτόπουλο μαριναρισμένο σε μπύρα, τυρί Milner, καπνιστή γαλοπούλα Fountre χαμηλών λιπαρών, ντομάτα, μαρούλι & σάλτσα μουστάρδας με μέλι",
        price: "€8.00",
      },
      {
        en: "Chicken Tortilla",
        gr: "Τορτίγια Κοτόπουλο",
        desc_en: "With organic chicken fillet, grilled vegetables, corn, Chania avocado, basil pesto & Cretan Graviera cheese",
        desc_gr: "Με βιολογικό φιλέτο κοτόπουλο, λαχανικά σχάρας, καλαμπόκι, αβοκάντο Χανίων, πέστο βασιλικού & Γραβιέρα Κρήτης",
        price: "€6.00",
      },
      {
        en: "Club S & Wich With A Lot",
        gr: "Club S & Wich With A Lot",
        desc_en: "Chicken, egg, smoked bacon, Edam cheese, lettuce & tomato",
        desc_gr: "Με κοτόπουλο, αυγό, καπνιστό μπέικον, τυρί edam, μαρούλι, ντομάτα",
        price: "€8.00",
      },
      {
        en: "Club S & Wich Classic",
        gr: "Club S & Wich Classic",
        desc_en: "With smoked bacon, Edam cheese, lettuce, tomato",
        desc_gr: "Με καπνιστό μπέικον, τυρί edam, μαρούλι, ντομάτα",
        price: "€6.00",
      },
      {
        en: "Protein Omelette",
        gr: "Ομελέτα Protein",
        desc_en: "With five egg whites, Fouantre turkey & Milner cheese",
        desc_gr: "Με πέντε ασπράδια αυγών, γαλοπούλα Fouantre & τυρί Milner",
        price: "€5.50",
      },
      {
        en: "Black Angus Burger",
        gr: "Black Angus Burger",
        desc_en: "Black Angus beef patty, cheddar cheese, bacon, caramelised onions, tomato, lettuce & handmade BBQ sauce served with fried potatoes",
        desc_gr: "Μοσχαρίσιος κιμάς Black Angus, τυρί τσένταρ, μπέικον, καραμελωμένα κρεμμύδια, ντομάτα, μαρούλι, χειροποίητη BBQ sauce, συνοδευόμενο με πατάτες",
        price: "€11.00",
      },
    ],
  },
  {
    key: "cat_pasta",
    icon: "🍝",
    items: [
      {
        en: "Prawn Linguini",
        gr: "Λιγκουίνι με Γαρίδες",
        desc_en: "In Kozani saffron bisque with julienne vegetables & roasted cherry tomatoes",
        desc_gr: "Σε σάλτσα Bisque με κρόκο Κοζάνης, λαχανικά ζουλιέν & ψητά τοματίνια",
        price: "€11.50",
      },
      {
        en: "Wild Mushroom Risotto",
        gr: "Ριζότο Άγριων Μανιταριών με Άρωμα Λευκής Τρούφας",
        desc_en: "With White Truffle Oil served with confit cherry tomatoes, Amfilaxias pecorino cheese & truffle oil",
        desc_gr: "Ρύζι Vialone Nano, ποικιλία άγριων μανιταριών, τοματίνια Κονφί, πεκορίνο Αμφιλαχίας & λάδι τρούφας",
        price: "€9.50",
      },
      {
        en: "Spaghetti Carbonara",
        gr: "Spaghetti Carbonara",
        desc_en: "Traditional Italian Carbonara with smoked pancetta & egg, served with freshly ground pepper, parsley & parmesan cheese",
        desc_gr: "Παραδοσιακή Ιταλική Καρμπονάρα, καπνιστή πανσέτα, αυγό, φρεσκοτριμμένο πιπέρι, μαϊντανός & Parmigianno Reggiano",
        price: "€8.50",
      },
      {
        en: "Penne",
        gr: "Πένες",
        desc_en: "With rich tomato sauce & sour-mizithra cheese served with fresh basil & mountain herbs",
        desc_gr: "Με πλούσια φρέσκια σάλτσα ντομάτας ξινομυζήθρα Κρήτης, με φρέσκο βασιλικό & φρέσκα μυρωδικά του βουνού",
        price: "€7.00",
      },
    ],
  },
  {
    key: "cat_share",
    icon: "🫱",
    items: [
      {
        en: "Calamari",
        gr: "Καλαμάρι",
        desc_en: "Sauté on yellow Schinoussa fava flavored with orange & caramelized leek",
        desc_gr: "Sauté πάνω σε κίτρινη φάβα Σχοινούσας αρωματισμένη με πορτοκάλι & καραμελωμένο πράσο",
        price: "€9.00",
      },
      {
        en: "Mediterranean Tabouleh",
        gr: "Μεσογειακό Ταμπουλέ",
        desc_en: "From broccoli & cauliflower steamed shrimp flavored with lime & Sichuan pepper & basil oil",
        desc_gr: "Μεσογειακό ταμπουλέ από μπρόκολο & κουνουπίδι γαρίδες ατμού αρωματισμένες με λάιμ & πιπέρι σετσουάν & λάδι βασιλικού",
        price: "€13.50",
      },
      {
        en: "Cheese Selection for 2 / Cheese Selection for 4",
        gr: "Πλατό Τυριών για 2 / Πλατό Τυριών για 4 Άτομα",
        desc_en: "Selection of cheeses with grissini, dried fruits & olive jam",
        desc_gr: "Πλατό επιλεγμένων τυριών με κριτσίνια, αποξηραμένα φρούτα & μαρμελάδα ελιάς",
        price: "€10.00 / €18.00",
      },
      {
        en: "Cured Meat Selection for 2 / Cured Meat Selection for 4",
        gr: "Ποικιλία Αλλαντικών για 2 / Ποικιλία Αλλαντικών για 4 Άτομα",
        desc_en: "Selection of cured meats with grissini, apricot jam & Dijon mustard",
        desc_gr: "Πλατό επιλεγμένων αλλαντικών με κριτσίνια μαρμελάδα βερίκοκο & μουστάρδα Dijon",
        price: "€8.00 / €16.00",
      },
    ],
  },
  {
    key: "cat_meat",
    icon: "🥩",
    items: [
      {
        en: "Tagliatelle Rib Eye",
        gr: "Ταλιάτα Rib Eye",
        desc_en: "Tagliatelle with baby arugula, parmesan & Verde sauce",
        desc_gr: "Με baby ρόκα, παρμεζάνα & sauce Verde",
        price: "€22.00",
      },
      {
        en: "Grilled Homestyle 100% Beef Burger Patties",
        gr: "Σπιτικά Μπιφτέκια",
        desc_en: "Served with rocket leaves, cherry tomatoes & fried potatoes",
        desc_gr: "Σχάρας από 100% μοσχαρίσιο κιμά συνοδεύονται με ρόκα, τοματίνια & πατάτες τηγανητές",
        price: "€9.50",
      },
      {
        en: "Free Shepherd Chicken Fillet",
        gr: "Φιλέτο Κοτόπουλο Ελεύθερας Βοσκής",
        desc_en: "With grilled vegetables & light lemon-coriander dressing",
        desc_gr: "Με λαχανικά σχάρας & ελαφρύ dressing μοσχολέμονου - κόλιανδρου",
        price: "€8.00",
      },
      {
        en: "Fresh Salmon Fillet",
        gr: "Φιλέτο Φρέσκου Σολομού",
        desc_en: "Marinated with red peppercorns & orange, served with quinoa salad",
        desc_gr: "Αρωματισμένο με πορτοκάλι & ροζ πιπέρι συνοδευόμενο με σαλάτα κινόα",
        price: "€14.50",
      },
      {
        en: "Fresh Tuna Taliata",
        gr: "Ταλιάτα Φρέσκου Τόνου",
        desc_en: "With pomegranate sauce, baby spinach, beluga lentils, spring onion & semi-dry tomato",
        desc_gr: "Με σάλτσα ρόδι, baby σπανάκι, φακές beluga, φρέσκο κρεμμυδάκι & ημιλιαστή άνδρυμη ντομάτα",
        price: "€15.00",
      },
    ],
  },
  {
    key: "cat_desserts",
    icon: "🍰",
    items: [
      {
        en: "Seasonal Fruit Salad for 2 / Seasonal Fruit Salad for 4",
        gr: "Φρουτοσαλάτα Εποχής για 2 / Φρουτοσαλάτα Εποχής για 4 Άτομα",
        desc_en: "Fresh seasonal fruits",
        desc_gr: "Φρέσκα φρούτα εποχής",
        price: "€6.00 / €10.00",
      },
      {
        en: "Ice-Cream Scoop",
        gr: "Μπάλα Φρέσκο Παγωτό",
        desc_en: "Chocolate with choc-chips, Cream, Vanilla, Strawberry, Chocolate Parfait, Cream Parfait",
        desc_gr: "Σοκολάτα με chocolate chips, καϊμάκι, βανίλια, φράουλα, παρφέ σοκολάτας, παρφέ κρέμα",
        price: "€2.00",
      },
      {
        en: "Couverture Chocolate Mousse",
        gr: "Mousse Σοκολάτας Κουβερτούρας",
        desc_en: "With Madagascan vanilla, chocolate soil, pineapple Brunoise & orange foam",
        desc_gr: "Με άρωμα βανίλια Μαδαγασκάρης, χώμα σοκολάτας, ανανά Brunoise & αφρό πορτοκαλιού",
        price: "€7.00",
      },
    ],
  },
];

function MenuPage() {
  const { tr, lang } = useLang();
  const [active, setActive] = useState(0);
  const cat = menu[active];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={slider8}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/50 to-background" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-cream px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-accent text-sand text-xl mb-5"
          >
            {tr("menu_sub")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl"
          >
            {tr("menu_title")}
          </motion.h1>
        </div>
      </section>

      {/* ── MENU CONTENT ─────────────────────────────────────────────────── */}
      <section className="pb-24 px-6 grain relative">
        <div className="max-w-5xl mx-auto">
          <div className="rope-divider w-32 mx-auto mt-0 mb-16" />

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {menu.map((c, idx) => (
              <button
                key={c.key}
                onClick={() => setActive(idx)}
                className={`px-5 py-3 rounded-full text-sm uppercase tracking-[0.2em] font-body transition-all ${
                  active === idx
                    ? "bg-espresso text-cream"
                    : "bg-cream/60 text-espresso hover:bg-sand/60"
                }`}
              >
                <span className="mr-2">{c.icon}</span>
                {tr(c.key)}
              </button>
            ))}
          </div>

          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {cat.items.map((item) => (
              <div
                key={item.en}
                className="bg-card/80 border border-terracotta/30 rounded-xl p-6 hover:border-terracotta transition-all hover:shadow-lg"
              >
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <h3 className="font-display text-2xl leading-tight">
                    {lang === "en" ? item.en : item.gr}
                  </h3>
                  <span className="font-accent text-terracotta text-lg whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/70 font-light">
                  {lang === "en" ? item.desc_en : item.desc_gr}
                </p>
                <p className="font-accent text-xs text-foreground/40 mt-2">
                  {lang === "en" ? item.gr : item.en}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Chef note */}
          <p className="text-center font-accent text-xs text-foreground/40 mt-16 italic">
            {lang === "en"
              ? "* All snacks are accompanied with green salad or fried potatoes · Menu prepared by Executive Chef Ioannis Kountouris"
              : "* Όλα τα σνακ συνοδεύονται με φρέσκια πράσινη σαλάτα ή πατάτες τηγανητές · Το μενού επιμελήθηκε ο Executive Chef Ιωάννης Κουντούρης"}
          </p>
        </div>
      </section>
    </>
  );
}