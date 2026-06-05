import { linkSections } from "@/data/links";
import {
  Background,
  LinkSection,
  SectionDivider,
  Footer,
} from "@/components/linktree";

export default function Home() {
  const sectionStartIndices: number[] = [];
  let counter = 0;
  linkSections.forEach((section) => {
    sectionStartIndices.push(counter);
    counter += section.links.length + 1;
  });

  return (
    <>
      <Background />
      <main className="relative z-10 min-h-screen flex items-center justify-center px-5 py-14">
        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          {linkSections.map((section, i) => (
            <div key={section.label}>
              <LinkSection
                section={section}
                startIndex={sectionStartIndices[i]}
              />
              {i < linkSections.length - 1 && (
                <SectionDivider delay={sectionStartIndices[i] * 0.07 + 0.2} />
              )}
            </div>
          ))}
          <Footer />
        </div>
      </main>
    </>
  );
}
