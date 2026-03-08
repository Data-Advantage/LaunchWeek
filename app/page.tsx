import { SECTIONS } from "@/lib/markdown";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">LaunchWeek.ai</h1>
        <p className="text-lg text-gray-500 mb-4">
          Launch Your SaaS in 5 Days. 26 free guides covering go-to-market from positioning to launch.
        </p>
        <p className="text-sm text-gray-400">
          The GTM companion to{" "}
          <a
            href="https://vibeweek.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-700"
          >
            VibeWeek.ai
          </a>
          {" "}— VibeWeek = Build. LaunchWeek = Launch.
          {" "}New to AI tools? Start with{" "}
          <a
            href="https://vibereference.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-700"
          >
            VibeReference.com
          </a>
          .
        </p>
      </div>

      <nav className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
        {SECTIONS.map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}`}
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-300 hover:bg-orange-50 transition-all group"
          >
            {s.day !== null && (
              <div className="text-xs text-orange-500 mb-1 font-medium">
                {`Day ${s.day}`}
              </div>
            )}
            <div className="font-medium text-gray-900 group-hover:text-orange-700">
              {s.label.replace(/^Day \d+: /, "")}
            </div>
          </Link>
        ))}
      </nav>

      <div className="prose prose-gray max-w-none text-sm text-gray-500">
        <p>
          Every guide is action-oriented with prompts, templates, and checklists you can use today.
          AI-accelerated with specific prompts for Claude, Perplexity, and FastWrite.
          Written founder-to-founder — no fluff.
        </p>
      </div>
    </div>
  );
}
