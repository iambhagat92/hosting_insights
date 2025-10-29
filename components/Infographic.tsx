interface InfographicData {
  title: string;
  items: {
    label: string;
    value: string | number;
    color?: "green" | "blue" | "red" | "yellow" | "purple" | "orange";
    icon?: string;
  }[];
  layout?: "vertical" | "comparison" | "metrics";
  description?: string;
}

const colorClasses = {
  green: "bg-green-100 border-green-300 text-green-900",
  blue: "bg-blue-100 border-blue-300 text-blue-900",
  red: "bg-red-100 border-red-300 text-red-900",
  yellow: "bg-yellow-100 border-yellow-300 text-yellow-900",
  purple: "bg-purple-100 border-purple-300 text-purple-900",
  orange: "bg-orange-100 border-orange-300 text-orange-900",
};

const defaultColors = [
  "green",
  "blue",
  "purple",
  "orange",
  "yellow",
  "red",
] as const;

export default function Infographic({ data }: { data: InfographicData }) {
  const { title, items, layout = "vertical", description } = data;

  if (layout === "metrics") {
    return (
      <div className="my-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
        <h2 className="text-3xl font-bold mb-2 text-center">{title}</h2>
        {description && (
          <p className="text-center text-gray-700 mb-6">{description}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const bgColor = colorClasses[item.color || defaultColors[idx % 6]];
            return (
              <div
                key={idx}
                className={`p-6 rounded-lg border-2 ${bgColor} text-center hover:shadow-lg transition`}
              >
                {item.icon && <div className="text-4xl mb-3">{item.icon}</div>}
                <div className="text-sm font-semibold opacity-90 mb-1">
                  {item.label}
                </div>
                <div className="text-3xl font-bold">{item.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (layout === "comparison") {
    return (
      <div className="my-12 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <th className="border-2 border-blue-600 p-4 text-left font-bold">
                {title}
              </th>
              {items.map((item, idx) => (
                <th
                  key={idx}
                  className="border-2 border-blue-600 p-4 text-center font-bold"
                >
                  {item.icon && <div className="text-2xl mb-1">{item.icon}</div>}
                  <div>{item.label}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* This would be populated by parent component with specific data */}
            {description && (
              <tr>
                <td
                  colSpan={items.length + 1}
                  className="p-4 text-center text-gray-600 italic"
                >
                  {description}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  // Default vertical layout
  return (
    <div className="my-12 p-8 bg-gradient-to-b from-blue-50 to-white rounded-xl border-l-4 border-blue-600">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      {description && (
        <p className="text-gray-700 mb-6">{description}</p>
      )}

      <div className="space-y-4">
        {items.map((item, idx) => {
          const bgColor = colorClasses[item.color || defaultColors[idx % 6]];
          return (
            <div
              key={idx}
              className={`p-4 rounded-lg border-l-4 ${bgColor} flex items-center justify-between hover:shadow-md transition`}
            >
              <div className="flex items-center gap-3">
                {item.icon && <div className="text-3xl">{item.icon}</div>}
                <div>
                  <div className="font-semibold">{item.label}</div>
                </div>
              </div>
              <div className="text-xl font-bold">{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Preset configurations for common hosting comparisons
export const hostingInfographics = {
  pricingComparison: (hostName: string, plans: { name: string; price: string; icon?: string; color?: string }[]) => ({
    title: `${hostName} Pricing Breakdown`,
    items: plans.map((plan) => ({
      label: plan.name,
      value: plan.price,
      icon: plan.icon || "💰",
      color: plan.color,
    })),
    layout: "metrics" as const,
    description: "Monthly pricing for each plan",
  }),

  speedMetrics: (hostName: string, speed: string) => ({
    title: `${hostName} Speed Performance`,
    items: [
      {
        label: "Average Load Time",
        value: speed,
        icon: "⚡",
        color: "green" as const,
      },
      {
        label: "PageSpeed Score",
        value: "85+",
        icon: "🎯",
        color: "blue" as const,
      },
      {
        label: "Response Time",
        value: "< 100ms",
        icon: "📊",
        color: "purple" as const,
      },
    ],
    layout: "metrics" as const,
  }),

  featuresHighlight: (hostName: string, features: { name: string; status: string; icon?: string }[]) => ({
    title: `${hostName} Key Features`,
    items: features.map((feature) => ({
      label: feature.name,
      value: feature.status,
      icon: feature.icon,
      color: feature.status === "✅" ? ("green" as const) : ("red" as const),
    })),
    layout: "vertical" as const,
  }),

  reliabilityMetrics: (hostName: string) => ({
    title: `${hostName} Reliability & Support`,
    items: [
      {
        label: "Uptime Guarantee",
        value: "99.99%",
        icon: "✅",
        color: "green" as const,
      },
      {
        label: "Support Response",
        value: "< 2 min",
        icon: "📞",
        color: "blue" as const,
      },
      {
        label: "Money-Back Guarantee",
        value: "30-97 days",
        icon: "🔄",
        color: "orange" as const,
      },
      {
        label: "Data Centers",
        value: "Global",
        icon: "🌍",
        color: "purple" as const,
      },
    ],
    layout: "metrics" as const,
  }),

  valueComparison: (hostName: string, rating: string, bestFor: string[]) => ({
    title: `${hostName} Value & Rating`,
    items: [
      {
        label: "Overall Rating",
        value: rating,
        icon: "⭐",
        color: "yellow" as const,
      },
      ...bestFor.map((use, idx) => ({
        label: use,
        value: "✓",
        icon: "🎯",
        color: defaultColors[idx % 6],
      })),
    ],
    layout: "metrics" as const,
  }),
};
