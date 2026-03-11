interface Card {
  title: string;
  body: string;
}

const CARDS: Card[] = [
  {
    title: 'Smooth Frame Playback',
    body: 'Leveraging HTML5 Canvas for high-performance frame-by-frame animation triggered by GSAP ScrollTrigger.',
  },
  {
    title: 'Web-Optimized',
    body: 'Preloaded image sequences ensure zero lag and perfect synchronization with your scroll speed.',
  },
];

export default function Spacer() {
  return (
    <div
      className="
        h-screen flex justify-center items-center px-[10%]
        bg-gradient-to-b from-transparent to-[--color-surface-muted]
        transition-colors duration-300
      "
    >
      <div className="grid grid-cols-2 gap-8 w-full">
        {CARDS.map(({ title, body }) => (
          <div
            key={title}
            className="
              bg-[--color-card] rounded-2xl p-8 min-h-[40vh]
              shadow-[0_0_20px_rgba(0,0,0,0.08)]
              border border-[--color-border]
              transition-colors duration-300
            "
          >
            <h2
              className="
                text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] mb-5
                text-[--color-foreground]
              "
            >
              {title}
            </h2>
            <p
              className="
                text-2xl font-light leading-[1.7] italic
                text-[--color-foreground-muted]
              "
            >
              {body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
