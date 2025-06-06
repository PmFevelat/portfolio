import Image from "next/image";

export const products = [
  {
    href: "/projects/intent-exchange",
    title: "IntentSwap",
    description: "A meeting transcript to capture and trade buying signals across sales teams.",
    thumbnail: "/images/Exchange1.png",
    images: ["/images/Exchange1.png"],
    stack: ["Buying Signals", "Meeting Intelligence", "Intent Trading"],
    slug: "intent-exchange",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          A meeting transcript platform that automatically detects buying signals in customer conversations and lets sales teams exchange them for high-intent insights on their own target accounts.
        </p>
        
        <p>
          <strong>How it works</strong><br />
        </p>
        <ol>
          <li><strong>Step 1: Define your intent preferences</strong><br />
            Each user sets their preferred buying signals (intents), ideal customer profiles (ICPs), users they don't want to share with (competitors), and those they want to prioritize (partners).
          </li>
          <li><strong>Step 2: Sell as usual – we'll capture the rest</strong><br />
            Keep running your meetings as you normally do. Reelay's smart transcription automatically identifies and highlights buying signals useful to other teams.
            After each meeting, you can review, edit, and control how each captured intent is shared—whether with specific partners or the broader community—and even schedule when it becomes visible.
          </li>
          <li><strong>Step 3: Never share without getting something in return</strong><br />
            Once validated, each intent is offered to relevant users:
            <ul>
              <li>If another user has intent data on one of your targets, you get a trade offer.</li>
              <li>If no match is available, your intent can be bought using credits—which you can later use to unlock insights on your own ICPs.</li>
            </ul>
            In every case, you decide who gets access. You never share without receiving value.
          </li>
        </ol>

        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/Config1.png" 
              alt="Configuration interface" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/Intent1.png" 
              alt="Intent detection" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/IntentConfig1.png" 
              alt="Intent configuration" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/Exchange1.png" 
              alt="Exchange interface" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/Upvote1.png" 
              alt="Upvote system" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "/projects/waze-glassdoor-sales-intel",
    title: "Waze / Glassdoor for Sales Intelligence",
    description: "A feedback-sharing platform to identify key influencers within target accounts.",
    thumbnail: "/images/waze.png",
    images: ["/images/waze.png"],
    stack: ["Sales Intelligence", "Account Mapping", "Feedback Sharing"],
    slug: "waze-glassdoor-sales-intel",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          A feedback-sharing platform that helps sales teams identify key influencers within target accounts (potential champions, blockers, etc.).
        </p>
        <p>
          <strong>How it works</strong><br />
        </p>
        <ul>
          <li><strong>Feedback Input:</strong> Sales reps log key stakeholder insights (e.g., a contact at Danone) directly via CRM or Slack—tagging champions, blockers, etc.</li>
          <li><strong>Matching Engine:</strong> Feedback is matched with insights from other users based on three criteria:
            <ul>
              <li>The user is not a competitor.</li>
              <li>They are interested in one of my accounts (e.g., Danone).</li>
              <li>They have insights on one of my ICPs (e.g., Airbus).</li>
            </ul>
            If a match is found, both users are notified and the exchange happens instantly. If not, I earn a credit that I can later use to unlock an insight of my choice on the platform.
          </li>
          <li><strong>Network Effect:</strong> My account mapping improves over time as other users interact with my feedback and share relevant insights in return.</li>
        </ul>
      </div>
    ),
  },
  {
    href: "/projects/back-again-sales-tech",
    title: "Back again in the sales industry",
    description: "Understanding sales intelligence tools and exploring the ecosystem around stakeholder mapping in complex deals.",
    thumbnail: "/images/accountmapping.png",
    images: ["/images/accountmapping.png", "/images/centralize.png"],
    stack: ["Sales Intelligence", "Relationship Mapping", "Enterprise Sales"],
    slug: "back-again-sales-tech",
    content: (
      <div>
        <p>
          <strong>Themes</strong><br />
          Sales intelligence, lookalike search, sales automation, data enrichment, data providers, opportunity management, relationship mapping, enterprise sales, revenue platforms, audio transcription, CRM auto-fill.
        </p>
        <p>
          <strong>Goal</strong><br />
          Explore the AI revolution in automatic CRM data capture. On the one hand, I explored how AI bring greater visibility to sales leaders and enable platforms focused on deal and pipeline management also evolving toward revenue forecasting. On the other hand, I digged deeper into relationship mapping tools helping sales teams at all levels (sales reps, AEs/AMs, sales leaders) monitor and close deals more effectively. All GTM teams (sales, marketing, customer success) can now align around a single source of truth.
        </p>
        <div className="w-full overflow-hidden rounded-lg shadow-md mt-8">
          <Image 
            src="/images/centralize.png" 
            alt="Centralize" 
            width={800}
            height={400}
            className="w-full"
            style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
          />
        </div>
      </div>
    ),
  },
  {
    href: "/projects/transition-insurance",
    title: "Transition insurance for challenger software",
    description: "A transition insurance to help challenger softwares convince companies hesitant to leave market leaders.",
    thumbnail: "/images/abm.png",
    images: ["/images/abm.png", "/images/abm.png"],
    stack: ["Insurance", "Risk Assessment", "Sales Enablement"],
    slug: "transition-insurance",
    content: (
      <div>
        <p>
          <strong>Initial project</strong><br />
          A transition insurance to help challenger softwares convince companies hesitant to leave market leaders (reimbursement / migration coverage in case of issues).
        </p>
        
        <p>
          <strong>How it works</strong><br />
        </p>
        <ul>
          <li>Quality assessment: The software is evaluated on performance (telemetry, analytics), compliance, and security to earn a quality badge required for insurance eligibility.</li>
          <li>Risk profiling: Success stories and client feedback help define typical user profiles and determine insurable clients and premiums.</li>
          <li>Sales enablement: Sales teams promote the transition insurance as part of their pitch to reduce buyer hesitation.</li>
        </ul>

        <p>
          <strong>Pivot</strong><br />
          Insurance contracts for software integration projects. Just as borrowers are scored for default risk, major IT projects (e.g., ERP implementation, large-scale integrations) can be scored based on their likelihood of success or failure.
        </p>
      </div>
    ),
  },
  {
    href: "/projects/it-systems-explorations",
    title: "4 Explorations in IT Systems, ERP, and Software Integration",
    description: "Exploring modern approaches to legacy systems, ERP integration, and digital transformation.",
    thumbnail: "/images/abm.png",
    images: ["/images/abm.png", "/images/abm.png"],
    stack: ["ERP", "Legacy Systems", "Digital Transformation"],
    slug: "it-systems-explorations",
    content: (
      <div>
        <p>
          <strong>Themes</strong><br />
          ERP legacy systems, monolithic vs best-of-breed ERP, IT modularization, digital transformation projects, system integrators, iPaaS, monitoring and observability tools—now applied to LLMs.
        </p>
        <p>
          <strong>Projects</strong><br />
        </p>
        <ol style={{paddingLeft: '1.2em'}}>
          <li style={{marginBottom: '1em'}}>
            <strong>Analytics tool for monolithic ERP modules</strong><br />
            Goal: Identify underused modules and costly or overly customized processes. Recommend offloading to best-of-breed services and orchestrate integration via MACH frameworks or reliable middleware.
          </li>
          <li style={{marginBottom: '1em'}}>
            <strong>AI-powered engagement layer on legacy ERPs</strong><br />
            Goal: Add a modern user interface and workflow layer over legacy systems without replacing them. Integrate AI (chat assistants, automation) to simplify the use, keeping the legacy ERP as the system of record.
          </li>
          <li style={{marginBottom: '1em'}}>
            <strong>Screen-to-workflow configuration tool for software migrations</strong><br />
            Goal: Use AI computer vision to analyze internal screenshots and video recordings, and auto-generate initial configurations in new ERP/CRM systems (e.g., fields, workflows). Speed up the setup and configuration phases.
          </li>
          <li>
            <strong>IT system mapping tool for legacy architecture refactoring</strong><br />
            Goal: Analyze legacy codebases (.NET, Java…), detect dependencies, and generate refactoring or decomposition plans. Automate parts of the "strangler fig pattern" to extract microservices or migrate code to modern languages.
          </li>
        </ol>
      </div>
    ),
  },
  {
    href: "/projects/calice",
    title: "Calice",
    description:
      "The trust layer for enterprise-startup partnerships.",
    thumbnail: "/images/calice.png",
    images: ["/images/calice.png", "/images/calice.png"],
    stack: ["Startup Discovery", "Open Innovation", "Partnership Risk Scoring"],
    slug: "calice",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Calice helps enterprises find reliable startup partners and assess the long-term viability of their contracts, reducing the risk of pivot, over-customization, or dependency.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Calice secures both the partnership and the contract:
        </p>
        <ul>
          <li>Match with startups based on your risk profile and preferences</li>
          <li>Evaluate startup solidity (funding, client dilution, model stability, compliance, technology)</li>
          <li>Analyze the sustainability of you contrat given its impact on the startup&apos;s roadmap (risk of over customization, client dependency, pivot likelihood)</li>
        </ul>
        
        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/explorestartup.png" 
              alt="Explore startups" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/scoring.png" 
              alt="Startup scoring" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/profilcontrats.png" 
              alt="Contract profiles" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/contratsencours.png" 
              alt="Ongoing contracts" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/ponderation.png" 
              alt="Weighting factors" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "/projects/peerz",
    title: "Peerz",
    description:
      "Know what you test. See what others trust.",
    thumbnail: "/images/peerz.png",
    images: ["/images/peerz.png", "/images/peerz.png"],
    stack: ["Peer-based Discovery", "Trial Tracking", "SaaS Stack Management"],
    slug: "peerz",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Peerz is a collaborative platform that helps professionals and teams track the software they use or test daily, while discovering what tools are truly adopted by similar companies and their peers.
        </p>
        <p>
          <strong>How it works</strong><br />
          Peerz acts as a cockpit for your software stack:
        </p>
        <ul>
          <li>Track tools used or in trial mode</li>
          <li>Set testing objectives and get notified before trials expire</li>
          <li>Manage visibility of your tool stack (private, team-only, public)</li>
          <li>Discover tools adopted by your peers and similar companies</li>
          <li>Connect with users for honest feedback—no fake reviews</li>
        </ul>
        
        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/track.png" 
              alt="Track your tools" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "600px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/search.png" 
              alt="Search for tools" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "600px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/profile.png" 
              alt="User profile" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "600px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/tool.png" 
              alt="Tool details" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "https://skopa1.vercel.app/",
    title: "Skopa (Graph)",
    description:
      "A living graph of tools your peers actually use.",
    thumbnail: "/images/skopaV2.png",
    images: ["/images/skopaV2.png", "/images/skopaV2.png"],
    stack: ["Peer Discovery", "Stack Visualization", "Software Intelligence"],
    slug: "skopa-2",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Skopa is a graph-based interface that helps professionals choose the right software by showing what tools are actually adopted across their LinkedIn network and similar companies.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Skopa turns social proof and usage data into actionable insights:
        </p>
        <ul>
          <li>Sync your LinkedIn contacts and current SaaS stack</li>
          <li>Visualize tool adoption across your network and market</li>
          <li>Explore popular stack combinations by industry or team</li>
          <li>Ask specific questions and get instant answers from AI, powered by trusted sources like G2, Reddit, and verified feedback</li>
        </ul>
        
        <div className="mt-4 mb-8">
          <a
            href="https://skopa1.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-4 origin-left no-underline"
            style={{ textDecoration: 'none' }}
          >
            View Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </a>
        </div>
        
        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/graph.png" 
              alt="Graph visualization" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/selected.png" 
              alt="Selected software" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/assistant.png" 
              alt="AI assistant" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "https://landingskopaa.vercel.app/",
    title: "Skopa (AI Agent)",
    description:
      "The AI that recommends software like your Head of Innovation would.",
    thumbnail: "/images/accueil.png",
    images: ["/images/accueil.png", "/images/accueil.png"],
    stack: ["Software Recommendation", "Instant Tool Matching"],
    slug: "skopa",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Skopa is your personal AI Head of Innovation — a contextual software recommender that helps you pick the right tools instantly, based on your company profile, market signals, and real-world adoption data. No noise, no wasted time — just high-trust recommendations you can defend.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Skopa acts as your personal Head of Innovation:
        </p>
        <ul>
          <li>Autofill your company profile using public signals (industry, size, intent data)</li>
          <li>Get 3 curated recommendations: Best fit, Challenger, and Smart alternative</li>
          <li>Ask specific questions and get instant answers from the AI — no reviews scrolling required</li>
          <li>Save tools and conversations, and generate internal pitch decks to defend your choices</li>
        </ul>
        
        <div className="mt-4 mb-8">
          <a
            href="https://landingskopaa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-4 origin-left no-underline"
            style={{ textDecoration: 'none' }}
          >
            View Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </a>
        </div>
        
        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/search1.png" 
              alt="Skopa search" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/result.png" 
              alt="Skopa results" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/product.png" 
              alt="Skopa product page" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "/projects/ondanse",
    title: "Ondanse",
    description:
      "Only see cold emails backed by people you trust.",
    thumbnail: "/images/ondanse.png",
    images: ["/images/ondanse.png", "/images/ondanse.png"],
    stack: ["Inbox Intelligence", "Peer-Validated Outreach", "B2B Discovery"],
    slug: "ondanse",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Ondanse transforms your inbox into a strategic decision tool, filtering commercial emails through collective intelligence. You only see opportunities validated by companies like yours, trusted partners, or internal experts — enriched with real feedback, usage context, and relevance scoring.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Ondanse filters your emails based on the validation of your peers :
        </p>
        <ul>
          <li>Score each incoming email based on peer adoption, satisfaction, and relevance to your company</li>
          <li>Highlight tools already used and validated by similar companies, partners, or internal employees</li>
          <li>Let teams annotate, assign, or reject offers directly from the inbox — no more wasted time</li>
        </ul>
        
        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/logo.png" 
              alt="Logo Ondanse" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/outsidemail.png" 
              alt="Outside mail view" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/insidemail.png" 
              alt="Inside mail view" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "https://metricore.vercel.app/",
    title: "Metricore",
    description:
      "Encrypted benchmarks that democratize strategic insight.",
    thumbnail: "/images/metricore.png",
    images: ["/images/metricore.png", "/images/metricore.png"],
    stack: ["Encrypted Benchmarking", "Strategic Metrics", "Consulting Alternative"],
    slug: "metricore",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Metricore lets companies compare their key metrics with industry peers — safely and anonymously. What used to be a consulting report is now a secure, self-serve product available to all.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Metricore turns encrypted inputs into real, actionable insights:
        </p>
        <ul>
          <li>Enter key business metrics (CAC, churn, conversion, etc.)</li>
          <li>Validate your data with cryptographic proofs (ZKP)</li>
          <li>Access real-time benchmarks from your industry and similar companies</li>
          <li>Spot strengths, weaknesses, and growth opportunities</li>
          <li>Make better decisions — without hiring a consulting firm</li>
        </ul>
        
        <div className="mt-4 mb-8">
          <a
            href="https://metricore.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-4 origin-left no-underline"
            style={{ textDecoration: 'none' }}
          >
            View Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </a>
        </div>
        
        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/input.png" 
              alt="Input interface" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/secured.png" 
              alt="Secured data" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/resultss.png" 
              alt="Results view" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/dashboardd .png" 
              alt="Dashboard" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "/projects/shazam-3",
    title: "Shazam for need discovery V2",
    description:
      "Let companies discover their needs — before you pitch.",
    thumbnail: "/images/abm.png",
    images: ["/images/abm.png", "/images/abm.png"],
    stack: ["Latent Demand Signals", "Salesless Onboarding", "Consent-Based Activation"],
    slug: "shazam-3",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Shazam helps companies uncover latent needs by comparing themselves to similar businesses — based on tools used, common pain points, and best practices.
          Instead of receiving cold outreach, prospects explore their own improvement areas and choose when to engage.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Shazam turns benchmarking into inbound intent:
        </p>
        <ul>
          <li>Companies access a benchmark dashboard showing how they compare to similar businesses</li>
          <li>The AI highlights weak signals (tool gaps, workflow inefficiencies, missed best practices) and help refining the need</li>
          <li>Once confirmed, the platform recommends relevant solution categories</li>
          <li>Prospects choose if and when to be contacted — sales only start after consent</li>
        </ul>
        
        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/abm.png" 
              alt="Page d&apos;accueil" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/fiche.png" 
              alt="Fiche entreprise" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/ia.png" 
              alt="Interface IA" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/resultatt.png" 
              alt="Résultats" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "/projects/shazam-2",
    title: "Shazam for need discovery",
    description:
      "From cold outbound to AI-powered need discovery.",
    thumbnail: "/images/abm.png",
    images: ["/images/abm.png", "/images/abm.png"],
    stack: ["AI Need Discovery", "Workflow Diagnostics", "Consent-Based Activation"],
    slug: "shazam-2",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Shazam B2B helps companies uncover latent business needs by analyzing their workflows, surfacing improvement areas, and suggesting categories of solutions — all before a sales pitch ever happens. It turns unsolicited outreach into qualified inbound interest.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Shazam B2B replaces cold prospecting with a guided, consultative experience:
        </p>
        <ul>
          <li>Connect CRM, ERP, or complete a smart self-assessment</li>
          <li>The AI detects weak signals (blockers, inefficiencies) and suggests improvement paths</li>
          <li>It simulates a discovery call to refine the need and guide toward solution categories</li>
          <li>The prospect chooses whether to explore tools or connect with suppliers — no push, no spam</li>
          <li>Sales teams only engage once the need is clear and consented to</li>
        </ul>
      </div>
    ),
  },
  {
    href: "/projects/marketing-pressure",
    title: "Syncrowd",
    description:
      "Shared visibility to avoid prospect saturation.",
    thumbnail: "/images/abm.png",
    images: ["/images/abm.png", "/images/abm.png"],
    stack: ["Prospect Saturation Signals", "Coordinated Outreach", "Message Timing Intelligence"],
    slug: "marketing-pressure",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Syncrowd lets sales and marketing teams visualize how saturated a prospect already is — by aggregating anonymized outreach data across companies. It helps refine timing, message, and targeting to improve impact and reduce noise.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Syncrowd tracks and models prospect saturation in four steps:
        </p>
        <ul>
          <li>Connect your CRM or outbound tool to declare prospect interactions (anonymously)</li>
          <li>View an aggregated &quot;pressure score&quot; showing volume and type of messages received by each contact</li>
          <li>Identify when a prospect is over-solicited, and how your outreach compares to others</li>
          <li>Adapt timing and messaging accordingly using the influence graphs made of other commercial offers</li>
        </ul>
      </div>
    ),
  },
  {
    href: "/projects/next-gen-abm",
    title: "Reelay",
    description:
      "ABM tool to map internal influence inside your target accounts.",
    thumbnail: "/images/abm.png",
    images: ["/images/abm.png", "/images/abm.png"],
    stack: ["Influence Mapping", "Account Graph Intelligence", "ABM Prioritization"],
    slug: "next-gen-abm",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Reelay helps B2B teams understand who really matters inside complex organizations by mapping decision roles, influence links, and engagement levels throughout the deal&apos;s progression.
          It builds a live graph of the buying center by combining CRM data with LinkedIn interactions between employees, so teams can prioritize the right contacts and simulate message propagation before acting.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Reelay combines data enrichment, graph theory and simulation:
        </p>
        <ul>
          <li>Connect your CRM to retrieve existing contacts and enrich missing data</li>
          <li>Scrape LinkedIn to detect hidden influencers and map internal interactions between employees</li>
          <li>Build a weighted graph of the buying center with influence and engagement scores</li>
          <li>Test how a message might propagate through the graph — and adapt your strategy before reaching out</li>
          <li>Get personalized activation plans for each role based on influence, engagement, and context</li>
        </ul>
      </div>
    ),
  },
  {
    href: "/projects/kascad",
    title: "Kascad",
    description:
      "A simulation tool to anticipate the performance of a marketing campaign.",
    thumbnail: "/images/homme.png",
    images: ["/images/homme.png", "/images/homme.png"],
    stack: ["Message Propagation Mapping", "Campaign Risk Reduction", "Activation Forecasting"],
    slug: "kascad",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Kascad helps marketing teams model how a message spreads across a target market — to anticipate results, identify blockers, and reduce the risk of wasted spend.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Kascad simulates each step of your campaign execution:
        </p>
        <ul>
          <li>Define your target segment and campaign budget (company type, roles, vertical)</li>
          <li>Create your message and define its format</li>
          <li>Simulate how the message will be received, relayed, or blocked at each stage: awareness, interest, validation, decision</li>
          <li>Identify friction points and amplification levers</li>
          <li>Adjust your messaging and outreach sequence based on projected performance</li>
        </ul>

        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/homme.png" 
              alt="Homme avec vêtements virtuels" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/review.png" 
              alt="Écran de review" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/history.png" 
              alt="Historique des essayages" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "https://www.figma.com/file/8TZX4jmzdnFiGJC85KwMN0/Presence",
    title: "Presence V2",
    description:
      "Personalized music videos, shaped by your memories.",
    thumbnail: "/images/presence.png",
    images: ["/images/presence.png", "/images/presence.png"],
    stack: ["Personalized Music Videos", "Music Memory Experience", "AI-Powered Co-Creation"],
    slug: "presence-v2",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Presence allows listeners to commission personalized music videos based on their own memories and emotions.
          Artists define the visual universe of their songs, while AI creators use this framework to craft unique clips that reflect each listener&apos;s story. Each video becomes a co-created emotional experience — shaped by the artist, interpreted by the creator, and inspired by the listener.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Presence connects listeners, artists, and AI creators:
        </p>
        <ul>
          <li>Artists define the visual identity of their tracks (mood, style, color palette, atmosphere)</li>
          <li>Listeners choose a song and describe the memory or feeling they associate with it</li>
          <li>AI creators generate a custom video aligned with both the artist&apos;s universe and the listener&apos;s input</li>
          <li>The video is delivered and can be viewed, shared, or collected on the platform</li>
          <li>Listeners experience music through personal stories — beyond standard music video</li>
        </ul>
        
        <div className="mt-4 mb-8">
          <a
            href="https://www.figma.com/file/8TZX4jmzdnFiGJC85KwMN0/Presence"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-4 origin-left no-underline"
            style={{ textDecoration: 'none' }}
          >
            View Figma
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </a>
        </div>
        
        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/1.png" 
              alt="Presence V2 - Image 1" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/2.png" 
              alt="Presence V2 - Image 2" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/3.png" 
              alt="Presence V2 - Image 3" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/4.png" 
              alt="Presence V2 - Image 4" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/5.png" 
              alt="Presence V2 - Image 5" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/6.png" 
              alt="Presence V2 - Image 6" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/7.png" 
              alt="Presence V2 - Image 7" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    href: "https://www.figma.com/proto/rGssEfYufpLK1nrRYCeWZT/Untitled?node-id=0-1&t=EPiPRVvMMzbjM0pr-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    title: "Juntoo",
    description:
      "The open-air studio where creation and exhibition happen together.",
    thumbnail: "/images/juntoo.png",
    images: ["/images/juntoo.png", "/images/juntoo.png"],
    stack: ["Live Creation", "Interactive Studio", "Real-Time Art Experience"],
    slug: "juntoo",
    content: (
      <div>
        <p>
          <strong>Overview</strong><br />
          Juntoo redefines how we engage with art by turning the creative process into a shared, real-time experience.
          Rather than showcasing only finished works, the platform creates an &quot;open-air studio&quot; where artists share their work in progress, interact with peers, and invite clients into their creative journey.
        </p>
        
        <p>
          <strong>How it works</strong><br />
          Juntoo merges creation, collaboration, and commissioning in one space:
        </p>
        <ul>
          <li>Artists stream their creative process, receive feedback, and connect with other artists</li>
          <li>Clients follow the evolution of an artwork and commission custom pieces directly from the creative flow</li>
          <li>All users interact within a dynamic environment where art is visible as it&apos;s made — not just once it&apos;s finished</li>
        </ul>
        
        <div className="mt-4 mb-8">
          <a
            href="https://www.figma.com/proto/rGssEfYufpLK1nrRYCeWZT/Untitled?node-id=0-1&t=EPiPRVvMMzbjM0pr-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-4 origin-left no-underline"
            style={{ textDecoration: 'none' }}
          >
            View Figma
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </a>
        </div>
        
        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/début.png" 
              alt="Page de démarrage Juntoo" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/video.png" 
              alt="Interface vidéo Juntoo" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/thread.png" 
              alt="Fil de discussion Juntoo" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/searc.png" 
              alt="Recherche Juntoo" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/profyl.png" 
              alt="Profil utilisateur Juntoo" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/commande1.png" 
              alt="Commande étape 1 Juntoo" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
          
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/commande2 .png" 
              alt="Commande étape 2 Juntoo" 
              width={800}
              height={600}
              className="w-full"
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    ),
  },
];
