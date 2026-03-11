import { useRef, Fragment } from 'react';
import clsx from 'clsx';
import { TEXT_BLOCKS } from '../../data/textBlocks';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function ScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useScrollAnimation({ containerRef, canvasRef, textRefs });

  return (
    /* Tall container — provides scroll distance */
    <div ref={containerRef} className="relative h-[600vh]">

      {/* Sticky wrapper — stays in viewport while container scrolls */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {TEXT_BLOCKS.map(({ id, label, titleLines, bodyLines }, i) => (
          <div
            key={id}
            ref={(el) => { textRefs.current[i] = el; }}
            className={clsx(
              'absolute left-[8%] top-1/2 -translate-y-1/2',
              'max-w-[480px] pointer-events-none',
              /* initial opacity set by GSAP */
            )}
          >
            <span className="block text-[0.75rem] font-normal tracking-[0.2em] uppercase text-white/50 mb-5">
              {label}
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-5">
              {titleLines.map((line, j) => (
                <Fragment key={j}>
                  {j > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h1>
            <p className="text-base font-light leading-[1.7] text-white/65">
              {bodyLines.map((line, j) => (
                <Fragment key={j}>
                  {j > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
