import { education, certifications } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="container-px py-16 sm:py-20">
      <div ref={ref} className="reveal">
        {/* certifications */}
        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-500 mb-5">
            // Certifications
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex items-start gap-4 card p-5 card-hover-glow card-hover-scale transition-transform duration-300"
              >
                <span className="mt-1 w-2 h-2 rounded-sm bg-mint-500 shrink-0" />
                <div>
                  <p className="text-paper-100 font-medium leading-snug">{cert.title}</p>
                  <p className="text-paper-500 text-sm mt-1">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
