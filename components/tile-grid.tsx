import { CodeTile } from "./tiles/code-tile"
import { IconTile } from "./tiles/icon-tile"
import { TextTile } from "./tiles/text-tile"
import { DiagramTile } from "./tiles/diagram-tile"
import { ConnectorLine } from "./connector-line"

export function TileGrid() {
  return (
    <section id="work" className="relative max-w-[1600px] mx-auto px-4 md:px-6 py-12 md:py-20">
      {/* Decorative connectors - hidden on mobile for cleaner look */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
        <ConnectorLine startX="25%" startY="10%" endX="50%" endY="30%" />
        <ConnectorLine startX="75%" startY="20%" endX="50%" endY="40%" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
        <TextTile
          title="Build"
          description="Full-stack applications with modern frameworks. React, Next.js, Node.js, TypeScript."
        />

        <CodeTile
          code={`const deploy = async () => {
  await build()
  await test()
  return ship()
}`}
          language="typescript"
        />

        <IconTile icon="compass" label="Explore" />

        <DiagramTile />

        <TextTile
          title="Design"
          description="Interface systems that prioritize clarity, performance, and accessibility."
          accent
        />

        <IconTile icon="wrench" label="Craft" />

        <CodeTile
          code={`// Clean, maintainable code
export function Component() {
  return <UI />
}`}
          language="tsx"
        />

        <TextTile title="Ship" description="From concept to production. Fast iterations, solid foundations." />

        <IconTile icon="target" label="Impact" />
      </div>
    </section>
  )
}
