import { Patent } from "@/data/patent";

export function PatentEntry({ patent }: { patent: Patent }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 mt-1">{patent.year}</span>
        <div className="col-span-3">
          <h3 className="font-serif text-base mb-1 leading-relaxed">
            {patent.title}
          </h3>
          <p className="text-sm text-zinc-600">
            {patent.status}
            {patent.assignee && ` · Named inventor · Filed by ${patent.assignee}`}
          </p>
          {patent.note && (
            <p className="text-sm text-zinc-500 mt-2 italic">{patent.note}</p>
          )}
        </div>
      </div>
    </div>
  );
}
