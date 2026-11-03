import { useMessages } from '../../i18n/useLocale'

/** x of each stage's dot in the 640 wide drawing; the labels sit in five equal columns under them. */
const DOTS = [96, 208, 320, 432, 544]

/**
 * The run as a diagram: five stages on one line, the last (the named approver) picked out. It is
 * the poster the recorded run (roadmap row 7) will sit behind; until that exists there is nothing
 * to play, so there is no play button. Dark in both themes, like a video frame.
 */
export function RunDiagram() {
  const t = useMessages().common.run
  return (
    <figure
      role="img"
      aria-label={t.diagramLabel}
      className="relative m-0 aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[#0D0D0D]"
    >
      <svg
        viewBox="0 0 640 360"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        <path d="M96 200 H544" stroke="#40A8FF" strokeOpacity="0.45" strokeWidth="2" />
        {DOTS.map((x, i) => (
          <circle key={x} cx={x} cy={200} r={i === DOTS.length - 1 ? 9 : 7} fill={i === DOTS.length - 1 ? '#FFFFFF' : '#40A8FF'} />
        ))}
      </svg>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[62%] grid grid-cols-5 px-[6%] text-center text-[11px] text-[#A3A3A3] sm:text-[13px]"
      >
        {t.stages.map((stage, i) => (
          <span key={stage} className={i === t.stages.length - 1 ? 'text-white' : undefined}>
            {stage}
          </span>
        ))}
      </div>
    </figure>
  )
}
