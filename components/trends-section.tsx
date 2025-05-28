import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, AlertTriangle, Leaf } from "lucide-react"

export default function TrendsSection() {
  const trends = [
    {
      icon: <TrendingUp className="h-6 w-6 text-[#2B3A67]" />,
      title: "AI與IoT成為優化能源管理關鍵技術",
      description: "AI and IoT become key technologies for optimizing energy management",
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-[#8B5A8C]" />,
      title: "能源轉型與AI賦能：LLM與Agent驅動的智慧管理新紀元",
      description: "Energy Transition & AI Empowerment: New Era of Smart Management Driven by LLM and Agents",
    },
    {
      icon: <Leaf className="h-6 w-6 text-[#E17B47]" />,
      title: "能源成本持續攀升，碳中和要求日益嚴格",
      description: "Energy costs continue to rise, carbon neutrality requirements are increasingly stringent",
    },
  ]

  return (
    <section id="trends" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">市場痛點與產業趨勢</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Market Pain Points & Industry Trends
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {trends.map((trend, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-2">{trend.icon}</div>
                <CardTitle className="text-lg">{trend.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{trend.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8 space-y-4">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">市場正處於能源管理轉型的關鍵時刻。</p>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">企業面臨成本控制與永續發展的雙重挑戰。</p>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            The market is at a critical moment in the transformation of energy management.
          </p>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Enterprises face the dual challenges of cost control and sustainable development.
          </p>
        </div>
      </div>
    </section>
  )
}
