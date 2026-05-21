"use client";

import { useEffect, useRef } from "react";

export default function PhysicsLayer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const Matter = (await import("matter-js")).default;
      const container = containerRef.current;
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      const engine = Matter.Engine.create({ gravity: { x: 0, y: 0.4 } });
      const world = engine.world;

      const render = Matter.Render.create({
        element: container,
        engine,
        options: {
          width,
          height,
          wireframes: false,
          background: "transparent",
        },
      });

      const wallOpts = { isStatic: true, render: { visible: false } };
      Matter.World.add(world, [
        Matter.Bodies.rectangle(width / 2, -10, width, 20, wallOpts),
        Matter.Bodies.rectangle(width / 2, height + 10, width, 20, wallOpts),
        Matter.Bodies.rectangle(-10, height / 2, 20, height, wallOpts),
        Matter.Bodies.rectangle(width + 10, height / 2, 20, height, wallOpts),
      ]);

      const colors = ["#C96A4A", "#E6B86A", "#3D8B5C", "#0E7490", "#9C5BC2"];
      for (let i = 0; i < 6; i++) {
        const ball = Matter.Bodies.circle(
          Math.random() * width,
          Math.random() * height * 0.5,
          8 + Math.random() * 6,
          {
            restitution: 0.85,
            friction: 0.02,
            render: { fillStyle: colors[i % colors.length] },
          }
        );
        Matter.World.add(world, ball);
      }

      const mouse = Matter.Mouse.create(render.canvas);
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      Matter.World.add(world, mouseConstraint);
      render.mouse = mouse;

      const runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);

      cleanup = () => {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
        Matter.World.clear(world, false);
        Matter.Engine.clear(engine);
        render.canvas.remove();
      };
    })();

    return () => cleanup?.();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ zIndex: 1 }}
    />
  );
}
