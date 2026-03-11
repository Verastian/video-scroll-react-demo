import { useEffect, useRef, useCallback, type MutableRefObject, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TEXT_BLOCKS } from '../data/textBlocks';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 129;
const getFrameSrc = (index: number) =>
  `/frames/${String(index + 1).padStart(4, '0')}.jpg`;

interface UseScrollAnimationArgs {
  containerRef: RefObject<HTMLDivElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  textRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

export function useScrollAnimation({
  containerRef,
  canvasRef,
  textRefs,
}: UseScrollAnimationArgs): void {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameState = useRef({ frame: 0 });

  const renderFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameState.current.frame];
    if (!img?.complete || !img.naturalWidth) return;

    const cW = canvas.width;
    const cH = canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cW / cH;

    let dW: number, dH: number, dX: number, dY: number;

    if (canvasRatio > imgRatio) {
      dW = cW;
      dH = cW / imgRatio;
      dX = 0;
      dY = (cH - dH) / 2;
    } else {
      dW = cH * imgRatio;
      dH = cH;
      dX = (cW - dW) / 2;
      dY = 0;
    }

    ctx.clearRect(0, 0, cW, cH);
    ctx.drawImage(img, dX, dY, dW, dH);
  }, [canvasRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // ── Canvas sizing ──────────────────────────────────────────────
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame();
    };
    setSize();
    window.addEventListener('resize', setSize);

    // ── Preload frames ─────────────────────────────────────────────
    const images = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = getFrameSrc(i);
      return img;
    });
    imagesRef.current = images;
    images[0].onload = renderFrame;

    // ── GSAP animations ────────────────────────────────────────────
    const ctx = gsap.context(() => {

      // Frame scrub — uses CSS sticky (no GSAP pin)
      gsap.to(frameState.current, {
        frame: FRAME_COUNT - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
        onUpdate: renderFrame,
      });

      // Text block fade-in / fade-out
      TEXT_BLOCKS.forEach(({ startPct, endPct }, i) => {
        const el = textRefs.current[i];
        if (!el) return;

        const midPct = (startPct + endPct) / 2;

        gsap.set(el, { opacity: 0, y: 30 });

        gsap.to(el, {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: `${startPct * 100}% top`,
            end: `${midPct * 100}% top`,
            scrub: true,
          },
        });

        gsap.to(el, {
          opacity: 0,
          y: -30,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: container,
            start: `${midPct * 100}% top`,
            end: `${endPct * 100}% top`,
            scrub: true,
          },
        });
      });

    }, container);

    return () => {
      window.removeEventListener('resize', setSize);
      ctx.revert(); // cleans up all GSAP ScrollTriggers created in this context
    };
  }, [canvasRef, containerRef, textRefs, renderFrame]);
}
