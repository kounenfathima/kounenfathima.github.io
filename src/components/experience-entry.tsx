import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{experience.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif">
          {experience.title} —{" "}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-zinc-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>
        {experience.advisor && (
          <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
            Advisor: {experience.advisor}
          </p>
        )}
        {experience.manager && (
          <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
            Manager: {experience.manager}
          </p>
        )}
        {experience.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2 text-justify hyphens-auto">
            {experience.description}
          </p>
        )}
        {experience.bullets && experience.bullets.length > 0 && (
          <ul className="list-disc pl-5 mt-3 space-y-2 marker:text-zinc-400">
            {experience.bullets.map((bullet, index) => (
              <li
                key={index}
                className="text-sm text-zinc-600 leading-relaxed text-justify hyphens-auto"
                dangerouslySetInnerHTML={{ __html: bullet }}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
