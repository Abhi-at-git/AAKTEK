import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Shield, CheckCircle } from "lucide-react";

const Payment = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              Secure Payment
            </h1>
            <p className="text-xl opacity-90 animate-fade-in-up [animation-delay:200ms]">
              Complete your purchase securely
            </p>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Order Summary */}
              <div className="lg:col-span-1 animate-fade-in-up">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Service Package</span>
                      <span className="font-medium">$XXX.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Processing Fee</span>
                      <span>$XX.00</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">$XXX.00</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6 bg-muted/50">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Secure payment processing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>24/7 customer support</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Form */}
              <div className="lg:col-span-2 animate-fade-in-up [animation-delay:200ms]">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Details
                    </CardTitle>
                    <CardDescription>
                      Stripe integration will be configured here for secure payments
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-muted/50 rounded-lg p-8 text-center space-y-4">
                      <CreditCard className="w-16 h-16 mx-auto text-muted-foreground" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Payment Integration</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          This page is ready for Stripe or other payment gateway integration.
                          Contact us to set up your preferred payment method.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button variant="outline" asChild>
                            <a href="/contact">Contact for Setup</a>
                          </Button>
                          <Button asChild>
                            <a href="/services">View Services</a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Accepted Payment Methods */}
                    <div className="border-t pt-6">
                      <p className="text-sm text-muted-foreground mb-3">
                        We accept all major payment methods:
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {["Visa", "Mastercard", "American Express", "PayPal", "Apple Pay", "Google Pay"].map(
                          (method) => (
                            <div
                              key={method}
                              className="px-3 py-2 bg-muted rounded text-sm font-medium"
                            >
                              {method}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
