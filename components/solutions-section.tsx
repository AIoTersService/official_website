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
        "動態監測分析 - 即時追蹤建築與工廠能源用量，預測主要設備壽命",
        "節能分析 - 結合歷史與環境數據，計算最適能源策略",
        "AI Agent 自主優化 - 持續學習與調整，提高能源管理效率",
        "節能回饋機制 - 透明展示節能成果，支持決策與持續改善",
      ],
      englishFeatures: [
        "Real-time monitoring of energy usage in buildings and factories",
        "Energy-saving analysis using historical and environmental data",
        "AI Agent for autonomous optimization and adaptive learning",
        "Transparent feedback mechanism for continuous energy improvement",
      ],
    },
    {
      icon: <Thermometer className="h-10 w-10 text-[#8B5A8C]" />,
      title: "AI-Driven HVAC Optimization",
      subtitle: "AI 驅動的冷凍空調節能優化",
      description: "AI-Driven HVAC System Optimization",
      features: [
        "大數據分析 - 根據環境與使用數據模擬最佳空調策略",
        "動態自適應運算 - 實時調節設備運轉，提升效率 3-10%",
        "用戶行為整合 - 考量使用者習慣，提升舒適與節能平衡",
        "節能回饋機制 - 清晰呈現節能成果，強化永續管理",
      ],
      englishFeatures: [
        "Big data analysis to determine optimal cooling strategies",
        "Real-time adaptive computing for 3-10% energy improvement",
        "User behavior integration for comfort and energy balance",
        "Clear energy-saving feedback for sustainability management",
      ],
    },
    {
      icon: <Zap className="h-10 w-10 text-[#E17B47]" />,
      title: "Smart Water Management Platform",
      subtitle: "智能水資源管理平台",
      description: "Smart Water Resource Management Platform",
      features: [
        "高精度預測模型 - 預測水質與用量，提升供需匹配準確度",
        "結合氣象與歷史資料 - 作為多維決策依據，LLM 協助推論",
        "AI Agent 自主優化 - 水資源配置智能化、自動化",
        "智能代理協同 - 持續優化操作策略，提高資源使用效率",
      ],
      englishFeatures: [
        "High-accuracy prediction of water quality and demand",
        "Integrated weather and historical data for LLM-aided decision-making",
        "Autonomous AI agents for real-time water management",
        "Collaborative agents for continuous optimization and efficiency",
      ],
    },
  ];

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
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
