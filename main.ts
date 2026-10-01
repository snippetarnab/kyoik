 <Section id="skills" title={d.skills.title}>
      <div className="space-y-6">
        {d.skills.groups.map((g) => (
          <div key={g.name}>
            <h3 className="mb-2 text-sm font-medium text-muted">{g.name}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm transition hover:-translate-y-0.5 hover:border-fg"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
