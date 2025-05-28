import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">合作討論</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Contact Us for Collaboration
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>聯絡我們 / Contact Us</CardTitle>
              <CardDescription>
                填寫以下表格，我們將盡快與您聯繫。
                <br />
                Fill out the form below and we will get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      姓名 / Name
                    </label>
                    <Input id="name" placeholder="請輸入您的姓名 / Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      電子郵件 / Email
                    </label>
                    <Input id="email" type="email" placeholder="請輸入您的電子郵件 / Enter your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    公司 / Company
                  </label>
                  <Input id="company" placeholder="請輸入您的公司名稱 / Enter your company name" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    訊息 / Message
                  </label>
                  <Textarea id="message" placeholder="請輸入您的訊息 / Enter your message" className="min-h-[120px]" />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2B3A67] via-[#8B5A8C] to-[#E17B47] hover:opacity-90 transition-opacity"
                >
                  送出 / Submit
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>聯絡資訊 / Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <h4 className="font-medium">地址 / Address</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">台灣台北市 / Taipei, Taiwan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <h4 className="font-medium">電子郵件 / Email</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">contact@aioters.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <h4 className="font-medium">電話 / Phone</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">+886 2 1234 5678</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
