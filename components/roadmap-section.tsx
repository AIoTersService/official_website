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

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {/* Step 1 */}
          <div className="p-6 rounded-xl shadow bg-white flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center font-bold mb-2 text-lg">1</div>
            <div className="mb-4">
              <BarChart className="h-8 w-8 text-[#2B3A67]" />
            </div>
            <h3 className="font-bold text-lg mb-2">擴展從BI決策到提供AI能源管理能力</h3>
            <p className="text-gray-500 mb-1">Expand from BI decision-making to providing AI energy management capabilities</p>
          </div>
          {/* Step 2 */}
          <div className="p-6 rounded-xl shadow bg-white flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold mb-2 text-lg">2</div>
            <div className="mb-4">
              <Gauge className="h-8 w-8 text-[#8B5A8C]" />
            </div>
            <h3 className="font-bold text-lg mb-2">能源領域最佳控制方案</h3>
            <p className="text-gray-500 mb-1">Best control solutions in the energy field</p>
            <ul className="mt-2 space-y-1 text-gray-500 text-sm">
              <li className="flex items-center justify-center"><ArrowRight className="mr-2 h-4 w-4" />冷調空調水側AI方案 / HVAC water-side AI solution</li>
              <li className="flex items-center justify-center"><ArrowRight className="mr-2 h-4 w-4" />氣側AI方案 / Air-side AI solution</li>
              <li className="flex items-center justify-center"><ArrowRight className="mr-2 h-4 w-4" />水質管理AI方案 / Water quality management AI solution</li>
            </ul>
          </div>
          {/* Step 3 */}
          <div className="p-6 rounded-xl shadow bg-white flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mb-2 text-lg">3</div>
            <div className="mb-4">
              <Zap className="h-8 w-8 text-[#E17B47]" />
            </div>
            <h3 className="font-bold text-lg mb-2">電力虛量卸載AI預測</h3>
            <p className="text-gray-500 mb-1">AI prediction for power virtual load shedding</p>
            <p className="text-gray-500 text-sm">有助企業實現減碳目標 / Helps enterprises achieve carbon reduction goals</p>
          </div>
          {/* Step 4 */}
          <div className="p-6 rounded-xl shadow bg-white flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2B3A67] via-[#8B5A8C] to-[#E17B47] text-white flex items-center justify-center font-bold mb-2 text-lg">4</div>
            <div className="mb-4">
              <LineChart className="h-8 w-8 bg-gradient-to-r from-[#2B3A67] via-[#8B5A8C] to-[#E17B47] bg-clip-text text-transparent" />
            </div>
            <h3 className="font-bold text-lg mb-2">全球領先綜合方案</h3>
            <p className="text-gray-500 mb-1">Globally leading comprehensive solutions</p>
            <p className="text-gray-500 text-sm">打造國際化AIoT能源管理綜合方案 / Building internationalized AIoT energy management comprehensive solutions</p>
          </div>
        </div>

        <div className="text-center mt-12">
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
