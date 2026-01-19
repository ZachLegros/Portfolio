"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Star, Dumbbell, TrendingUp } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { education } from "@/lib/data";

const interests = [
  {
    icon: Dumbbell,
    title: "Gym Rat",
    description: "315lb bench press and counting 🏋️",
  },
  {
    icon: TrendingUp,
    title: "Market Nerd",
    description: "Mass-refreshing charts and overthinking trades 📈",
  },
];

export default function Education() {
  return (
    <Section
      id="education"
      title="Education & Beyond"
      subtitle="The degree and the distractions"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Education Card */}
        <Card glow>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 border-primary/20 rounded-xl border p-3">
              <GraduationCap className="text-primary h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-2 font-[family-name:var(--font-space-grotesk)] text-xl font-bold">
                {education.degree}
              </h3>
              <p className="text-primary mb-2 font-medium">
                {education.school}
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-foreground-muted flex items-center gap-2">
                  <Award className="text-accent h-4 w-4" />
                  {education.honors}
                </span>
                <span className="text-foreground-muted flex items-center gap-2">
                  <Star className="text-accent h-4 w-4" />
                  {education.scholarship}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Beyond Code Card */}
        <Card>
          <h3 className="mb-4 font-[family-name:var(--font-space-grotesk)] text-lg font-bold">
            Beyond Code
          </h3>
          <div className="space-y-4">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3"
                >
                  <div className="bg-accent/10 rounded-lg p-2">
                    <Icon className="text-accent h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">{interest.title}</div>
                    <div className="text-foreground-muted text-sm">
                      {interest.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Card>
      </div>
    </Section>
  );
}
