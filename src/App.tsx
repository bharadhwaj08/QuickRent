import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Laptop,
  Smartphone,
  Camera,
  Headphones,
  Clock,
  Shield,
  Zap,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">QuickRent</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a>
              <a href="#devices" className="text-muted-foreground hover:text-primary transition-colors">Devices</a>
              <Button>Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a>
                <a href="#devices" className="text-muted-foreground hover:text-primary transition-colors">Devices</a>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rent the Latest Gadgets
            <br />
            <span className="text-primary">Without the Commitment</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access premium devices without the hefty price tag. Try before you buy or rent for as long as you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" type="email" />
            <Button>
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose QuickRent?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Duration</h3>
              <p className="text-muted-foreground">Rent for a day, week, or month. Extend or return anytime.</p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-muted-foreground">All rentals come with comprehensive insurance coverage.</p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Latest Tech</h3>
              <p className="text-muted-foreground">Access the newest gadgets as soon as they hit the market.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Devices Section */}
      <section id="devices" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available Devices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DeviceCard
              icon={<Laptop />}
              title="Laptops"
              description="MacBooks, Gaming Laptops, Ultrabooks"
            />
            <DeviceCard
              icon={<Smartphone />}
              title="Smartphones"
              description="iPhones, Android Flagships"
            />
            <DeviceCard
              icon={<Camera />}
              title="Cameras"
              description="DSLRs, Mirrorless, Action Cameras"
            />
            <DeviceCard
              icon={<Headphones />}
              title="Audio"
              description="Headphones, Speakers, Microphones"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Renting?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy customers who rent with confidence
          </p>
          <Button variant="secondary" size="lg">
            Browse Devices
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">QuickRent</span>
              </div>
              <p className="text-muted-foreground">
                Rent the latest tech without breaking the bank.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 QuickRent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DeviceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

export default App;