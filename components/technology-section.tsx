import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cloud, Wifi } from "lucide-react"

export default function TechnologySection() {
  const technologies = [
    {
      icon: <Brain className="h-10 w-10 text-[#8B5A8C]" />,
      title: "自主學習與最佳化控制",
      englishTitle: "Self-Learning & Optimization Control",
      description: "智能演算法持續優化能源使用策略",
      englishDescription: "Intelligent algorithms continuously optimize energy usage strategies",
    },
    {
      icon: <Cloud className="h-10 w-10 text-[#2B3A67]" />,
      title: "雲端運算與決策支持",
      englishTitle: "Cloud Computing & Decision Support",
      description: "大數據分析平台整合多源資訊",
      englishDescription: "Big data analytics platform integrates multi-source information",
    },
    {
      icon: <Wifi className="h-10 w-10 text-[#E17B47]" />,
      title: "實時數據監控與設備聯網",
      englishTitle: "Real-time Data Monitoring & Device Networking",
      description: "物聯網感測器全面覆蓋關鍵設備",
      englishDescription: "IoT sensors comprehensively cover key equipment",
    },
  ]

  return (
    <section
      id="technology"
      className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              AIoT & AI Agent 的架構與核心能力
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              AIoT & AI Agent Architecture and Core Capabilities
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {technologies.map((tech, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-2">{tech.icon}</div>
                <CardTitle className="text-lg">{tech.title}</CardTitle>
                <CardDescription className="text-sm font-medium">{tech.englishTitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">{tech.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{tech.englishDescription}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            我們的技術架構實現從感測、分析到控制的完整管理。
          </p>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Our technology architecture achieves complete management from sensing, analysis to control.
          </p>
        </div>
      </div>
    </section>
  )
}
