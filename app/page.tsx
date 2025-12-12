import type React from "react"
import { CheckCircle2, MapPin, Navigation, Palmtree, Sunset, Wallet } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Countdown } from "@/components/countdown"

export default function HikkaTrip() {
  const tripStartDate = new Date("2025-12-04T07:00:00")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden rounded-b-[3rem] shadow-xl">
        <Image
          src="/hikkaduwa-beach-aerial-vibrant-blue-ocean.jpg"
          alt="Hikkaduwa Beach"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md px-4 py-1.5 text-sm uppercase tracking-widest">
            Sri Lanka • Dec 2025
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-2 drop-shadow-lg">Hikka Trip</h1>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-8 max-w-2xl mx-auto">Sun, Sand, and Good Vibes</p>

          <div className="mb-6">
            <Countdown targetDate={tripStartDate} />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-10 space-y-12">
        {/* Dates Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DateCard day="04" month="Dec" label="Check In" time="9/10 AM" icon={<Navigation className="w-5 h-5" />} />
          <DateCard
            day="05"
            month="Dec"
            label="Full Day"
            time="Adventure"
            active
            icon={<Palmtree className="w-5 h-5" />}
          />
          <DateCard day="06" month="Dec" label="Check Out" time="9/10 AM" icon={<Sunset className="w-5 h-5" />} />
        </div>

        {/* Visiting Places */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Visiting Places</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PlaceCard
              title="Villa Lagoonedge"
              description="Our Stay Resort"
              image="/luxury-sri-lanka-villa-garden-tropical.jpg"
            />
            <PlaceCard
              title="Hikkaduwa Beach"
              description="Main Beach"
              image="/hikkaduwa-beach-coral-reef-sri-lanka.jpg"
            />
            <PlaceCard
              title="Rathgama Lake"
              description="Kayak Adventure"
              image="/kayaking-rathgama-lake-mangroves-sri-lanka.jpg"
            />
            <PlaceCard
              title="Dodanduwa Cliff"
              description="500m from Resort"
              image="/dodanduwa-cliff-sri-lanka-sea-view.jpg"
            />
          </div>
        </section>

        {/* Budget Tracker */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Wallet className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Budget Tracker</h2>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-white dark:bg-slate-800 rounded-full shadow-sm border">
              <TabsTrigger
                value="overview"
                className="rounded-full py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="breakdown"
                className="rounded-full py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Breakdown
              </TabsTrigger>
              <TabsTrigger
                value="payments"
                className="rounded-full py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Payments
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-primary to-blue-600 text-white border-none shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium opacity-90">Total Estimated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">Rs xxx,xxx</div>
                    <p className="text-blue-100 text-sm mt-1">Will inform you later</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md bg-white dark:bg-slate-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium text-slate-500">Paid Advance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-emerald-600">Rs 12,500</div>
                    <Progress value={32} className="h-2 mt-4 bg-emerald-100" />
                    <p className="text-slate-400 text-xs mt-2">32% of total Budget</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md bg-white dark:bg-slate-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium text-slate-500">Current Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-slate-800 dark:text-white">Rs 3,500</div>
                    <div className="flex gap-2 mt-4 text-xs">
                      <Badge variant="outline" className="text-slate-500">
                        Kavishka: 1000
                      </Badge> <br/>
                      <Badge variant="outline" className="text-slate-500">
                        Ovinda: 2500
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Expense Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Place</TableHead>
                        <TableHead>Total Price</TableHead>
                        <TableHead>Advance Paid</TableHead>
                        <TableHead className="text-right">Remaining</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Villa Lagoonedge</TableCell>
                        <TableCell>Rs 26,000</TableCell>
                        <TableCell className="text-emerald-600">Rs 7,500</TableCell>
                        <TableCell className="text-right text-red-500 font-medium">Rs 18,500</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Kayaking Adventure</TableCell>
                        <TableCell>Rs 13,000</TableCell>
                        <TableCell className="text-emerald-600">Rs 5,000</TableCell>
                        <TableCell className="text-right text-red-500 font-medium">Rs 8,000</TableCell>
                      </TableRow>
                      <TableRow className="bg-slate-50 dark:bg-slate-900 font-bold">
                        <TableCell>Total</TableCell>
                        <TableCell>Rs 39,000</TableCell>
                        <TableCell className="text-emerald-600">Rs 12,500</TableCell>
                        <TableCell className="text-right text-red-500">Rs 26,500</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="breakdown">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="bg-blue-50 dark:bg-blue-950/20 pb-4">
                    <CardTitle className="text-blue-700 dark:text-blue-300 flex justify-between items-center">
                      <span>Villa Advance</span>
                      <span className="text-lg">Rs 7,500</span>
                    </CardTitle>
                    <CardDescription>Paid by</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <Contributor name="Dilusha" amount={2500} />
                      <Contributor name="Charith" amount={2500} />
                      <Contributor name="Kavishka" amount={2500} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-orange-50 dark:bg-orange-950/20 pb-4">
                    <CardTitle className="text-orange-700 dark:text-orange-300 flex justify-between items-center">
                      <span>Kayaking Advance</span>
                      <span className="text-lg">Rs 5,000</span>
                    </CardTitle>
                    <CardDescription>Paid by</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <Contributor name="Dilusha" amount={1500} />
                      <Contributor name="Charith" amount={1000} />
                      <Contributor name="Deshan" amount={2500} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle>Individual Payments Tracker</CardTitle>
                  <CardDescription>Status of payments collected from the group</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Paid Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">To Pay</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <PaymentRow name="Dilusha" paid={4000} breakdown="2500 + 1500" />
                      <PaymentRow name="Charith" paid={3500} breakdown="2500 + 1000" />
                      <PaymentRow name="Kavishka" paid={3500} breakdown="2500 + 1000" />
                      <PaymentRow name="Deshan" paid={2500} />
                      <PaymentRow name="Savidya" paid={0} toPay={2500} />
                      <PaymentRow name="Pasindu" paid={0} toPay={2500} />
                      <PaymentRow name="Ovinda" paid={2500} />
                      <PaymentRow name="Tharusha" paid={0} toPay={2500} />
                      <PaymentRow name="Dhanithya" paid={0} toPay={2500} />
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}

function DateCard({
  day,
  month,
  label,
  time,
  active,
  icon,
}: { day: string; month: string; label: string; time: string; active?: boolean; icon: React.ReactNode }) {
  return (
    <Card
      className={`border-none shadow-lg overflow-hidden transition-all hover:scale-105 ${active ? "bg-primary text-white ring-4 ring-primary/20" : "bg-white text-slate-700"}`}
    >
      <CardContent className="p-6 flex items-center justify-between">
        <div>
          <p
            className={`text-sm font-medium uppercase tracking-wider mb-1 ${active ? "text-blue-100" : "text-slate-400"}`}
          >
            {month}
          </p>
          <p className="text-5xl font-black">{day}</p>
        </div>
        <div className="text-right">
          <div
            className={`inline-flex items-center justify-center p-2 rounded-full mb-2 ${active ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}
          >
            {icon}
          </div>
          <p className="font-bold text-lg">{label}</p>
          <p className={`text-sm ${active ? "text-blue-100" : "text-slate-500"}`}>{time}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function PlaceCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <Card className="overflow-hidden border-none shadow-md group cursor-pointer h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-bold text-lg leading-none mb-1">{title}</h3>
          <p className="text-xs text-slate-200">{description}</p>
        </div>
      </div>
    </Card>
  )
}

function Contributor({ name, amount }: { name: string; amount: number }) {
  return (
    <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
          {name.charAt(0)}
        </div>
        <span className="font-medium">{name}</span>
      </div>
      <span className="font-mono font-bold">Rs {amount}</span>
    </div>
  )
}

function PaymentRow({
  name,
  paid,
  toPay = 0,
  breakdown,
}: { name: string; paid: number; toPay?: number; breakdown?: string }) {
  const isPaid = toPay === 0

  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isPaid ? "bg-emerald-500" : "bg-amber-500"}`} />
          {name}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex flex-col">
          <span className={paid > 0 ? "text-slate-900 dark:text-white font-medium" : "text-slate-400"}>
            {paid > 0 ? `Rs ${paid}` : "-"}
          </span>
          {breakdown && <span className="text-[10px] text-slate-400">({breakdown})</span>}
        </div>
      </TableCell>
      <TableCell>
        {isPaid ? (
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1 pl-1">
            <CheckCircle2 className="w-3 h-3" /> Paid
          </Badge>
        ) : (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Pending
          </Badge>
        )}
      </TableCell>
      <TableCell className="text-right font-medium text-slate-600">{toPay > 0 ? `Rs ${toPay}` : "-"}</TableCell>
    </TableRow>
  )
}
