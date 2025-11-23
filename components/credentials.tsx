export function Credentials() {
  const education = [
    {
      degree: "MBA in Finance",
      school: "The Wharton School, University of Pennsylvania",
      year: "2010 - 2012",
    },
    {
      degree: "Bachelor of Science in Accounting",
      school: "University of Michigan",
      year: "2008 - 2012",
    },
  ]

  const certifications = [
    { title: "CPA (Certified Public Accountant)", issuer: "Texas State Board of Accountancy" },
    { title: "CMA (Certified Management Accountant)", issuer: "Institute of Management Accountants" },
  ]

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-16 text-center">Credentials & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-black mb-1">{item.degree}</h4>
                  <p className="text-blue-600 text-sm mb-1">{item.school}</p>
                  <p className="text-gray-500 text-sm">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Certifications & Skills</h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-black mb-1">{cert.title}</h4>
                  <p className="text-gray-600 text-sm">{cert.issuer}</p>
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-black mb-3">Specializations</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2">
                    <span>•</span> Financial Modeling & Analysis
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> M&A Advisory
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> Tax Strategy & Planning
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> Risk Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
