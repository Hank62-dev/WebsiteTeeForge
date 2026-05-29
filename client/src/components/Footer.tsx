export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter text-primary mb-4">TeeForge</h2>
            <p className="text-muted-foreground max-w-sm">
              Premium heavyweight t-shirts designed for everyday wear. Built to last, styled to impress.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="/catalog" className="text-muted-foreground hover:text-primary transition-colors">All Products</a></li>
              <li><a href="/catalog?category=New" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="/catalog?category=Essentials" className="text-muted-foreground hover:text-primary transition-colors">Essentials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TeeForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
