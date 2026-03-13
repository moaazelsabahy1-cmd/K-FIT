"use client";

import { motion } from "framer-motion";

export default function WorkoutPlan() {
  const days = [
    {
      title: "Day 1 - Chest & Back",
      exercises: [
        "Cable Bench Press",
        "T-Bar Row",
        "Incline Dumbbell Bench Press",
        "Lat Pulldown",
        "Chest Fly Machine",
        "Cable Row",
      ],
    },
    {
      title: "Day 2 - Shoulder & Arms ",
      exercises: [
        "Dumbbell Lateral Raise",
        "Cable Front Raise",
        "Cable Lateral Raise",
        "Dumbbell Press",
        "Biceps Cable Curl",
        "Tricep Rope",
        "Dumbbell Hammer",
        "Pulley Overhead",
      ],
    },
    {
      title: "Day 3 - Legs",
      exercises: [
        "Calf Raises Press",
        "Smith Hack Squats",
        "Leg Press",
        "Leg Curl",
        "Deadlift",
      ],
    },
  ];

  return (
    <section className="section__container workout__container">

      <motion.h2
        className="section__header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        PROGRAM PLAN
      </motion.h2>

      <div className="workout__grid">

        {days.map((day, index) => (
          <motion.div
            key={index}
            className="workout__card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{day.title}</h3>

            <ul>
              {day.exercises.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>

            <button className="btn">Start Workout</button>
          </motion.div>
        ))}

      </div>

    </section>
  );
}