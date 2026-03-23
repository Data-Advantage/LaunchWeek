import Link from "next/link";
import { TEMPLATES } from "@/lib/templates";

const NAV_ITEMS = [
  { href: "/templates", label: "Overview" },
  ...TEMPLATES.map((t) => ({
    href: `/templates/${t.slug}`,
    label: t.name.replace(".md", ""),
  })),
  { href: "/templates/demo", label: "Demo (Pixola)" },
];

export function TemplateNav({ current }: { current?: string }) {
  return (
    <nav className="mb-8 flex items-center gap-1 overflow-x-auto border-b border-slate-200 pb-4">
      {NAV_ITEMS.map((item) => {
        const isActive =
          current === item.href ||
          (current === undefined && item.href === "/templates");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-brand-50 text-brand-700"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
