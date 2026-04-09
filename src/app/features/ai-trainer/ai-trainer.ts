import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-ai-trainer',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './ai-trainer.html',
    styleUrls: ['./ai-trainer.css']
})
export class AiTrainerComponent {

    height: number = 0;
    weight: number = 0;
    goal: string = "Muscle Gain";

    result: string = "";

    generatePlan() {

        if (!this.height || !this.weight) {
            this.result = "⚠️ Please enter height and weight!";
            return;
        }

        /* 🔥 BMI CALCULATION */
        const heightInMeter = this.height / 100;
        const bmi = this.weight / (heightInMeter * heightInMeter);
        const finalBmi = bmi.toFixed(2);

        /* 🔥 BMI CATEGORY */
        let bmiCategory = "";

        if (bmi < 18.5) bmiCategory = "Underweight";
        else if (bmi < 24.9) bmiCategory = "Normal";
        else if (bmi < 29.9) bmiCategory = "Overweight";
        else bmiCategory = "Obese";

        let workout = "";
        let diet = "";

        /* ================= WORKOUT + DIET ================= */

        if (this.goal === "Muscle Gain") {

            workout = `
• Pushups - 4 sets
• Pullups - 4 sets
• Squats - 4 sets
• Bench Press - 4 sets
• Plank - 3 sets
`;

            diet = `
• Breakfast: Eggs + Oats + Milk
• Lunch: Rice + Chicken + Vegetables
• Dinner: Paneer / Chicken + Salad
`;

        }

        else if (this.goal === "Weight Loss") {

            workout = `
• Jump Rope - 5 min
• Burpees - 4 sets
• Mountain Climbers - 4 sets
• Running - 20 min
• Plank - 3 sets
`;

            diet = `
• Breakfast: Oats + Fruits
• Lunch: Brown Rice + Vegetables
• Dinner: Soup + Salad
`;

        }

        else {

            workout = `
• Pushups - 3 sets
• Squats - 3 sets
• Jogging - 15 min
• Plank - 2 sets
`;

            diet = `
• Breakfast: Fruits + Milk
• Lunch: Rice + Dal + Vegetables
• Dinner: Light Salad
`;

        }

        /* 🔥 FINAL RESULT (CLEAN FORMAT) */

        this.result = `
📊 BMI: ${finalBmi} (${bmiCategory})

🏋️ WORKOUT PLAN:
${workout}

🥗 DIET PLAN:
${diet}

💡 Tip:
Stay consistent and follow your plan daily for best results!
`;
    }
}