import { NextResponse } from "next/server";

function titleCase(str) {
  return str.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.substr(1));
}

function randPick(arr, n = 1) {
  const copy = [...arr];
  const out = [];
  for (let i = 0; i < Math.min(n, copy.length); i++) {
    const idx = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }
  return out;
}

function makeViralityScore(niche, platform) {
  const base = 72 + Math.floor(Math.random() * 18); // 72-89
  const boost = platform.includes("Short") || platform.includes("TikTok") ? 6 : 0;
  const score = Math.min(100, base + boost);
  const reasons = [
    `High retention hooks suited for ${platform}`,
    `Search + recommendation overlap in ${titleCase(niche)}`,
    "Clear transformation promise",
    "Strong CTA and pacing",
    "Reusable series format"
  ];
  return { score, reasons };
}

function generateTopics(niche) {
  const angles = ["Myth-busting", "Before/After", "3-step hack", "X vs Y", "Beginner mistakes", "Pro tips", "Daily routine", "Mini case study", "Challenge (7-day)", "Tool stack"];
  const topics = randPick(angles, 3).map((a) => `${a} in ${titleCase(niche)}`);
  return topics;
}

function makeSEO(niche) {
  const power = ["Ultimate", "Insane", "No BS", "Quick", "Pro", "Zero-Budget", "2025", "Smart", "Underrated", "Secret"];
  const frames = [
    (n) => `${randPick(power)} ${titleCase(n)} Hacks Nobody Told You` ,
    (n) => `Stop Doing This in ${titleCase(n)} (Do This Instead)` ,
    (n) => `From 0 to Pro in ${titleCase(n)} ? 3 Steps`
  ];
  const titles = frames.map((f) => f(niche));
  const hooks = [
    `Suno ? agar tum ${niche} me ho, yeh 3 cheezein turant improve karo!`,
    `90 seconds me ${niche} ka sabse bada mistake fix karte hain.`,
    `Ye framework copy karo aur ${niche} me next-level results dekho!`
  ];
  const descriptions = [
    `Is video me ${niche} ke fastest growth hacks share kiye. Save + share for later.`,
    `${niche} beginners ke liye crisp guide. Full resources niche pinned comment me hai.`,
    `End tak dekho ? bonus template milega jo ${niche} me time bachata hai.`
  ];
  const tags = [
    `${niche}`, `${niche} tips`, `${niche} hacks`, `how to ${niche}`, `2025 ${niche}`
  ];
  const hashtags = [
    `#${niche.replace(/\s+/g, "")}`, "#Shorts", "#Reels", "#YouTube", "#Viral"
  ];
  return { titles, hooks, descriptions, tags, hashtags };
}

function makeScripts(niche) {
  const ctav = [
    "Like, save aur dost ko bhejo!",
    "Comment 'TEMPLATE' for free resource.",
    "Follow for daily bite-size growth hacks!"
  ];

  const shortForms = [
    `Hook: Ek galti jo sab ${niche} me karte hain.\nBeat 1: Problem highlight (3s).\nBeat 2: Fix in 3 steps (9s).\nBeat 3: Quick example (6s).\nCTA: ${ctav[0]}`,
    `Hook: 7 din me noticeable results in ${niche}.\nBeat 1: Day-wise micro-actions.\nBeat 2: Tools you need.\nBeat 3: Pitfalls.\nCTA: ${ctav[1]}`,
    `Hook: Copy-paste framework for ${niche}.\nBeat 1: 3-part formula.\nBeat 2: Real-life mini case.\nBeat 3: Next steps.\nCTA: ${ctav[2]}`,
  ];

  const longForms = [
    `Intro (0:00): Why ${niche} matters now.\nPart 1 (2:00): Fundamentals with visuals.\nPart 2 (6:00): Systems + templates.\nPart 3 (12:00): Case studies.\nOutro (18:00): Action plan + CTA.` ,
    `Intro: Common myths in ${niche}.\nChap 1: Mindset.\nChap 2: Skills.\nChap 3: Tools.\nChap 4: 30-day roadmap.\nOutro: Resources.` ,
    `Intro: The 80/20 of ${niche}.\nSection A: High-impact tactics.\nSection B: Avoid these traps.\nSection C: Automations.\nOutro: Weekly routine.`
  ];

  const voiceovers = [
    `Agar tum ${niche} me ho, yeh teen cheezein turant change karo ? varna growth stuck rahegi.`,
    `Next 30 seconds me, main tumhe ek aisa shortcut dunga jo ${niche} me time half kar dega.`,
    `Is video ko save kar lo ? ye ${niche} ka most practical blueprint hai.`
  ];

  const visuals = [
    `Punch-in closeup, bold captions, sound effect transitions, b-roll relevant to ${niche}.`,
    `Screen recordings + callouts, zooms on key steps, beat-synced jump cuts.`,
    `Before/after split screens, on-screen checklist, subtle whoosh SFX.`
  ];

  return { ctav, shortForms, longForms, voiceovers, visuals };
}

function postingStrategy(region, platform, niche) {
  const timesIndia = ["12:30 PM", "5:30 PM", "8:00 PM"];
  const slots = region === "India" ? timesIndia : ["12:00 PM", "3:00 PM", "7:00 PM"];
  return {
    cadence: ["Mon/Wed/Fri Shorts", "Sun Long-form", "Daily 1 Community post"],
    bestTimes: slots,
    notes: [
      "Reply to first 10 comments in 15 mins",
      "Pin CTA + resources",
      `Turn one long-form into 5 Shorts for ${niche}`
    ]
  };
}

function automationTools(niche) {
  return [
    {
      name: "Scripting",
      steps: [
        "Use this app to generate 3 scripts",
        "Polish hooks with 120-150 char limit",
        "Save templates in Notion"
      ]
    },
    {
      name: "Voiceover",
      steps: [
        "ElevenLabs: paste voiceover lines",
        "Use subtle energy + 1.03x speed",
        "Export WAV"
      ]
    },
    {
      name: "Editing",
      steps: [
        "CapCut timeline: add beat markers",
        "Auto-captions + bold keywords",
        "Add sound effects on cuts"
      ]
    },
    {
      name: "Distribution",
      steps: [
        "Schedule via YouTube Studio",
        "Cross-post to Reels/TikTok with native text",
        "Track retention in Analytics"
      ]
    }
  ];
}

function buildOutput({ niche, region, platform }) {
  const topics = generateTopics(niche);
  const seo = makeSEO(niche);
  const { ctav, shortForms, longForms, voiceovers, visuals } = makeScripts(niche);
  const viral = makeViralityScore(niche, platform);
  const post = postingStrategy(region, platform, niche);
  const tools = automationTools(niche);

  const lines = [];
  lines.push(`?? Topic / Idea`);
  topics.forEach((t, i) => lines.push(`${i+1}) ${t}`));
  lines.push("");

  lines.push(`?? Virality Potential`);
  lines.push(`Score: ${viral.score}/100`);
  viral.reasons.forEach((r)=> lines.push(`- ${r}`));
  lines.push("");

  lines.push(`?? SEO Titles (3)`);
  seo.titles.forEach((t, i)=> lines.push(`${i+1}) ${t}`));
  lines.push("");

  lines.push(`?? Hooks (3)`);
  seo.hooks.forEach((h, i)=> lines.push(`${i+1}) ${h}`));
  lines.push("");

  lines.push(`?? Descriptions (3)`);
  seo.descriptions.forEach((d, i)=> lines.push(`${i+1}) ${d}`));
  lines.push("");

  lines.push(`?? Short-form Scripts (3)`);
  shortForms.forEach((s, i)=> lines.push(`${i+1})\n${s}`));
  lines.push("");

  lines.push(`?? Long-form Scripts (3)`);
  longForms.forEach((s, i)=> lines.push(`${i+1})\n${s}`));
  lines.push("");

  lines.push(`?? Visual Plan (3)`);
  visuals.forEach((v, i)=> lines.push(`${i+1}) ${v}`));
  lines.push("");

  lines.push(`?? Voiceover Lines (3)`);
  voiceovers.forEach((v, i)=> lines.push(`${i+1}) ${v}`));
  lines.push("");

  lines.push(`?? CTA (3)`);
  ctav.forEach((c, i)=> lines.push(`${i+1}) ${c}`));
  lines.push("");

  lines.push(`?? Tags + Hashtags`);
  lines.push(`Tags: ${seo.tags.join(", ")}`);
  lines.push(`Hashtags: ${seo.hashtags.join(" ")}`);
  lines.push("");

  lines.push(`?? Posting Strategy`);
  lines.push(`Cadence: ${post.cadence.join(" | ")}`);
  lines.push(`Best Times: ${post.bestTimes.join(", ")}`);
  post.notes.forEach((n)=> lines.push(`- ${n}`));
  lines.push("");

  lines.push(`?? Tools for automation`);
  tools.forEach((t)=>{
    lines.push(`? ${t.name}`);
    t.steps.forEach((s)=> lines.push(`  - ${s}`));
  });

  return lines.join("\n");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const niche = String(body?.niche || "").trim();
    const region = String(body?.region || "India").trim();
    const platform = String(body?.platform || "Shorts/Reels").trim();

    if (!niche) {
      return NextResponse.json({ error: "Niche required" }, { status: 400 });
    }

    const output = buildOutput({ niche, region, platform });
    return NextResponse.json({ output }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
