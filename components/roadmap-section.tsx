import { ArrowRight, BarChart, Gauge, LineChart, Zap } from "lucide-react"

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AIoTers 未來藍圖</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              AIoTers Future Roadmap
            </p>
          </div>
        </div>

        <div className="relative mt-12 mb-16">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#2B3A67] via-[#8B5A8C] to-[#E17B47]"></div>

          <div className="grid gap-8">
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right">
                <div className="inline-flex items-center justify-center rounded-full bg-[#2B3A67]/10 p-3">
                  <BarChart className="h-6 w-6 text-[#2B3A67]" />
                </div>
                <h3 className="mt-3 text-xl font-bold">擴展從BI決策到提供AI能源管理能力</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Expand from BI decision-making to providing AI energy management capabilities
                </p>
              </div>
              <div className="hidden md:block"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2B3A67] text-white">1</div>
              </div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:block"></div>
              <div>
                <div className="inline-flex items-center justify-center rounded-full bg-[#8B5A8C]/10 p-3">
                  <Gauge className="h-6 w-6 text-[#8B5A8C]" />
                </div>
                <h3 className="mt-3 text-xl font-bold">能源領域最佳控制方案</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Best control solutions in the energy field</p>
                <ul className="mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    冷調空調水側AI方案 / HVAC water-side AI solution
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    氣側AI方案 / Air-side AI solution
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    水質管理AI方案 / Water quality management AI solution
                  </li>
                </ul>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B5A8C] text-white">2</div>
              </div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right">
                <div className="inline-flex items-center justify-center rounded-full bg-[#E17B47]/10 p-3">
                  <Zap className="h-6 w-6 text-[#E17B47]" />
                </div>
                <h3 className="mt-3 text-xl font-bold">電力虛量卸載AI預測</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">AI prediction for power virtual load shedding</p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  有助企業實現減碳目標 / Helps enterprises achieve carbon reduction goals
                </p>
              </div>
              <div className="hidden md:block"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E17B47] text-white">3</div>
              </div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:block"></div>
              <div>
                <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2B3A67]/10 via-[#8B5A8C]/10 to-[#E17B47]/10 p-3">
                  <LineChart className="h-6 w-6 bg-gradient-to-r from-[#2B3A67] via-[#8B5A8C] to-[#E17B47] bg-clip-text text-transparent" />
                </div>
                <h3 className="mt-3 text-xl font-bold">全球領先綜合方案</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Globally leading comprehensive solutions</p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  打造國際化AIoT能源管理綜合方案 / Building internationalized AIoT energy management comprehensive
                  solutions
                </p>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#2B3A67] via-[#8B5A8C] to-[#E17B47] text-white">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            奧特智能科技持續深耕AI自主控制與預測演算法。
          </p>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            AIoTers Technology continues to deepen AI autonomous control and prediction algorithms.
          </p>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-4">讓我們攜手共創智慧能源新未來！</p>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Let's work together to create a new future of smart energy!
          </p>
        </div>
      </div>
    </section>
  )
}
