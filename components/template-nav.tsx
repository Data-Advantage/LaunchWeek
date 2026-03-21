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
    <nav className="flex items-center gap-1 overflow-x-auto pb-4 mb-6 border-b border-gray-100">
      {NAV_ITEMS.map((item) => {
        const isActive =
          current === item.href ||
          (current === undefined && item.href === "/templates");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm px-3 py-1.5 rounded whitespace-nowrap transition-colors ${
              isActive
                ? "bg-orange-50 text-orange-700 font-medium"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
