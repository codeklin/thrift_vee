import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About ThriftVee</h1>
              <p className="text-muted-foreground md:text-xl">
                We're on a mission to make sustainable fashion accessible to everyone while giving vintage clothing a
                second life.
              </p>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=450"
              width={550}
              height={450}
              alt="ThriftVee Team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p>
                ThriftVee was founded in 2023 by a group of fashion enthusiasts who were concerned about the
                environmental impact of fast fashion. We started as a small pop-up shop in local markets, curating
                unique vintage and second-hand clothing items.
              </p>
              <p>
                As our collection and customer base grew, we decided to bring our sustainable fashion mission online,
                making it accessible to more people while maintaining the personal touch that makes thrift shopping
                special.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p>
                At ThriftVee, we believe that fashion should be sustainable, affordable, and unique. Our mission is to
                reduce textile waste by giving pre-loved clothing a second life while helping our customers express
                their individual style.
              </p>
              <p>
                Every item in our collection is carefully selected and inspected to ensure quality. We focus on timeless
                pieces that transcend seasonal trends, promoting a more sustainable approach to fashion.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">How It Works</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Browse our collection of unique thrift items</li>
                <li>Find something you love and select your size</li>
                <li>Click "Buy Now" to connect with us directly via WhatsApp</li>
                <li>Confirm your purchase and shipping details</li>
                <li>Receive your sustainable fashion find and enjoy!</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-4">
                Note: Since each item is unique and one-of-a-kind, we recommend acting quickly when you find something
                you love.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Meet The Team</h2>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {team.map((member) => (
                  <div key={member.name} className="flex flex-col items-center text-center">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p>
                Have questions or need assistance? We're here to help! Reach out to us through any of the following
                channels:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+1 (234) 567-8901</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>hello@thriftvee.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>123 Thrift Avenue, Fashion District, CA 90210</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                  <span>Customer Support: Mon-Fri, 9am-5pm PST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & Creative Director",
    image: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Sam Rivera",
    role: "Head of Curation",
    image: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Taylor Kim",
    role: "Customer Experience Manager",
    image: "/placeholder.svg?height=160&width=160",
  },
]

