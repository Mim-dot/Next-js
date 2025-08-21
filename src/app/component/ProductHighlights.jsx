import React from "react";

const productHighlights = [
  {
    id: 1,
    title: "Smart Task Manager",
    description:
      "Organize your workflow with AI-powered task prioritization and reminders.",
    image: "https://picsum.photos/seed/task/400/250",
    features: ["AI Suggestions", "Reminders", "Team Collaboration"],
  },
  {
    id: 2,
    title: "Cloud Storage Pro",
    description:
      "Securely store and access your files from anywhere in the world.",
    image: "https://picsum.photos/seed/storage/400/250",
    features: ["End-to-End Encryption", "1TB Free", "Multi-device Sync"],
  },
  {
    id: 3,
    title: "Finance Buddy",
    description:
      "Track expenses, set budgets, and achieve financial freedom effortlessly.",
    image: "https://picsum.photos/seed/finance/400/250",
    features: ["Budget Tracker", "Spending Insights", "Goal Setting"],
  },
  {
    id: 4,
    title: "FitLife App",
    description:
      "Your personal fitness companion with workout plans and meal tracking.",
    image: "https://picsum.photos/seed/fitness/400/250",
    features: ["Workout Routines", "Meal Planner", "Progress Tracker"],
  },
];

export default function ProductHighlights() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Product Highlights
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productHighlights.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                  {product.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
