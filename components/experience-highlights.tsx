export function ExperienceHighlights() {
  const jobs = [
    {
      title: "Senior Finance Manager",
      company: "Fortune 500 Technology Company",
      period: "2020 - Present",
      description:
        "Leading financial planning and analysis for a $2B revenue division. Responsible for budgeting, forecasting, and strategic financial initiatives that have resulted in 15% cost optimization and improved operational efficiency.",
    },
    {
      title: "Finance Manager",
      company: "Mid-Market Manufacturing Company",
      period: "2017 - 2020",
      description:
        "Oversaw all financial operations including accounting, tax compliance, and financial reporting. Played a key role in the company's IPO preparation and successful public offering.",
    },
    {
      title: "Senior Financial Analyst",
      company: "Regional Healthcare System",
      period: "2014 - 2017",
      description:
        "Specialized in healthcare finance, managing budgets for multiple hospital facilities and analyzing operational performance metrics to drive cost reduction initiatives.",
    },
    {
      title: "Financial Analyst",
      company: "Big Four Accounting Firm",
      period: "2012 - 2014",
      description:
        "Started career in public accounting, gaining comprehensive experience in audit, tax, and advisory services across diverse client portfolios including Fortune 500 companies.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-16">Professional Background</h2>
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full ${index === 0 ? "bg-blue-600" : "bg-gray-300"} flex-shrink-0 mt-2`}
                ></div>
                {index < jobs.length - 1 && (
                  <div className="w-1 bg-gray-200 flex-grow" style={{ height: "120px", marginTop: "8px" }}></div>
                )}
              </div>
              <div className="pb-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-black">{job.title}</h3>
                  <span className="text-sm text-gray-500">{job.period}</span>
                </div>
                <p className="text-blue-600 font-medium mb-3">{job.company}</p>
                <p className="text-gray-600 leading-relaxed">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
