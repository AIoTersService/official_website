import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Thermometer, Zap } from "lucide-react"

export default function SolutionsSection() {
  const solutions = [
    {
      icon: <BarChart3 className="h-10 w-10 text-[#2B3A67]" />,
      title: "AIoTers Insight",
      subtitle: "智慧能源管理系統",
      description: "Smart Energy Management System",
      features: [
        "動態監測分析 - 建築與工廠能源用量即時追蹤，主要設備壽命預測",
        "碳排放管理，可視化界面管理",
        "分時電價優化 (發展目標)",
        "自動需求響應 (發展目標)",
        "顯著節能優化經濟效益",
      ],
      englishFeatures: [
        "Dynamic monitoring and analysis of building and factory energy usage",
        "Carbon emission management with visualization interface",
        "Time-of-use electricity price optimization (development goal)",
        "Automatic demand response (development goal)",
        "Significant energy-saving economic benefits",
      ],
    },
    {
      icon: <Thermometer className="h-10 w-10 text-[#8B5A8C]" />,
      title: "AI-Driven HVAC Optimization",
      subtitle: "AI 驅動的冷凍空調系統節能優化",
      description: "AI-Driven HVAC System Energy Optimization",
      features: [
        "大數據分析 - 結合歷史用電與環境數據計算最佳空調策略(BI)",
        "動態自適應運算 - 根據實時情況自動調整，提升用電效率10-30%",
        "用戶行為整合 - 考量使用者習慣，提供舒適度與節能的最佳平衡",
        "節能回饋機制 - 透明化展示節能成效，促進持續優化",
      ],
      englishFeatures: [
        "Big data analysis - combining historical electricity usage and environmental data",
        "Dynamic adaptive computing - automatically adjusts to improve efficiency by 10-30%",
        "User behavior integration - optimal balance between comfort and energy saving",
        "Energy-saving feedback mechanism - transparent display of energy-saving results",
      ],
    },
    {
      icon: <Zap className="h-10 w-10 text-[#E17B47]" />,
      title: "Smart Power Trading Platform",
      subtitle: "智能電力交易平台實踐",
      description: "Smart Power Trading Platform Implementation",
      features: [
        "高精度預測模型 - 電力價格、負荷與供需預測準確率高達90%以上",
        "結合氣象資料與歷史模式分析，提供可靠決策依據",
        "多智能體交易系統 - 自動化策略參與現貨與分時市場交易",
        "智能代理持續學習優化，提升盈利能力",
      ],
      englishFeatures: [
        "High-precision prediction model - over 90% accuracy for power price and demand",
        "Combines weather data and historical patterns for reliable decision-making",
        "Multi-agent trading system - automated strategies for spot and time-of-use markets",
        "Intelligent agents continuously learn and optimize to improve profitability",
      ],
    },
  ]

  return (
    <section id="solutions" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">智慧解決方案</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Smart Solutions
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-2">{solution.icon}</div>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription className="text-base font-medium">{solution.subtitle}</CardDescription>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400">主要功能 / Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#2B3A67] text-[#2B3A67] hover:bg-[#2B3A67]/5">
                  了解更多 / Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
