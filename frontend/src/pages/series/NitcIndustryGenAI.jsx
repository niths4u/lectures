import { useState, useCallback } from 'react'

// ── Step data ─────────────────────────────────────────────────────────────────

const COLORS = [
  '#6c63ff','#4ecdc4','#ff6b6b','#ffd166','#06d6a0',
  '#f4a261','#a8dadc','#e07a5f','#81b29a','#9b5de5',
]

const STEPS = [
  {
    num: 1, label: 'Discovery', icon: '🔍',
    title: 'Discovery Questions',
    subtitle: 'Turn your raw idea into 20–35 sharp questions that expose what the product truly needs to be.',
    requires: null,
    why: {
      heading: 'The biggest mistake in product development is building before understanding.',
      body: `Most people with an idea want to start building immediately. That's a trap. Without first interrogating the idea from every angle — who it's for, what pain it solves, how it makes money, who the competitors are, what the risks are — you end up building the wrong thing. These questions force clarity before a single dollar is spent or a line of code is written. Think of this as the diagnostic before the prescription.`,
    },
    produces: [
      { icon: '❓', title: 'Problem & Pain Questions', desc: 'Who hurts? How much? What are they doing today without your product?' },
      { icon: '👥', title: 'Target Customer Questions', desc: 'Who exactly is the buyer, the user, and the decision-maker?' },
      { icon: '💰', title: 'Business Model Questions', desc: "How does this make money? What's the revenue potential per customer?" },
      { icon: '⚔️', title: 'Competition & Market Questions', desc: "Who are the real competitors? What's the market size? Growing or shrinking?" },
      { icon: '🛠️', title: 'Product Shape Questions', desc: 'Web app? Mobile? API? What are the 3–5 must-have features for the MVP?' },
      { icon: '⚠️', title: 'Risks & Constraints Questions', desc: "What's the biggest technical risk? What would make this product fail?" },
    ],
    output: { type: '📄', name: '01_discovery_questions.md', desc: '20–35 questions organized by category' },
    prompt: `I have a product idea and I need you to help me think through it rigorously before I start building anything.

MY IDEA:
[Describe your product idea in 2–4 sentences. What does it do? Who is it for? What problem does it solve?]

YOUR TASK:
Generate 20–35 sharp, specific discovery questions that will help me fully understand what this product truly needs to be. Organize the questions into these categories:

1. Problem & Pain — Who hurts? How much? What workarounds exist today?
2. Target Customer — Who is the user? Who is the buyer? How many of them exist?
3. Value Proposition — What core value does this deliver? Why would someone switch to it?
4. Business Model — How does it make money? What are the cost drivers?
5. Competition & Market — Who are the real alternatives? Is the market growing?
6. Product Shape & Features — Web, mobile, or API? What are the 3–5 MVP must-haves?
7. Data & Integrations — What data does it need? What systems must it connect to?
8. Go-to-Market — How do you get the first 100 customers?
9. Success Metrics — How do you define success in 6 months? In 2 years?
10. Risks & Constraints — What's the biggest technical risk? What would cause this to fail?

IMPORTANT: Make every question specific to MY idea — not generic MBA filler. Each question should be answerable and action-oriented.

End with a note telling me what to do next once I've answered or thought through these questions.`,
    tips: [
      { icon: '💡', text: 'Be specific in your idea description. The more concrete you are ("an app for freelance graphic designers to track invoice payments"), the more useful the questions will be. Vague input ("a productivity app") produces generic questions.' },
      { icon: '📝', text: "Don't answer the questions yet. Just read through them. Some will reveal assumptions you didn't know you were making. That's the point of this step — to expose blind spots." },
      { icon: '🚩', text: "Flag the scary ones. The questions that make you uncomfortable or that you can't answer are the most important ones to research in Step 2." },
    ],
  },
  {
    num: 2, label: 'Research', icon: '🔬',
    title: 'Market Research',
    subtitle: 'Answer the discovery questions with real data, not gut feelings.',
    requires: 'Step 1 output',
    why: {
      heading: 'Most product ideas live and die on assumptions.',
      body: `You have questions — now you need answers backed by evidence. This step replaces "I think the market is big" with "the TAM is $2.4B growing at 18% YoY." It replaces "there might be competitors" with "three specific competitors with names, pricing, and G2 reviews." Grounded research is the foundation of every good product decision. It also often reveals a fatal flaw early — before you've spent months building.`,
    },
    produces: [
      { icon: '📊', title: 'Market Size Data', desc: 'Real TAM/SAM numbers from analyst reports or industry sources.' },
      { icon: '🏢', title: 'Competitor Analysis', desc: 'Named competitors with pricing, reviews, strengths, and weaknesses.' },
      { icon: '📋', title: 'Regulatory & Compliance Context', desc: 'Any legal or compliance risks that would affect the product.' },
      { icon: '⚠️', title: 'Key Uncertainties', desc: 'Questions where data was thin — signals of where to do more validation.' },
    ],
    output: { type: '📄', name: '02_research_report.md', desc: 'Full Q&A research document with sources and key uncertainties' },
    prompt: `I have a set of product discovery questions about my idea. I need you to research and answer each one with real data, not opinions.

MY PRODUCT IDEA:
[Paste your idea description here]

DISCOVERY QUESTIONS TO RESEARCH:
[Paste all the questions from Step 1 here]

YOUR TASK:
Research and answer each question. Produce a structured report in this format:

# Research Report: [Product Name]
Date: [today's date]

## Summary
2–3 sentences on the key findings and what they mean for the product.

## Findings by Category
[For each question category, answer every question with:]
- Specific data points (market sizes, percentages, numbers) — not vague statements
- Real company names for competitors — not hypothetical players
- Source citations inline when pulling from research: "(Source: Statista, 2024)"
- Clear language when uncertain: "Data is limited here, but based on similar markets..."

## Key Uncertainties
List the questions where data was thin or contradictory, and what would resolve them.

## Recommended Next Steps
2–3 bullets on what to validate before building.

QUALITY STANDARDS:
- Prefer specific data: "$2.4B market growing at 18% YoY" beats "the market is large"
- For competitors: name real products with real pricing pages and user reviews
- If you find a fatal flaw in the idea, say it directly
- Flag surprising findings — these are often the most valuable insights

End by telling me to "refine this into a spec" as the next step.`,
    tips: [
      { icon: '🌐', text: 'Use an AI with web search. This step benefits most from an AI that can browse the internet (Perplexity, Claude with search, ChatGPT with Browse). Without real-time search, the AI is working from training data which may be outdated for market size and competitor information.' },
      { icon: '🚩', text: 'Pay close attention to "Key Uncertainties." If the AI can\'t find data for a core assumption, that\'s a signal you need primary research — talking to potential customers or industry experts — before proceeding.' },
      { icon: '⭐', text: 'Surprising findings are gold. If the AI discovers a competitor with a 2.1-star rating on G2, or that a regulation just changed, or that the market is actually contracting — highlight those in your notes. These are the insights that shape strategy.' },
    ],
  },
  {
    num: 3, label: 'Spec', icon: '📐',
    title: 'Product Specification',
    subtitle: 'Transform research into a complete, actionable 12-section product document.',
    requires: 'Steps 1 + 2 output',
    why: {
      heading: 'A vague idea never gets built well.',
      body: `The spec is the north star for every build decision. It aligns the team, prevents scope creep, and forces you to answer the hard questions before they become expensive problems mid-build. A good spec tells you exactly what the MVP is and what it is not, who the users are, what the tech stack should be, and how success will be measured. Engineers, designers, investors, and non-technical co-founders should all be able to read it and understand exactly what you're building.`,
    },
    produces: [
      { icon: '📝', title: 'Executive Summary + Problem Statement', desc: 'One-paragraph pitch and a clear articulation of who hurts and why now.' },
      { icon: '🎯', title: 'Target Users + Value Proposition', desc: 'Named personas, buyer vs. user distinction, and the core value delivered.' },
      { icon: '📦', title: 'Features & Scope (MVP, Phase 2, Future)', desc: 'Specific features for each phase — not vague descriptions but concrete capabilities.' },
      { icon: '⚙️', title: 'Technical Specification + Data Model', desc: 'Recommended tech stack with rationale and key data entities.' },
      { icon: '💼', title: 'Business Model + Go-to-Market', desc: 'Revenue model, pricing structure, launch strategy, and sales motion.' },
      { icon: '📈', title: 'Success Metrics + Risks', desc: 'KPI targets at 6 and 12 months, plus key risks and assumptions to validate.' },
    ],
    output: { type: '📄', name: '03_product_spec.md', desc: 'Full 12-section product specification document' },
    prompt: `I've done discovery and research on my product idea. Now I need you to turn this into a complete product specification document.

DISCOVERY QUESTIONS:
[Paste the questions from Step 1 here]

RESEARCH REPORT:
[Paste the full research report from Step 2 here]

YOUR TASK:
Produce a complete product specification document with these 12 sections:

1. Executive Summary — One compelling paragraph. Pitch-quality.
2. Problem Statement — The pain, who feels it, current workarounds, why now.
3. Target Users — Primary and secondary personas with enough detail to be real.
4. Value Proposition — Core value, 3–5 specific benefits, key differentiators.
5. Features & Scope — MVP (must-have), Phase 2 (should-have), Future (nice-to-have). Be specific: not "user dashboard" but "dashboard showing X, Y, Z with ability to filter by date and category."
6. User Flows — Step-by-step walk-through of the 2–3 most important user journeys.
7. Technical Specification — Architecture overview, recommended tech stack with rationale, high-level data model, non-functional requirements.
8. Business Model — Revenue model, pricing structure, key cost drivers, unit economics target.
9. Go-to-Market — Launch strategy, sales motion, key channels, launch pricing.
10. Success Metrics — Table of KPIs with 6-month and 12-month targets.
11. Risks & Assumptions — Technical risks, market risks, execution risks, and a list of assumptions that need validation.
12. Open Questions — Anything unresolved that needs a decision before building begins.

WRITING RULES:
- Be specific, not vague
- Flag every assumption with [ASSUMPTION] so I know what needs validation
- If inputs are incomplete, fill in reasonable defaults and flag them
- Use tables for comparisons, bullets for lists, prose for narrative

End by suggesting next steps (create a product story, or create an architecture diagram).`,
    tips: [
      { icon: '📌', text: 'The spec is the master document. Steps 4, 6, 7, 8, and 9 all use the spec as their primary input. The better your spec, the better every downstream output will be. Spend time reviewing it before moving on.' },
      { icon: '✏️', text: 'Edit the [ASSUMPTION] flags. The AI will mark assumptions it\'s made. Go through them and either confirm, correct, or leave as open questions. This is where your domain knowledge beats the AI.' },
      { icon: '🎯', text: 'Be brutal about MVP scope. The MVP section is the most important. Push back if it seems too large — an MVP should take 2–3 months, not 18. Keep moving features to Phase 2 until only the absolute core remains.' },
    ],
  },
  {
    num: 4, label: 'Story', icon: '📖',
    title: 'Product Story',
    subtitle: 'Write a human narrative that makes everyone understand why this product matters.',
    requires: 'Step 3 output',
    why: {
      heading: 'Data and specs convince engineers. Stories convince everyone else.',
      body: `You'll need to communicate your product to investors, customers, co-founders, and non-technical partners. A feature list doesn't do that. A story does. The Story Mountain structure — used in film, advertising, and great product pitches — follows a real person from their daily struggle, through the breaking point, to discovering a solution, and finally to a transformed life. When someone reads it, they should think: "I know that person. I've felt that pain. I want that outcome."`,
    },
    produces: [
      { icon: '🌅', title: 'Act 1: Exposition', desc: 'Introduce a named, specific protagonist in their normal world. Make them feel real.' },
      { icon: '📈', title: 'Act 2: Rising Action', desc: 'The problem emerges in a concrete, specific moment. Show the painful workaround breaking down.' },
      { icon: '🏔️', title: 'Act 3: Climax', desc: 'Everything is on the line. A deadline, a client meeting, a financial hit. Something must change.' },
      { icon: '📉', title: 'Act 4: Falling Action', desc: 'The protagonist uses the product. Show specific details — what they see, how it feels different.' },
      { icon: '🌄', title: 'Act 5: Resolution', desc: '3–6 months later: the new normal. Measurable outcomes. Life genuinely changed.' },
      { icon: '💬', title: 'Takeaway Line', desc: 'One sentence capturing the transformation — suitable for a slide headline or tagline.' },
    ],
    output: { type: '📄', name: '04_product_story.md', desc: '600–900 word Story Mountain narrative' },
    prompt: `I have a product specification and I need you to write a compelling narrative story about a real user whose life is transformed by this product.

PRODUCT SPECIFICATION:
[Paste your product spec from Step 3 here]

YOUR TASK:
Write a 600–900 word story using the Story Mountain structure — 5 acts following one specific protagonist from their daily pain to transformation:

Act 1 — EXPOSITION: Introduce the protagonist by name. Give them a real role, company type, and daily context. Hint at the tension without making it a crisis yet. Make them feel like a specific real person, not a generic "user."

Act 2 — RISING ACTION: The problem hits concretely. A specific moment — a deadline missed, a frustrated client email, a spreadsheet that crashed. Show what they're doing today as a workaround and why it's failing. Build tension.

Act 3 — CLIMAX: Everything is on the line. A client meeting, a financial loss, an embarrassing failure. The reader should think "something has to change." The product enters the picture naturally here — not as a sales pitch.

Act 4 — FALLING ACTION: Show the protagonist using the product specifically. What do they see? What do they do? How does it feel different? Show the friction disappearing. Show others noticing.

Act 5 — RESOLUTION: 3–6 months later. What's different about their daily life? Show measurable outcomes — time saved, money made, stress reduced. End on a moment that makes the reader think "I want that."

STYLE RULES:
- Write in third-person, past tense
- Use specific, concrete details — real tool names (Slack, Excel, QuickBooks), real numbers, real company sizes
- Show don't tell: not "it was frustrating" — show the moment of frustration
- Include 1–2 supporting characters (colleague, client, family member) who reflect the change
- No product jargon — write for a smart non-technical friend
- The product name appears naturally, not as a brand push

End with a single "Takeaway" line capturing the transformation — suitable for a slide headline.

Then tell me to "visualize this story as HTML panels" as the next step.`,
    tips: [
      { icon: '👤', text: 'The protagonist is everything. Ask the AI to make the character as specific as possible — a name, an age, a city, a company type. "Sarah, a 34-year-old freelance graphic designer in Austin" is infinitely more compelling than "a typical freelancer."' },
      { icon: '🎭', text: "The climax should hurt. The breaking point needs to feel real — a lost client, a missed payroll, a 2am crisis. If the story doesn't make you feel the pain, it won't land with an audience. Ask the AI to intensify the climax if it feels too gentle." },
      { icon: '📊', text: '"She saved 8 hours a week" or "revenue grew 40%" is far more powerful than "she felt better about her work." Make the AI anchor the outcome in specific, measurable improvement.' },
    ],
  },
  {
    num: 5, label: 'Storyboard', icon: '🎨',
    title: 'Visual Storyboard',
    subtitle: 'Turn the narrative into a 6-panel illustrated HTML presentation.',
    requires: 'Step 4 output',
    why: {
      heading: "A wall of text doesn't sell a product in a meeting. Six vivid panels do.",
      body: `When you're presenting to investors, clients, or a board, you need something visual. This step creates a self-contained HTML file — open it in any browser — with six illustrated story panels. Each panel has an SVG illustration, a title, and a 2–3 sentence caption. It's the thing you put on the projector. You can email it as a single file. Print it as a handout. Share it as a link. No design skills required.`,
    },
    produces: [
      { icon: '😫', title: 'Panel 1: The Problem', desc: '"Chaos" — scattered documents, overwhelm, a stressed figure. Show the pain clearly.' },
      { icon: '⚡', title: 'Panel 2: The Trigger', desc: '"Entry Point" — the specific moment everything breaks. Clock, warning, crashing system.' },
      { icon: '🚪', title: 'Panel 3: Discovery', desc: '"First Contact" — user finds the product. A clean portal appearing. A hand reaching forward.' },
      { icon: '⚙️', title: 'Panel 4: How It Works', desc: '"The Engine" — data flowing through a funnel. What the product does, simplified visually.' },
      { icon: '🔍', title: 'Panel 5: The Shift', desc: '"The Insight" — dashboard with key data, user gaining control and clarity.' },
      { icon: '🏆', title: 'Panel 6: The Outcome', desc: '"Before vs. After" — upward chart, relaxed figure, checkmarks. The measurable transformation.' },
    ],
    output: { type: '🌐', name: '05_story_panels.html', desc: 'Self-contained HTML — open in browser, print-ready, no dependencies' },
    prompt: `I have a product story and I need you to turn it into a beautiful 6-panel illustrated HTML storyboard that I can open in a browser and show in presentations.

PRODUCT STORY:
[Paste the full story from Step 4 here]

PRODUCT NAME:
[Your product name]

YOUR TASK:
Create a complete, self-contained HTML file (all CSS and SVG inline — zero external dependencies) with 6 illustrated story panels.

Panel structure:
- Panel 1: "The Problem" — chaos, overwhelm, fragmented tools, stressed protagonist
- Panel 2: "The Trigger" — the breaking point moment. Clock, warning, crash, crisis
- Panel 3: "Discovery" — first encounter with the solution. Clean interface appearing
- Panel 4: "How It Works" — the product in action. Data flowing, engine metaphor
- Panel 5: "The Shift" — the user gaining insight and control. Dashboard, clarity
- Panel 6: "The Outcome" — before vs. after. Upward chart, calm figure, measurable results

Each panel must have:
- An SVG illustration (use 4–8 SVG elements: rectangles, circles, paths, text). Use color fills and gradients — not placeholder squares.
- Panel number + title
- 2–3 sentence caption drawn from the story

DESIGN REQUIREMENTS:
- 2×3 or 3×2 responsive grid layout
- Dark or clean gradient background
- Color scheme matching the product domain
- Smooth hover effects on panels (subtle scale + shadow)
- Page header with product name and subtitle
- Print-friendly (@media print styles)
- Zero external dependencies — one file, works offline

The file should open immediately in any browser.`,
    tips: [
      { icon: '🎨', text: "Specify your domain's color palette. Healthcare products should use calm blues and greens. Fintech should use sophisticated navy and gold. Consumer apps can be vibrant. Tell the AI the domain and it will pick appropriate colors." },
      { icon: '🖨️', text: 'Print-ready is important. The HTML file should include print styles so it renders cleanly as a one-page handout. If presenting in a meeting, you may want to print it and leave copies with attendees.' },
    ],
  },
  {
    num: 6, label: 'Architecture', icon: '🏗️',
    title: 'Architecture Diagram',
    subtitle: 'Visualize how all the technical components fit together.',
    requires: 'Step 3 output',
    why: {
      heading: 'Architecture diagrams are the shared language between engineers, PMs, and executives.',
      body: `Without a diagram, everyone has a different mental model of how the system works. Engineers argue about where things should live. PMs make promises that break the architecture. Executives don't understand why something is "technically complex." A clear architecture diagram fixes all of this. It also surfaces missing components — integrations you forgot about, security layers you didn't design, or services that create a single point of failure. Better to find those gaps on paper than in production.`,
    },
    produces: [
      { icon: '👥', title: 'Client / User Layer', desc: 'Web browser, mobile app, API consumers — who interacts with the system.' },
      { icon: '🖥️', title: 'Frontend Layer', desc: 'The UI framework, routing, and presentation components.' },
      { icon: '⚙️', title: 'Backend & Services Layer', desc: 'API gateway, auth service, core business logic modules.' },
      { icon: '🗄️', title: 'Data Layer', desc: 'Primary database, cache, file storage, and data flows between them.' },
      { icon: '🔌', title: 'External Integrations', desc: 'Third-party APIs: Stripe, Auth0, SendGrid, analytics tools, and others.' },
      { icon: '🔍', title: 'Interactive Tooltips', desc: 'Hover over any component to see a description of what it does.' },
    ],
    output: { type: '🌐', name: '06_arch_diagram.html', desc: 'Interactive SVG architecture diagram — hover tooltips, color-coded layers' },
    prompt: `I need you to create a professional interactive architecture diagram for my product as a self-contained HTML file.

PRODUCT SPECIFICATION (with tech stack):
[Paste your product spec from Step 3 here — especially the Technical Specification section]

YOUR TASK:
Generate a single self-contained HTML file (arch_diagram.html) with an interactive SVG architecture diagram.

The diagram must show:
1. All major system components from the spec
2. All external integrations and APIs
3. Authentication and authorization flow
4. Data storage (databases, caches, file storage)
5. Key data flows between components (with directional arrows and labels)
6. Infrastructure layer if relevant (CDN, load balancer, cloud provider)

VISUAL DESIGN:
Organize in horizontal layers (top to bottom):
- Users/Clients layer (who interacts with the system)
- Frontend Layer (UI)
- API/Backend Layer (business logic)
- Core Services (feature modules)
- Data Layer (databases, cache)
- External Services (Stripe, Auth0, etc.)

Use color coding:
- Blues for frontend
- Greens for backend services
- Oranges for databases
- Purples for external services
- Gray for infrastructure

Each component box shows: component name, tech used, short role on hover (tooltip).
Use directional arrows with labels ("API Call", "Webhook", "Read/Write", "OAuth").

TECHNICAL REQUIREMENTS:
- Fully self-contained — single HTML file, no external dependencies
- Hover tooltips on each component (1-sentence description)
- Color legend in the corner
- Print-friendly
- Zero external file dependencies

Tell me all the components included in the diagram after creating it.`,
    tips: [
      { icon: '🔍', text: "Look for gaps in the diagram. Missing an authentication layer? No logging/monitoring service? No CDN? The diagram makes missing infrastructure visible at a glance. These gaps are easier to address in planning than in production." },
      { icon: '👥', text: "Share this with technical co-founders or engineers early. Engineers often have strong opinions about architecture. Sharing this diagram early — before anyone writes code — is the cheapest time to have those debates and course-correct." },
    ],
  },
  {
    num: 7, label: 'Team Plan', icon: '👥',
    title: 'Team & Staffing Plan',
    subtitle: 'Define exactly who you need to build and run this product.',
    requires: 'Step 3 output',
    why: {
      heading: 'Products fail not because of bad ideas but because of wrong teams.',
      body: `Too small a team and you miss deadlines. Wrong skill mix and you build something nobody can maintain. Right people at the wrong phase and you burn cash before product-market fit. The team plan makes the human capital requirements concrete and plannable — not "we'll need some engineers" but "we need one Senior Backend Engineer at ₹22L and one Mid Full-Stack at ₹16L in Month 1, then a Product Designer in Month 3." This precision is what separates fundable plans from hopeful guesses.`,
    },
    produces: [
      { icon: '🚀', title: 'Phase 1: MVP Team (0–6 months)', desc: 'Minimum credible team to ship. Every role with seniority, cost, and responsibilities.' },
      { icon: '📈', title: 'Phase 2: Growth Team (6–18 months)', desc: 'Roles added as the product gains traction. Running headcount and burn rate.' },
      { icon: '🏢', title: 'Phase 3: Scale Structure (18+ months)', desc: 'Full org structure with reporting hierarchy for a mature product.' },
      { icon: '💰', title: 'Cost Summary by Phase', desc: 'Monthly burn rate and total phase cost for financial planning.' },
      { icon: '🎯', title: 'Hiring Priority Order', desc: 'Who to hire first and exactly why — not alphabetically, but strategically.' },
      { icon: '🛒', title: 'Build vs. Buy vs. Outsource', desc: 'What to hire for vs. use SaaS tools to avoid an early hire entirely.' },
    ],
    output: { type: '📄', name: '07_team_plan.md', desc: 'Full staffing plan with roles, costs, and hiring sequence across 3 phases' },
    prompt: `I need a detailed, realistic team staffing plan for my product. Tell me exactly who I need, when, and what it will cost.

PRODUCT SPECIFICATION:
[Paste your product spec from Step 3 here]

CONTEXT:
[Optional: add any constraints — bootstrap vs. funded, India vs. remote, specific budget ceiling]

YOUR TASK:
Produce a full team staffing plan covering three phases:

Phase 1: MVP (Months 0–6) — minimum credible team to ship
Phase 2: Growth (Months 6–18) — roles added as the product gains traction
Phase 3: Scale (Month 18+) — full org for a mature product

For each role in Phases 1 and 2, specify:
- Role title (be specific: "Senior Full-Stack Engineer" not "Developer")
- Headcount
- Key responsibilities (3–4 bullets)
- Required skills (specific technologies)
- Seniority level (Junior / Mid / Senior / Staff)
- Engagement type (Full-time / Contractor / Co-founder)
- Estimated monthly cost (add 20–25% for overhead)

Format as: role table + detail section per role + total monthly burn.

Also include:
- Hiring Priority Order: who to hire first and why — ordered by strategic importance
- Build vs. Buy vs. Outsource: which roles to avoid by using SaaS tools instead
- Key Risks: single points of failure, hard-to-hire skills, underestimated roles
- Total Cost Summary table: all phases side by side

BE REALISTIC: Match the team size to the product complexity. A simple SaaS might need 3 people. A complex platform might need 12. Don't pad the team. Don't under-staff either.`,
    tips: [
      { icon: '💡', text: '"Build vs. Buy" is often the most valuable section. The AI will often identify roles you don\'t need to hire for because a SaaS tool can replace them (e.g., "use Auth0 instead of building auth — saves 2–3 weeks and is more secure").' },
      { icon: '🌍', text: 'Specify your hiring market. India salaries are very different from US or European teams. If your team will be in a Tier-2 city or remote, the AI can benchmark appropriately if you mention it.' },
    ],
  },
  {
    num: 8, label: 'Prototype', icon: '🖥️',
    title: 'Frontend Prototype',
    subtitle: "Build a clickable, polished HTML demo of your product's interface.",
    requires: 'Steps 3 + 4 output',
    why: {
      heading: "You can't sell a product from a spec document.",
      body: `A working prototype — even one with fake data — lets clients click around, feel the flow, and say "yes, that's what we want" (or "no, that's not right"). It collapses the feedback loop from weeks of design and development to minutes. It lets you validate assumptions with real users before writing a single line of production code. And it gives investors something tangible to react to in a meeting — far more powerful than a slide deck.`,
    },
    produces: [
      { icon: '🏠', title: 'Dashboard / Home Screen', desc: 'The main hub with key metrics, charts, and primary navigation.' },
      { icon: '⚡', title: 'Core Feature Screen', desc: 'The primary thing the product does — the screen users visit most.' },
      { icon: '🔍', title: 'Detail / Drill-Down View', desc: 'What happens when you click into a specific item or record.' },
      { icon: '📋', title: 'Realistic Mock Data', desc: 'Domain-appropriate data (real names, real numbers, real states) — no Lorem Ipsum.' },
      { icon: '🖱️', title: 'Working Navigation', desc: 'Clicking menu items actually switches screens. Modals open and close.' },
      { icon: '📊', title: 'Charts & Data Visualization', desc: "At least one SVG chart showing the product's key metrics." },
    ],
    output: { type: '🌐', name: '08_frontend_mockup.html', desc: 'Interactive prototype — 3–5 screens, working navigation, modals, charts' },
    prompt: `Build me a complete, polished, interactive HTML frontend prototype for my product. It should look like a real product someone would pay for.

PRODUCT SPECIFICATION:
[Paste your product spec from Step 3 here]

PRODUCT STORY (for context on users and domain):
[Paste your product story from Step 4 here]

YOUR TASK:
Produce a single self-contained HTML file demonstrating the core product experience with at minimum 3–5 distinct screens.

Screens to include (adapt to the actual product):
1. Landing/Login screen — first impression
2. Dashboard/Home — key metrics at a glance, chart, navigation
3. Core Feature screen — the primary thing the product does
4. Detail/Drill-down view — clicking into a specific item
5. Settings/Profile — user configuration

MOCK DATA REQUIREMENTS:
- Use realistic, domain-appropriate data — if it's invoicing, show real invoice numbers, client names, amounts
- Populate at least 5–8 rows/items in every list or table
- Show different states: at least one success, one in-progress, one warning/error
- NEVER use "Lorem ipsum" or "Test User 1"

UI DESIGN REQUIREMENTS:
- Production-grade design — not a school project
- Modern, clean aesthetic appropriate to the domain
- Components to include: top navigation bar with logo + user avatar, sidebar (if appropriate), metric cards, data table with status badges, buttons (primary/secondary/danger), SVG chart, search bar, modal triggered by a button click, form with inputs and submit
- Working navigation: clicking menu items switches between screens
- Hover states on all interactive elements
- Smooth CSS transitions between views

TECHNICAL REQUIREMENTS:
- Zero external dependencies — no CDN, no frameworks, no external images
- All CSS in <style> block, all JS in <script> block, all icons as inline SVG
- Must open in any browser with no server
- Responsive to 1024px–1440px window width

After building, tell me: what screens are included and how to navigate between them.`,
    tips: [
      { icon: '✅', text: 'Apply the quality bar yourself. Before sharing the prototype, check: Does it look like a real product someone would pay for? Is navigation working? Is mock data realistic? Is at least one interactive element (modal, tab) functional? If any of these fail, ask the AI to fix them.' },
      { icon: '🧪', text: 'Show it to potential users before moving on. The prototype is a validation tool, not just a deliverable. 30 minutes of watching someone click around will reveal UX issues, missing features, and misaligned assumptions — far cheaper than building the real thing first.' },
    ],
  },
  {
    num: 9, label: 'Modules', icon: '🧩',
    title: 'Product Modules',
    subtitle: 'Decompose the product into independently buildable modules.',
    requires: 'Step 3 output',
    why: {
      heading: 'Monolithic thinking kills product delivery.',
      body: `When you try to build everything at once, nothing works until everything works — which means nothing works for a very long time. Decomposing the product into modules lets you: parallelize work across multiple engineers, set clear milestones with demonstrable progress, assign clear ownership so nobody is stepping on each other, and ship partial value early while the rest is still being built. The module breakdown is the bridge between the product spec and the actual codebase.`,
    },
    produces: [
      { icon: '📋', title: 'Module Inventory Table', desc: 'All modules with layer, priority, effort estimate, and dependencies.' },
      { icon: '📦', title: 'Detailed Module Specs', desc: 'For each module: purpose, responsibilities, tech stack, data entities, APIs exposed.' },
      { icon: '🗓️', title: 'Sprint Plan & Milestones', desc: '2-week sprint breakdowns with what gets built and demonstrated at each milestone.' },
      { icon: '🔀', title: 'Module Interface Map', desc: 'ASCII diagram showing exactly how modules communicate with each other.' },
      { icon: '⚙️', title: 'Tech Stack Summary', desc: 'Full technology choices per layer with rationale for each decision.' },
      { icon: '💡', title: 'Build vs. Buy Recommendations', desc: 'What to build vs. what to use off-the-shelf (saves weeks of engineering time).' },
    ],
    output: { type: '📄', name: '09_product_modules.md', desc: 'Complete module breakdown with build sequence and effort estimates' },
    prompt: `Decompose my product specification into independently buildable modules that a development team can use to start building immediately.

PRODUCT SPECIFICATION:
[Paste your product spec from Step 3 here]

YOUR TASK:
Produce a complete module breakdown document:

## Overview
Architecture philosophy and total module count.
Recommended build sequence (Module A → Module B → ...).
Estimated MVP build time with N engineers.

## Module Inventory Table
| # | Module Name | Layer | Priority | Est. Effort | Depends On |

## Module Details (for each module)
- Purpose: what it's responsible for and why it exists
- Core responsibilities (3–5 bullets)
- Tech stack (language, framework, key libraries, database, infrastructure)
- Key data entities owned (with descriptions)
- Exposed interfaces (API endpoints or events)
- What it consumes from other modules
- Estimated effort in developer-days
- Key risks

## Sprint Plan
2-week sprint breakdowns showing what gets built and what gets demonstrated at each milestone checkpoint.

## Tech Stack Summary Table
Layer | Technology | Rationale

## Module Interface Map
ASCII diagram showing how modules connect and communicate.

## Recommendations
- What to build first (and why)
- What to buy/use off-the-shelf instead of building (with specific tools)
- What to defer to after MVP

GUIDANCE:
Module types to consider: Auth, Core Data, UI/Frontend, API Gateway, Notifications, Integrations, Analytics, Admin, AI/ML (if relevant), Infrastructure.
Be realistic on effort estimates. Prefer specific developer-days over vague ranges.`,
    tips: [
      { icon: '🔢', text: 'The build sequence is critical. Most products should start with Auth and Core Data modules — you can\'t build anything else without knowing who users are and what data you\'re working with. Challenge the AI if the sequence doesn\'t follow this logic.' },
      { icon: '🛒', text: 'Take the "Buy instead of Build" list seriously. Auth0, Stripe, SendGrid, Twilio — these exist precisely so you don\'t spend 6 weeks building what they\'ve perfected over 10 years. Each one you use off-the-shelf is weeks of engineering time recovered for your actual product.' },
    ],
  },
  {
    num: 10, label: 'Build', icon: '⚙️',
    title: 'Build First Module',
    subtitle: 'Generate a complete, runnable code scaffold for the first priority module.',
    requires: 'Step 9 output',
    why: {
      heading: 'The gap between "designed" and "built" is where most projects lose momentum.',
      body: `This step collapses that gap. Instead of starting with a blank file and figuring out how to structure the project, you get a complete, runnable code scaffold — real code, not stub comments. You get the folder structure, the core logic implemented, database migrations with seed data, environment configuration, tests, and a README telling you exactly how to run it. It's not the finished product, but it's a working foundation you can build on immediately.`,
    },
    produces: [
      { icon: '📁', title: 'Complete File Structure', desc: 'Full folder layout — routes, controllers, services, models, middleware, utils.' },
      { icon: '💻', title: 'Implemented Core Logic', desc: 'Real working code — not stub comments. Complex parts fully implemented.' },
      { icon: '🗄️', title: 'Database Schema + Seed Data', desc: 'Migration files and realistic seed data (5–10 rows) ready to run.' },
      { icon: '🔧', title: 'Configuration Files', desc: '.env.example with all variables, tsconfig, jest config, Dockerfile if needed.' },
      { icon: '🧪', title: 'Test Suite', desc: '4–6 tests covering happy path and key error cases. Mocked external dependencies.' },
      { icon: '📖', title: 'Module README', desc: 'Setup instructions, environment variables table, API endpoints, how to run.' },
    ],
    output: { type: '📁', name: '10_module_[name].md', desc: 'Complete code scaffold — copy files into your project and start building' },
    prompt: `Build the [MODULE NAME] module for my product. I need a complete, runnable code scaffold — not boilerplate stubs, but real implemented code that I can immediately run and extend.

MODULE DEFINITION (from product module breakdown):
[Paste the specific module's detail section from Step 9 here]

PRODUCT SPECIFICATION (for context):
[Paste relevant sections of your product spec from Step 3]

TECH STACK:
[Specify: e.g., "Node.js + TypeScript + Express + PostgreSQL" or "Python + FastAPI + SQLAlchemy"]

YOUR TASK:
Produce the following for this module:

1. FILE STRUCTURE — Show the complete folder structure first.

2. CORE FILES — Write complete, working code for each file:
   - Entry point (index.ts or main.py)
   - Routes with all endpoints from the module definition
   - Controllers handling request/response logic
   - Services containing business logic
   - Models/schemas for data entities
   - Middleware (auth, validation, error handling)

3. DATABASE — If the module owns a database table:
   - Migration file (SQL or ORM format)
   - Seed data file with 5–10 realistic rows

4. CONFIGURATION — .env.example with all required variables (commented)

5. TESTS — At least 4–6 tests covering:
   - Happy path for each major endpoint
   - Key error cases (invalid input, not found, unauthorized)
   - Mock external dependencies

6. README — Setup instructions, environment variables table, API endpoints list, how to run locally.

CODE QUALITY RULES:
- Write REAL code — not "// TODO: implement this"
- Use proper types (TypeScript interfaces / Python type hints)
- Async/await throughout — no callbacks
- Structured error handling with proper HTTP status codes
- Consistent response format: { success: true, data: {...} } or { success: false, error: "..." }
- Input validation on all request bodies

After generating, tell me: what start command to run, what environment variables I need to fill in first, and what the next module to build should be.`,
    tips: [
      { icon: '🏁', text: 'Start with Auth or Core Data. These are almost always the right first modules. Nothing else can be built without knowing who users are (Auth) and what data you\'re managing (Core Data). Resist the urge to start with the most interesting feature.' },
      { icon: '🔄', text: 'Run it immediately after generating. Copy the files, fill in the .env, and run the start command. The sooner you have something running locally, the faster you\'ll find what needs adjustment. Code that isn\'t run is code you can\'t trust.' },
      { icon: '🔁', text: 'Repeat for each module. This is the last step of the pipeline, but not the last time you\'ll use this prompt. Go back to Step 9\'s module list and keep building the next module in priority order until your MVP is complete.' },
    ],
  },
]

// ── Copy button ───────────────────────────────────────────────────────────────

function PromptBox({ prompt }) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(() => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {
      const ta = document.createElement('textarea')
      ta.value = prompt
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [prompt])

  return (
    <div style={{
      background: '#0d0f1a',
      border: '1px solid #2e3250',
      borderRadius: 14,
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 16px', background: '#222536', borderBottom: '1px solid #2e3250',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <span style={{ fontSize: '0.75rem', color: '#6b7399' }}>Paste into any AI assistant</span>
        <button
          onClick={copy}
          style={{
            background: copied ? '#06d6a0' : '#6c63ff',
            border: 'none', borderRadius: 6, color: '#fff',
            fontSize: '0.75rem', fontWeight: 600, padding: '4px 12px',
            cursor: 'pointer', transition: 'background 0.2s',
            display: 'flex', alignItems: 'center', gap: 4,
          }}
        >
          {copied ? '✓ Copied!' : '⎘ Copy'}
        </button>
      </div>
      <pre style={{
        margin: 0, padding: '1.25rem 1.5rem',
        fontFamily: "'Fira Mono', 'Consolas', monospace",
        fontSize: '0.8rem', lineHeight: 1.8,
        color: '#c5cae9', whiteSpace: 'pre-wrap', wordBreak: 'break-word',
        background: 'transparent', border: 'none', borderRadius: 0,
        maxHeight: 380, overflowY: 'auto',
      }}><code style={{ background: 'none', border: 'none', color: 'inherit', fontSize: 'inherit', padding: 0 }}>
        {prompt}
      </code></pre>
    </div>
  )
}

// ── Overview panel ────────────────────────────────────────────────────────────

function OverviewPanel({ onSelectStep }) {
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '1rem 0 2rem' }}>
        <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
          The Product Builder Pipeline
        </h2>
        <p style={{ color: '#9fa8c7', fontSize: '1rem', maxWidth: 600, margin: '0 auto' }}>
          10 sequential steps that transform a rough idea into a fully scoped, researched, and partially built product.
          Each step's output becomes the next step's input.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: 14, marginBottom: '2rem' }}>
        {STEPS.map(s => (
          <div
            key={s.num}
            onClick={() => onSelectStep(s.num)}
            style={{
              background: '#1a1d27', border: '1px solid #2e3250', borderRadius: 16,
              padding: '1.1rem 1.25rem', cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS[s.num-1]; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 28px ${COLORS[s.num-1]}22` }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2e3250'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{
                width: 30, height: 30, borderRadius: 8,
                background: COLORS[s.num-1], color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '0.85rem', flexShrink: 0,
              }}>{s.num}</div>
              <span style={{ fontWeight: 600, fontSize: '0.93rem', color: '#e8eaf6' }}>{s.title}</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#9fa8c7', lineHeight: 1.5, marginBottom: 8 }}>
              {s.produces.slice(0,2).map(p => p.title).join(' · ')}
            </p>
            <div style={{ fontSize: '0.72rem', color: '#6b7399', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>Output:</span>
              <span style={{
                background: '#222536', border: '1px solid #2e3250', borderRadius: 4,
                padding: '1px 7px', fontFamily: 'monospace', color: '#4ecdc4',
              }}>{s.output.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background: '#1a1d27', border: '1px solid #2e3250',
        borderRadius: 14, padding: '1.5rem',
      }}>
        <div style={{
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
          color: '#6b7399', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 8,
        }}>How to use this guide
          <div style={{ flex: 1, height: 1, background: '#2e3250' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px,1fr))', gap: 12 }}>
          {[
            { icon: '📋', text: 'Each tab = one step. Open a tab to see what the step does, why it matters, what it produces, and the exact prompt to use.' },
            { icon: '📝', text: 'Copy the prompt. Each step has a ready-to-use prompt you can paste into ChatGPT, Claude, Gemini, or any AI assistant.' },
            { icon: '🔗', text: "Steps build on each other. Each step's output becomes the next step's input. Always carry previous outputs forward." },
            { icon: '🎯', text: 'You can stop at any step. Each output is a standalone deliverable. Stop when you have what you need.' },
          ].map(({ icon, text }) => (
            <div key={icon} style={{
              display: 'flex', gap: 10, alignItems: 'flex-start',
              background: '#222536', border: '1px solid #2e3250', borderRadius: 10, padding: 14,
            }}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>{icon}</span>
              <p style={{ fontSize: '0.8rem', color: '#9fa8c7', lineHeight: 1.5 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Step panel ────────────────────────────────────────────────────────────────

function StepPanel({ step, onSelectStep }) {
  const color = COLORS[step.num - 1]

  return (
    <div>
      {/* Step header */}
      <div style={{
        display: 'flex', alignItems: 'flex-start', gap: '1.25rem',
        marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #2e3250',
        flexWrap: 'wrap',
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: 18, flexShrink: 0,
          background: color, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '1.75rem',
        }}>{step.icon}</div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#6b7399', marginBottom: 6 }}>
            Step {step.num} of 10
          </div>
          <h2 style={{ fontSize: 'clamp(1.2rem,3vw,1.65rem)', fontWeight: 700, color: '#fff', marginBottom: 6 }}>{step.title}</h2>
          <p style={{ color: '#9fa8c7', fontSize: '0.95rem' }}>{step.subtitle}</p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0, alignSelf: 'flex-start' }}>
          <button onClick={() => onSelectStep(step.num <= 1 ? 0 : step.num - 1)} disabled={false}
            style={{ width: 36, height: 36, borderRadius: 8, background: '#222536', border: '1px solid #2e3250', color: '#9fa8c7', cursor: 'pointer', fontSize: '1rem' }}>‹</button>
          <button onClick={() => onSelectStep(step.num >= 10 ? 0 : step.num + 1)}
            style={{ width: 36, height: 36, borderRadius: 8, background: '#222536', border: '1px solid #2e3250', color: '#9fa8c7', cursor: 'pointer', fontSize: '1rem' }}>›</button>
        </div>
      </div>

      {/* Requires */}
      {step.requires && (
        <div style={{
          display: 'flex', gap: 10, alignItems: 'flex-start',
          background: 'rgba(255,209,102,0.07)', border: '1px solid rgba(255,209,102,0.2)',
          borderRadius: 10, padding: '12px 16px', marginBottom: '1.5rem', fontSize: '0.88rem', color: '#9fa8c7',
        }}>
          <span style={{ fontSize: '1rem', flexShrink: 0 }}>🔗</span>
          <div><strong style={{ color: '#fff' }}>Requires {step.requires}.</strong> Carry your previous output into this prompt for the best results.</div>
        </div>
      )}

      {/* Why */}
      <Section label="Why this step exists">
        <div style={{
          background: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(78,205,196,0.05))',
          border: '1px solid rgba(108,99,255,0.2)', borderRadius: 12, padding: 20,
        }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#4ecdc4', marginBottom: 8 }}>{step.why.heading}</h3>
          <p style={{ fontSize: '0.88rem', color: '#9fa8c7', lineHeight: 1.7 }}>{step.why.body}</p>
        </div>
      </Section>

      {/* Produces */}
      <Section label="What it produces">
        <div className="col-2">
          {step.produces.map(p => (
            <div key={p.title} style={{
              background: '#1a1d27', border: '1px solid #2e3250',
              borderRadius: 10, padding: '0.9rem', display: 'flex', gap: 10, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: `${color}22`, color, fontSize: '0.95rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{p.icon}</div>
              <div>
                <h4 style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e8eaf6', marginBottom: 3 }}>{p.title}</h4>
                <p style={{ fontSize: '0.78rem', color: '#9fa8c7', lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Output file */}
      <Section label="Output file">
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: '#222536', border: '1px solid #2e3250',
          borderRadius: 8, padding: '10px 16px', fontSize: '0.88rem',
        }}>
          <span>{step.output.type}</span>
          <code style={{ color: '#4ecdc4', background: 'none', border: 'none', padding: 0, fontFamily: 'monospace', fontSize: '0.88rem' }}>{step.output.name}</code>
          <span style={{ color: '#6b7399', marginLeft: 'auto', fontSize: '0.78rem' }}>{step.output.desc}</span>
        </div>
      </Section>

      {/* Prompt */}
      <Section label="Prompt to use">
        <PromptBox prompt={step.prompt} />
      </Section>

      {/* Tips */}
      <Section label="Tips for best results">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {step.tips.map((t, i) => (
            <div key={i} style={{
              display: 'flex', gap: 12, alignItems: 'flex-start',
              background: '#1a1d27', border: '1px solid #2e3250',
              borderRadius: 10, padding: 14,
            }}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>{t.icon}</span>
              <p style={{ fontSize: '0.83rem', color: '#9fa8c7', lineHeight: 1.55 }}>{t.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Completion banner on step 10 */}
      {step.num === 10 && (
        <div style={{
          marginTop: '2rem',
          background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(78,205,196,0.08))',
          border: '1px solid rgba(108,99,255,0.25)', borderRadius: 14, padding: '1.75rem',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 28, marginBottom: 12 }}>🎉</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>Pipeline Complete</h3>
          <p style={{ color: '#9fa8c7', fontSize: '0.88rem', maxWidth: 500, margin: '0 auto' }}>
            You've gone from a raw idea to a researched spec, human story, architecture diagram, team plan,
            interactive prototype, module breakdown, and running code. That's the full journey.
          </p>
        </div>
      )}
    </div>
  )
}

function Section({ label, children }) {
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <div style={{
        fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
        color: '#6b7399', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: 8,
      }}>
        {label}
        <div style={{ flex: 1, height: 1, background: '#2e3250' }} />
      </div>
      {children}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function NitcIndustryGenAI({ onNavigate }) {
  // 0 = overview, 1-10 = step
  const [active, setActive] = useState(0)

  const progress = active === 0 ? 0 : Math.round((active / 10) * 100)
  const activeStep = active > 0 ? STEPS[active - 1] : null

  return (
    <div style={{ background: '#0f1117', minHeight: '100%' }}>
      {/* Sticky tab bar */}
      <div style={{
        background: 'linear-gradient(135deg,#1a1d27 0%,#13162a 50%,#1a1d27 100%)',
        borderBottom: '1px solid #2e3250',
        position: 'sticky', top: 56, zIndex: 90,
      }}>
        <div style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {/* Overview tab */}
          <button
            onClick={() => setActive(0)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '13px 16px', background: 'transparent', cursor: 'pointer',
              border: 'none', borderBottom: active === 0 ? '3px solid #6c63ff' : '3px solid transparent',
              color: active === 0 ? '#fff' : '#6b7399',
              fontWeight: active === 0 ? 600 : 400, fontSize: '0.82rem',
              whiteSpace: 'nowrap', transition: 'all 0.2s', flexShrink: 0,
            }}
          >
            <span style={{
              width: 22, height: 22, borderRadius: 6, fontSize: '0.7rem', fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: active === 0 ? 'linear-gradient(135deg,#6c63ff,#4ecdc4)' : '#222536',
              color: active === 0 ? '#fff' : '#9fa8c7',
            }}>✦</span>
            Overview
          </button>

          {/* Step tabs */}
          {STEPS.map(s => (
            <button
              key={s.num}
              onClick={() => setActive(s.num)}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '13px 14px', background: 'transparent', cursor: 'pointer',
                border: 'none',
                borderBottom: active === s.num ? `3px solid ${COLORS[s.num-1]}` : '3px solid transparent',
                color: active === s.num ? '#fff' : '#6b7399',
                fontWeight: active === s.num ? 600 : 400, fontSize: '0.82rem',
                whiteSpace: 'nowrap', transition: 'all 0.2s', flexShrink: 0,
              }}
            >
              <span style={{
                width: 22, height: 22, borderRadius: 6, fontSize: '0.7rem', fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: active === s.num ? COLORS[s.num-1] : '#222536',
                color: active === s.num ? '#fff' : '#9fa8c7',
                transition: 'all 0.2s',
              }}>{s.num}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height: 2, background: '#2e3250' }}>
          <div style={{
            height: '100%', width: `${progress}%`,
            background: 'linear-gradient(90deg,#6c63ff,#4ecdc4)',
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem 4rem' }}>
        {/* Back link */}
        <div style={{ marginBottom: '1.25rem' }}>
          <button
            onClick={() => onNavigate('home')}
            style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid #2e3250',
              color: '#9fa8c7', cursor: 'pointer', padding: '5px 12px',
              borderRadius: 6, fontSize: '0.8rem',
            }}
          >← All Lectures</button>
        </div>

        {/* Page header (overview only) */}
        {active === 0 && (
          <div style={{
            background: 'linear-gradient(135deg,#1a1d27 0%,#13162a 100%)',
            border: '1px solid #2e3250', borderRadius: 'var(--radius-lg)',
            padding: '1.75rem', marginBottom: '1.75rem',
          }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: 1.5, color: '#6b7399', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              NIT Calicut · Industry & GenAI · April 2026
            </div>
            <h1 style={{
              fontSize: 'clamp(1.2rem,3vw,1.75rem)', fontWeight: 700, marginBottom: '0.6rem',
              background: 'linear-gradient(135deg,#fff,#4ecdc4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              From Idea to Product — A 10-Step Framework
            </h1>
            <p style={{ color: '#9fa8c7', fontSize: '0.9rem' }}>
              A structured pipeline to take any raw idea from concept to working prototype, using AI at every step.
            </p>
          </div>
        )}

        {active === 0
          ? <OverviewPanel onSelectStep={setActive} />
          : <StepPanel step={activeStep} onSelectStep={setActive} />
        }
      </div>
    </div>
  )
}
