"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface PackageSelectionProps {
  onSelect: (pkg: string) => void;
  selectedPackage: string | null;
}

const packages = [
  {
    id: "basic",
    name: "Basic Package",
    price: "99,000",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "199,000",
    features: ["All Basic Features", "Feature 4", "Feature 5", "Feature 6"],
  },
  {
    id: "enterprise",
    name: "Enterprise Package",
    price: "299,000",
    features: ["All Premium Features", "Feature 7", "Feature 8", "Feature 9"],
  },
];

export default function PackageSelection({ onSelect, selectedPackage }: PackageSelectionProps) {
  const router = useRouter();

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold text-center mb-8">Select Your Package</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            className={`p-6 cursor-pointer transition-all ${
              selectedPackage === pkg.id
                ? "ring-2 ring-primary"
                : "hover:shadow-lg"
            }`}
            onClick={() => onSelect(pkg.id)}
          >
            <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
            <p className="text-2xl font-bold mb-4">₩{pkg.price}</p>
            <ul className="space-y-2 mb-6">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button
          size="lg"
          disabled={!selectedPackage}
          onClick={() => router.push(`/order?package=${selectedPackage}`)}
        >
          Continue to Order
        </Button>
      </div>
    </div>
  );
}