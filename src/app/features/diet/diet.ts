import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'app-diet',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './diet.html',
    styleUrls: ['./diet.css']
})

export class DietComponent {

    /* ================= USER INPUT ================= */

    height: number = 0
    weight: number = 0
    age: number = 0
    goal: string = ""

    /* ================= NUTRITION ================= */

    calories: number = 0
    protein: number = 0
    carbs: number = 0
    fats: number = 0

    /* ================= DIET DATA ================= */

    dietPlan: any[] = []

    breakfast: string[] = []
    midmeal: string[] = []
    lunch: string[] = []
    evening: string[] = []
    dinner: string[] = []


    /* ================= GENERATE DIET ================= */

    generateDiet() {

        /* ===== VALIDATION ===== */
        if (!this.height || !this.weight || !this.age || !this.goal) {
            alert("Please fill all details")
            return
        }

        /* ===== RESET ===== */
        this.dietPlan = []

        this.breakfast = []
        this.midmeal = []
        this.lunch = []
        this.evening = []
        this.dinner = []

        /* ===== CALORIES ===== */
        this.calories = this.weight * 30

        if (this.goal === "weight_loss") {
            this.calories -= 300
        }
        else if (this.goal === "muscle_gain") {
            this.calories += 300
        }

        /* ===== MACROS ===== */
        this.protein = Math.round(this.weight * 2)

        if (this.goal === "muscle_gain") {
            this.protein = Math.round(this.weight * 2.5)
        }

        this.fats = Math.round(this.weight * 0.8)

        this.carbs = Math.round(
            (this.calories - (this.protein * 4 + this.fats * 9)) / 4
        )

        /* ===== DIET PLAN ===== */

        // 🔥 WEIGHT LOSS
        if (this.goal === "weight_loss") {

            this.breakfast = ["Oats with Milk", "1 Apple", "Green Tea"]
            this.midmeal = ["Almonds", "1 Orange"]
            this.lunch = ["2 Chapati", "Veg Sabji", "Curd", "Salad"]
            this.evening = ["Green Tea", "Roasted Chana"]
            this.dinner = ["Soup", "1 Chapati", "Paneer"]

        }

        // 💪 MUSCLE GAIN
        else if (this.goal === "muscle_gain") {

            this.breakfast = ["Egg Omelette / Paneer", "Oats", "Banana", "Milk"]
            this.midmeal = ["Peanut Butter Sandwich", "Protein Shake"]
            this.lunch = ["Rice", "Chicken / Paneer", "Veg", "Curd"]
            this.evening = ["Banana Shake", "Nuts"]
            this.dinner = ["2 Chapati", "Paneer / Fish", "Veg"]

        }

        // ⚖ MAINTAIN
        else {

            this.breakfast = ["Poha / Upma", "Fruit", "Milk"]
            this.midmeal = ["Dry Fruits", "Juice"]
            this.lunch = ["2 Chapati", "Dal", "Veg", "Salad"]
            this.evening = ["Tea", "Peanuts"]
            this.dinner = ["1 Chapati", "Dal / Paneer", "Veg"]

        }

        /* ===== SHOW RESULT ===== */
        this.dietPlan = [1]   // trigger UI

    }

}