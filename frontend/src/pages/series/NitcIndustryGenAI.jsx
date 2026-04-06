import SectionNav from '../../components/SectionNav.jsx'
import SlideSection, { Callout, PromptBlock, ScoreRow } from '../../components/SlideSection.jsx'

const SECTIONS = [
  { id: 'why-ideas-fail',      number: '01', title: 'Why Ideas Fail — The Graveyard Problem' },
  { id: 'two-contexts',        number: '02', title: 'Two Contexts, One Framework' },
  { id: 'framework',           number: '03', title: 'The 7-Question Evaluation Framework' },
  { id: 'traditional-vs-genai',number: '04', title: 'Traditional Research vs. GenAI-Assisted Research' },
  { id: 'genai-prompts',       number: '05', title: 'Practical GenAI Prompts for Idea Evaluation' },
  { id: 'case-study',          number: '06', title: 'Case Study: Walking Through a Real Evaluation' },
  { id: 'decision-gate',       number: '07', title: 'The Decision Gate — Go / No-Go / Pivot' },
  { id: 'ec-proposals',        number: '08', title: 'For Employees: The EC Proposal Version' },
  { id: 'evaluation-habit',    number: '09', title: 'Building Your Evaluation Habit' },
  { id: 'takeaways',           number: '10', title: 'Key Takeaways' },
]

export default function NitcIndustryGenAI({ onNavigate }) {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem' }}>

      {/* Header */}
      <div style={{
        background: 'var(--primary)',
        color: '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: '2.5rem 2.5rem',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -40, right: -40,
          width: 200, height: 200,
          background: 'rgba(245,158,11,0.12)',
          borderRadius: '50%',
        }} />
        <div style={{ fontSize: '0.75rem', letterSpacing: 1.5, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          NIT Calicut · Industry &amp; GenAI Lecture Series · April 2026
        </div>
        <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.25 }}>
          Evaluating Ideas with Generative AI
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', maxWidth: 600, lineHeight: 1.65, marginBottom: '1.25rem' }}>
          A practical framework for engineering students and early-career professionals to evaluate
          startup ideas and internal project proposals — and how GenAI dramatically accelerates this process.
        </p>
        <button
          onClick={() => onNavigate('home')}
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#fff',
            padding: '6px 14px',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: '0.82rem',
          }}
        >← All Lectures</button>
      </div>

      {/* Two-column layout */}
      <div className="lecture-layout">

        {/* Left: Section navigation */}
        <SectionNav sections={SECTIONS} />

        {/* Right: Content */}
        <div>

          {/* Section 01 */}
          <SlideSection id="why-ideas-fail" number="01" title="Why Ideas Fail — The Graveyard Problem">
            <p style={{ marginBottom: '1rem' }}>
              CB Insights tracks why startups fail. Year after year, the <strong>#1 reason is not a bad team,
              not lack of funding, not poor execution</strong> — it is building something nobody wants.
              42% of startups die from this single cause.
            </p>
            <Callout type="warning">
              <strong>The most expensive mistake in engineering</strong> is building the right thing wrong.
              The second most expensive is building the wrong thing perfectly.
            </Callout>
            <p style={{ marginBottom: '1rem' }}>
              The same dynamic plays out inside companies every day. Engineering teams spend months on
              internal tools, dashboards, and process automations that get used twice and then quietly
              abandoned. Not because the code was bad — because nobody validated the problem first.
            </p>
            <ul>
              <li>Most startups die in the graveyard of solutions to imaginary problems</li>
              <li>The failure is almost always traceable back to the first 2 weeks — when someone skipped the evaluation step</li>
              <li>Evaluation is not gatekeeping. It is the highest-leverage engineering work you will ever do.</li>
              <li>2 hours of evaluation can save 2 months of building</li>
            </ul>
          </SlideSection>

          {/* Section 02 */}
          <SlideSection id="two-contexts" number="02" title="Two Contexts, One Framework">
            <p style={{ marginBottom: '1rem' }}>
              This lecture covers two situations you will face in your career. They look different on the surface,
              but they use the exact same evaluation logic.
            </p>
            <div className="col-2" style={{ marginBottom: '1rem' }}>
              <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius)', padding: '1.2rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Context A: Startup Idea</div>
                <ul style={{ fontSize: '0.88rem' }}>
                  <li>You are the founder (or co-founder)</li>
                  <li>Success = paying customers</li>
                  <li>Failure = you lose your time and money</li>
                  <li>Distribution = sales and marketing</li>
                  <li>Stakeholder = the market</li>
                </ul>
              </div>
              <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius)', padding: '1.2rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Context B: EC Proposal</div>
                <ul style={{ fontSize: '0.88rem' }}>
                  <li>You are an employee proposing a project</li>
                  <li>Success = team adopts and uses it</li>
                  <li>Failure = the project gets killed or ignored</li>
                  <li>Distribution = internal buy-in</li>
                  <li>Stakeholder = your manager and their manager</li>
                </ul>
              </div>
            </div>
            <Callout type="tip">
              The questions you ask are identical. The incentive structure differs. A startup founder risks
              their savings; an employee risks their reputation and political capital.
              In both cases, validation before building is how you protect that investment.
            </Callout>
          </SlideSection>

          {/* Section 03 */}
          <SlideSection id="framework" number="03" title="The 7-Question Evaluation Framework" accent>
            <p style={{ marginBottom: '1.25rem' }}>
              These seven questions, answered honestly, will tell you whether an idea deserves your time.
              They apply equally to a ₹10-crore startup and a 3-month internal project.
            </p>

            {[
              {
                q: 'Q1: Who is the customer, and what pain are they feeling right now?',
                detail: 'Name a specific person in a specific situation. Not "SME owners" — "Priya, who runs a 3-chair dental clinic in Kozhikode and loses track of appointment cancellations every Monday morning." The more specific your answer, the more testable your assumptions become.',
              },
              {
                q: 'Q2: How are they solving it today?',
                detail: 'If there is no current solution, that is usually a red flag — it means the problem may not hurt enough. Map out every workaround: WhatsApp groups, Excel sheets, post-its, hiring a part-time assistant. These are your real competitors.',
              },
              {
                q: 'Q3: Why would they switch to your solution?',
                detail: 'Switching costs are high. People hate changing habits even more than they hate their current pain. Your solution must be 10x better on the dimensions they actually care about — not the dimensions you care about.',
              },
              {
                q: 'Q4: How large is the problem?',
                detail: 'For a startup: total addressable market — how many Priyas are there, and how much do they pay today? For an EC proposal: how many hours per week does this problem cost the team, and what is the value of recovering that time?',
              },
              {
                q: 'Q5: Can you build it, and can you defend it?',
                detail: 'Technical feasibility + unfair advantage. Can you build v1 in 60 days with your current team? And once you do, why can\'t a bigger competitor copy it in 30 days and outspend you?',
              },
              {
                q: 'Q6: What does success look like in 90 days?',
                detail: 'Define a specific, measurable milestone. "5 paying customers" or "3 teams actively using the tool daily" — not "we will have launched." A fuzzy success metric means the project never ends and never wins.',
              },
              {
                q: 'Q7: What would kill this idea — and have you tested that assumption?',
                detail: 'Every idea has one or two assumptions that, if wrong, collapse the whole thing. Name your biggest assumption explicitly. Then ask: "What is the cheapest way I can test whether this is true — before writing any code?"',
              },
            ].map(({ q, detail }, i) => (
              <div key={i} style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '1rem',
                marginBottom: '1.25rem',
              }}>
                <div style={{ fontWeight: 700, marginBottom: '0.35rem', color: 'var(--primary)' }}>{q}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{detail}</p>
              </div>
            ))}
          </SlideSection>

          {/* Section 04 */}
          <SlideSection id="traditional-vs-genai" number="04" title="Traditional Research vs. GenAI-Assisted Research">
            <p style={{ marginBottom: '1rem' }}>
              Before GenAI, answering the 7 questions required weeks of work: Google searches,
              academic papers, customer surveys, competitive analysis, industry reports. Most early-stage founders
              skipped it because the cost was too high.
            </p>
            <div className="col-2" style={{ marginBottom: '1.25rem' }}>
              <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 'var(--radius)', padding: '1.1rem' }}>
                <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#991b1b', fontSize: '0.9rem' }}>Traditional — slow, expensive</div>
                <ul style={{ fontSize: '0.85rem', color: '#374151' }}>
                  <li>Google → 50 tabs, hours reading</li>
                  <li>Surveys → 3 weeks to collect 40 responses</li>
                  <li>Competitor research → days of manual investigation</li>
                  <li>Market sizing → hire a consultant</li>
                  <li>Devil's advocate → find a mentor who has time</li>
                </ul>
              </div>
              <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 'var(--radius)', padding: '1.1rem' }}>
                <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#166534', fontSize: '0.9rem' }}>GenAI-assisted — fast, accessible</div>
                <ul style={{ fontSize: '0.85rem', color: '#374151' }}>
                  <li>Synthesises patterns from millions of sources instantly</li>
                  <li>Simulates customer personas on demand</li>
                  <li>Lists competitors and their weaknesses in 30 seconds</li>
                  <li>Helps structure market sizing logic</li>
                  <li>Plays devil's advocate at 2am, for free</li>
                </ul>
              </div>
            </div>
            <Callout type="warning">
              <strong>What GenAI cannot do:</strong> validate with real humans, access private data,
              tell you whether your specific customer will actually pay. GenAI gives you a map — not the territory.
              It is a research accelerator, not a substitute for talking to customers.
            </Callout>
            <p>
              The right workflow: use GenAI to generate hypotheses and sharpen your questions in 2 hours,
              then use those questions in 3–5 real customer conversations to get ground truth.
              The conversations become 10x more productive because you arrive prepared.
            </p>
          </SlideSection>

          {/* Section 05 */}
          <SlideSection id="genai-prompts" number="05" title="Practical GenAI Prompts for Idea Evaluation">
            <p style={{ marginBottom: '1.25rem' }}>
              Copy, adapt, and run these prompts in Claude or ChatGPT. Each targets one of the 7 framework questions.
            </p>

            <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Understanding the customer (Q1)</div>
            <PromptBlock
              prompt={`Describe a day in the life of a small dental clinic owner in India who is managing appointments manually. What are the 3 most painful moments in their workday, and at what exact point would they reach for a new tool?`}
              annotation="Forces the model to get specific about when pain is acute — that is your product trigger moment."
            />

            <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', marginTop: '1rem', fontSize: '0.9rem' }}>Mapping alternatives (Q2)</div>
            <PromptBlock
              prompt={`List every way a small retail shop owner in Kerala currently tracks inventory without dedicated software. Be specific about each workaround, and explain why each one breaks down as the shop grows.`}
              annotation="Your real competitors are these workarounds, not other startups."
            />

            <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', marginTop: '1rem', fontSize: '0.9rem' }}>Surfacing assumptions (Q7)</div>
            <PromptBlock
              prompt={`I'm building [your idea in 2 sentences]. Act as a skeptical investor. List the 5 most dangerous assumptions I'm making, ordered by: (1) how likely they are to be wrong, and (2) how much damage it causes if they are wrong.`}
              annotation="Run this before any other prompt. Find your kill-shot assumption early."
            />

            <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', marginTop: '1rem', fontSize: '0.9rem' }}>Competitive landscape (Q3, Q5)</div>
            <PromptBlock
              prompt={`List the top 5 existing solutions for [problem]. For each: (1) what is their primary customer segment, (2) what are their most-cited complaints on review sites, (3) what would make a customer choose them over a new entrant?`}
              annotation="Cross-reference against G2, Capterra, or App Store reviews to verify."
            />

            <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', marginTop: '1rem', fontSize: '0.9rem' }}>Simulating a customer interview (Q1, Q3)</div>
            <PromptBlock
              prompt={`Simulate a customer interview. You are [specific persona — e.g., "a 35-year-old physiotherapist who runs a 2-staff clinic in Thrissur and currently uses a paper appointment book"]. I will ask questions about your scheduling challenges. Stay in character. Push back if my questions assume things you wouldn't know or care about.`}
              annotation="Not a substitute for real interviews — but excellent for rehearsing and refining your questions."
            />

            <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', marginTop: '1rem', fontSize: '0.9rem' }}>Rough market sizing (Q4)</div>
            <PromptBlock
              prompt={`Help me build a bottom-up market size estimate for [idea]. Start with the total number of [target businesses/users] in India, estimate the realistic addressable subset, and suggest what an appropriate price point would be based on what similar tools charge.`}
              annotation="Always ask for bottom-up (count × price), not top-down (TAM % of giant industry)."
            />
          </SlideSection>

          {/* Section 06 */}
          <SlideSection id="case-study" number="06" title="Case Study: Walking Through a Real Evaluation">
            <p style={{ marginBottom: '1rem' }}>
              Let's evaluate a real idea: <strong>"An AI scheduling assistant for physiotherapy clinics in India."</strong>
              We'll run through all 7 questions using GenAI, then annotate what's useful vs. what needs verification.
            </p>

            <Callout type="info">
              This is a real product that exists (physio.datafortai.com). The evaluation below reflects
              the questions that were actually asked — and the surprises encountered when talking to real clinic owners.
            </Callout>

            {[
              {
                q: 'Q1 — Who is the customer?',
                genai: 'GenAI answer: Physiotherapy clinic owners or front-desk staff at 1–5 therapist clinics who schedule 20–50 patients per week and currently use phone calls + a paper register or WhatsApp.',
                real: 'Ground truth from interviews: The decision-maker is the owner-physiotherapist, not the front desk. They schedule themselves in their head. The pain is not the calendar — it is last-minute cancellations causing empty chairs.',
                lesson: 'GenAI got the persona right but missed the actual pain point. That took 3 conversations.',
              },
              {
                q: 'Q2 — How are they solving it today?',
                genai: 'GenAI answer: WhatsApp messages to confirm appointments, paper register or basic Google Calendar, no-shows handled by follow-up calls.',
                real: 'Ground truth: Accurate. But the deeper finding was that most had tried booking apps once and abandoned them because patients called anyway.',
                lesson: 'The alternative to your app is not doing nothing — it is the habit that already works well enough.',
              },
              {
                q: 'Q7 — Biggest dangerous assumption?',
                genai: 'GenAI answer (as skeptical investor): "You assume clinic owners will change patient behavior. If patients still call to book, the app is invisible and adds no value. The real product might need to solve patient adoption, not clinic adoption."',
                real: 'Ground truth: Exactly right. This insight came from the GenAI session before the interviews. It changed the product direction — we focused on WhatsApp-based booking to meet patients where they already were.',
                lesson: 'The kill-shot assumption prompt saved ~6 weeks of building the wrong thing.',
              },
            ].map(({ q, genai, real, lesson }, i) => (
              <div key={i} style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.25rem',
                marginBottom: '1rem',
              }}>
                <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>{q}</div>
                <div className="col-2" style={{ marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: 1, color: '#6b7280', textTransform: 'uppercase', marginBottom: '0.3rem' }}>GenAI said</div>
                    <p style={{ fontSize: '0.87rem' }}>{genai.replace('GenAI answer: ', '')}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: 1, color: '#059669', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Ground truth (interviews)</div>
                    <p style={{ fontSize: '0.87rem' }}>{real.replace('Ground truth: ', '').replace('Ground truth from interviews: ', '')}</p>
                  </div>
                </div>
                <Callout type="key"><strong>Lesson:</strong> {lesson}</Callout>
              </div>
            ))}
          </SlideSection>

          {/* Section 07 */}
          <SlideSection id="decision-gate" number="07" title="The Decision Gate — Go / No-Go / Pivot">
            <p style={{ marginBottom: '1.25rem' }}>
              After running through the 7 questions, score each one 1–5 and total your score.
              This is a <em>forcing function</em> for honesty — not a formula that tells you what to do.
            </p>

            <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', marginBottom: '1.25rem', overflow: 'hidden' }}>
              <div style={{ padding: '0.75rem 1rem', background: 'var(--primary)', color: '#fff', fontWeight: 600, fontSize: '0.85rem' }}>
                Sample Scorecard — AI Clinic Scheduler
              </div>
              <ScoreRow question="Clear customer with specific pain (Q1)" score={4} note="Defined persona, pain confirmed in interviews" />
              <ScoreRow question="Understands current alternatives (Q2)" score={4} note="WhatsApp + paper — well mapped" />
              <ScoreRow question="Strong reason to switch (Q3)" score={3} note="10x better than paper; marginal vs. WhatsApp" />
              <ScoreRow question="Market size is meaningful (Q4)" score={4} note="~80,000 physio clinics in India" />
              <ScoreRow question="Buildable + defensible (Q5)" score={3} note="Buildable in 60 days; defensible only through deep integrations" />
              <ScoreRow question="90-day success metric defined (Q6)" score={4} note="10 paying clinics in 3 months" />
              <ScoreRow question="Kill-shot assumption tested (Q7)" score={3} note="Patient adoption risk identified; partially mitigated with WhatsApp flow" />
              <div style={{ padding: '0.75rem 1rem', borderTop: '2px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>Total Score</span>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#059669' }}>25 / 35</span>
              </div>
            </div>

            <div className="col-3">
              {[
                { range: '< 20', label: 'Stop or Pivot', color: '#dc2626', bg: '#fef2f2', desc: 'One or more fundamental assumptions are likely wrong. Go back to customer research before writing any code.' },
                { range: '20 – 29', label: 'Proceed with Caution', color: '#d97706', bg: '#fffbeb', desc: 'The idea has merit but meaningful risk remains. Build the smallest testable version and validate the weakest questions first.' },
                { range: '30 – 35', label: 'High Confidence', color: '#059669', bg: '#f0fdf4', desc: 'Strong across all dimensions. Start building. Revisit the scorecard every 4 weeks — scores change as you learn.' },
              ].map(({ range, label, color, bg, desc }) => (
                <div key={range} style={{ background: bg, borderRadius: 'var(--radius)', padding: '1rem', border: `1px solid ${color}33` }}>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color, marginBottom: '0.25rem' }}>{range}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color, marginBottom: '0.5rem' }}>{label}</div>
                  <p style={{ fontSize: '0.82rem', color: '#374151' }}>{desc}</p>
                </div>
              ))}
            </div>
          </SlideSection>

          {/* Section 08 */}
          <SlideSection id="ec-proposals" number="08" title="For Employees: The EC Proposal Version">
            <p style={{ marginBottom: '1rem' }}>
              "EC" stands for Engineering Contribution — the internal project you propose to your team or manager.
              The failure mode here is not financial ruin but something equally costly: political capital spent on
              a project nobody used.
            </p>

            <div className="col-2" style={{ marginBottom: '1.25rem' }}>
              <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.1rem' }}>
                <div style={{ fontWeight: 700, color: '#991b1b', marginBottom: '0.6rem', fontSize: '0.9rem' }}>Common EC Mistakes</div>
                <ul style={{ fontSize: '0.87rem' }}>
                  <li>Proposing a tool you want to build, not one anyone asked for</li>
                  <li>Solving a problem that only you experience</li>
                  <li>No success metric — "it will be useful" is not a metric</li>
                  <li>Not talking to the 3 people who will use it before building</li>
                  <li>Building the full version when a script would do</li>
                </ul>
              </div>
              <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.1rem' }}>
                <div style={{ fontWeight: 700, color: '#166534', marginBottom: '0.6rem', fontSize: '0.9rem' }}>What Good Looks Like</div>
                <ul style={{ fontSize: '0.87rem' }}>
                  <li>"I asked 5 engineers on the team — 4 hit this problem at least weekly"</li>
                  <li>"Current workaround takes 45 minutes; my tool does it in 3"</li>
                  <li>"Here's a 2-day prototype — try it for a week, tell me what's wrong"</li>
                  <li>"Success = 5 people use it at least twice a week, unprompted, 4 weeks after launch"</li>
                </ul>
              </div>
            </div>

            <p style={{ marginBottom: '1rem' }}>
              <strong>The framework translation:</strong>
            </p>
            <div className="responsive-table">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.87rem' }}>
                <thead>
                  <tr style={{ background: 'var(--primary)', color: '#fff' }}>
                    <th style={{ padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 600 }}>Framework question</th>
                    <th style={{ padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 600 }}>Startup version</th>
                    <th style={{ padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 600 }}>EC proposal version</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Customer', 'Paying user in the market', 'Colleague who will use the tool'],
                    ['Pain', 'Problem worth paying to solve', 'Time/quality cost worth fixing'],
                    ['Market size', 'Number of potential customers', 'Number of affected team members × hours/week'],
                    ['Distribution', 'Sales & marketing channels', 'Manager buy-in + team onboarding'],
                    ['Success metric', '# paying customers in 90 days', '# active users after 4 weeks, unprompted'],
                    ['Kill-shot assumption', 'Customers will switch', 'Team will adopt and maintain the habit'],
                  ].map(([q, s, e], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface-alt)' }}>
                      <td style={{ padding: '0.5rem 0.75rem', fontWeight: 600, color: 'var(--primary)', borderBottom: '1px solid var(--border)' }}>{q}</td>
                      <td style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--border)' }}>{s}</td>
                      <td style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--border)' }}>{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SlideSection>

          {/* Section 09 */}
          <SlideSection id="evaluation-habit" number="09" title="Building Your Evaluation Habit">
            <p style={{ marginBottom: '1rem' }}>
              Evaluation is a skill, not a checklist. The best product thinkers have an always-on habit of
              examining ideas critically — in the shower, in meetings, at the whiteboard.
            </p>

            <div className="col-3" style={{ marginBottom: '1.25rem' }}>
              {[
                {
                  title: 'The 2-Hour Rule',
                  body: 'Before spending 2 weeks on any idea, invest 2 hours in evaluation. Run the 7 questions with GenAI. If you cannot spend 2 hours figuring out whether the idea is worth pursuing, you will not spend 2 months building it well.',
                },
                {
                  title: 'Keep an Idea Log',
                  body: 'Write down every idea — however small. Run a quick 7-question scan. Mark each: Explore (interesting), Shelf (not now), Kill (tested assumption failed). Review monthly. Ideas that survive 3 reviews are worth prototyping.',
                },
                {
                  title: 'GenAI as Devil\'s Advocate',
                  body: 'Maintain a "skeptic persona" prompt you use on every new idea. Before pitching to anyone, run the idea through GenAI pretending to be a skeptical investor. Fix every hole it finds before the real conversation.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{
                  background: 'var(--surface-alt)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius)',
                  padding: '1.25rem',
                }}>
                  <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem', fontSize: '0.9rem' }}>{title}</div>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>{body}</p>
                </div>
              ))}
            </div>

            <Callout type="tip">
              <strong>The meta-skill:</strong> The goal of evaluation is not to get to "yes." It is to find the
              fastest path to an honest answer — whether that answer is yes, no, or "not yet, but here's
              what needs to be true first."
            </Callout>
          </SlideSection>

          {/* Section 10 */}
          <SlideSection id="takeaways" number="10" title="Key Takeaways" accent>
            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                'The #1 reason ideas fail is building something nobody wants — evaluation is how you prevent this.',
                'The 7-question framework works for startups and internal EC proposals. The questions are the same; the stakes differ.',
                'GenAI compresses days of research into hours. Use it for hypothesis generation, not ground truth.',
                'Your biggest dangerous assumption is your most important thing to test — find it in the first hour, not after 2 months.',
                'Score your idea against the 7 questions. < 20: stop. 20–29: validate more. 30+: build.',
                'The 2-hour evaluation habit, done consistently, is the single highest-leverage thing you can do as an engineer or founder.',
              ].map((point, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '0.85rem',
                  alignItems: 'flex-start',
                  padding: '0.85rem 1rem',
                  background: 'var(--surface-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                }}>
                  <span style={{
                    background: 'var(--accent)',
                    color: 'var(--primary)',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>{i + 1}</span>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{point}</p>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>Tools Referenced</div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['Claude (claude.ai)', 'ChatGPT', 'Perplexity (for web-grounded research)', 'CB Insights Startup Failure Tracker', 'G2 / Capterra (competitor reviews)'].map(t => (
                  <span key={t} style={{
                    background: 'var(--surface-alt)',
                    border: '1px solid var(--border-strong)',
                    color: 'var(--primary)',
                    fontSize: '0.78rem',
                    padding: '4px 12px',
                    borderRadius: 16,
                    fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </SlideSection>

        </div>
      </div>
    </div>
  )
}
