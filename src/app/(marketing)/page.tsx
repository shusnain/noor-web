import Link from "next/link";
import {
  ScanSearch,
  MessageSquareText,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Detect",
    description:
      "Invoices arrive via email, EDI, or portal. Within seconds, Ojala parses every line item, matches to the PO, cross-references contracted pricing, and flags discrepancies.",
    detail:
      "\"Invoice #4847 from Medline has 3 issues totaling $1,247\"",
    icon: ScanSearch,
  },
  {
    number: "02",
    title: "Dispute",
    description:
      "Ojala assembles the evidence, drafts a calibrated dispute, and sends it. Or queues it for your review. You choose the autonomy level.",
    detail:
      "Full auto, review queue, or high-touch. Per vendor, per threshold.",
    icon: MessageSquareText,
  },
  {
    number: "03",
    title: "Recover",
    description:
      "Follow-ups are automatic. Credit memos are matched to disputes, amounts verified, and accounting flagged for reconciliation.",
    detail: "\"Recovered $1,247 from Medline. $14,820 recovered YTD.\"",
    icon: DollarSign,
  },
];

const autonomyLevels = [
  {
    name: "Full auto",
    description: "Disputes under your threshold are sent without approval.",
  },
  {
    name: "Review queue",
    description:
      "Drafts go into a queue. Batch-approve with one click.",
  },
  {
    name: "High-touch",
    description: "Review and edit every communication before it sends.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-(family-name:--font-outfit)">
      {/* Nav */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-xl font-semibold text-stone-800">
          Ojala
        </span>
        <Link
          href="/home"
          className="rounded-lg bg-stone-800 px-4 py-2 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-20 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-stone-400">
          AI-native invoice recovery
        </p>
        <h1 className="mt-4 text-5xl font-medium leading-tight tracking-tight text-stone-800 font-(family-name:--font-newsreader) sm:text-6xl">
          Stop losing money on
          <br />
          invoice errors
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
          Most invoice discrepancies slip through because disputing them takes
          hours. Ojala detects errors, builds the dispute, sends it, follows up,
          and recovers the money. Automatically.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-800 px-6 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* The problem */}
      <section className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-stone-400">
            The current state
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-stone-800 font-(family-name:--font-newsreader)">
            Hours per dispute. Most errors just slip through.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            Notice the total seems high. Pull the PO. Cross-reference line
            items. Dig up the contract. Write the email. Wait. Follow up. Get
            the credit memo. Reconcile. This takes hours. And that&apos;s when
            someone catches it at all.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="border-t border-stone-200">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-stone-400">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-stone-800 font-(family-name:--font-newsreader)">
              The full loop, automated
            </h2>
          </div>

          <div className="mt-16 space-y-16">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-100">
                  <step.icon className="h-5 w-5 text-stone-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-stone-400">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-medium text-stone-800 font-(family-name:--font-newsreader)">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 leading-relaxed text-stone-600">
                    {step.description}
                  </p>
                  <p className="mt-3 text-sm italic text-stone-500">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomy levels */}
      <section className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-stone-400">
              Your rules
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-stone-800 font-(family-name:--font-newsreader)">
              Choose how much autonomy to give it
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {autonomyLevels.map((level) => (
              <div
                key={level.name}
                className="rounded-xl border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="font-medium text-stone-800 font-(family-name:--font-newsreader)">
                  {level.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you see */}
      <section className="border-t border-stone-200">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-stone-400">
              The interface
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-stone-800 font-(family-name:--font-newsreader)">
              Not a dashboard to study. A feed that works for you.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-stone-200 bg-stone-100">
                <Zap className="h-5 w-5 text-stone-600" />
              </div>
              <h3 className="mt-4 font-medium text-stone-800 font-(family-name:--font-newsreader)">
                Daily feed
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                &ldquo;3 invoices processed, 1 dispute opened ($312), 1 resolved
                ($847).&rdquo; Plus an approval queue.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-stone-200 bg-stone-100">
                <TrendingUp className="h-5 w-5 text-stone-600" />
              </div>
              <h3 className="mt-4 font-medium text-stone-800 font-(family-name:--font-newsreader)">
                Monthly report
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Total identified, disputed, recovered, and leakage. Errors you
                chose not to pursue.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-stone-200 bg-stone-100">
                <MessageSquareText className="h-5 w-5 text-stone-600" />
              </div>
              <h3 className="mt-4 font-medium text-stone-800 font-(family-name:--font-newsreader)">
                Conversational
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                &ldquo;What&apos;s the status of our open disputes with
                McKesson?&rdquo; Immediate answer with context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-stone-200 bg-stone-50">
            <ShieldCheck className="h-5 w-5 text-stone-600" />
          </div>
          <h2 className="mt-6 text-3xl font-medium tracking-tight text-stone-800 font-(family-name:--font-newsreader)">
            Built to earn trust
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
            Start in review mode. Approve every action. As confidence grows,
            open up autonomy per vendor, per dollar threshold. Full audit trail
            on everything.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-stone-800 font-(family-name:--font-newsreader)">
            Stop leaving money on the table
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-stone-600">
            Every invoice error that slips through is money lost. Ojala closes
            the loop, from detection to recovery.
          </p>
          <Link
            href="/home"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-stone-800 px-6 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <p className="text-sm text-stone-500">
            Ojala
          </p>
        </div>
      </footer>
    </div>
  );
}
